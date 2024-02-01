import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/Login";
import { useState } from "react"
import Productdetail from "./form/ProductDetail"

import Productlist from "./pages/Productlist";








const App=()=>{
    const [active, setActive] = useState();
return(
//  <Login/>
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>} />
          <Route
            path="Productlist"
            element={
              <Productlist
                active={active}
                setActive={setActive}
               
              />
            }
          />
            <Route
            path="Productdetail"
            element={
              <Productdetail
                active={active}
                setActive={setActive}
            
              />
            }
          />
</Routes>
</BrowserRouter>
</>

)
}

  

export default App;
