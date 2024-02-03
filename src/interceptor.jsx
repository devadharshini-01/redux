import axios from "axios";

const Interceptor = () => {
  const refreshToken =JSON.parse( localStorage.getItem("refreshToken"));
  console.log(refreshToken);
  axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    (res) => {
      return res;
    },
   async (err) => {
    if (err.response.status === 401)  {
        try{
            await axios
            .post(
              " https://fts-backend.onrender.com/admin/refreshToken",
             { refreshToken}
            )
            .then((response) => {   
                localStorage.setItem(
                    "accessToken",
                    response.data.response.accessToken.accessToken
                    );
            console.log(response.data.accesstoken);
              localStorage.setItem("refreshToken",JSON.stringify(response.data.response.refreshtoken));
              console.log(response.data.response.refreshtoken);
            })
            .catch(err => console.log(err));
            if(err.response.status===400){
                // Navigate("/");
                window.location.href="/";
            }
        }
        catch(err){
            console.log(err);
        }
       }
       return Promise.reject.err;
   }
  );
};
export default Interceptor;
