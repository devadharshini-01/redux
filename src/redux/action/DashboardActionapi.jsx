import axios from "axios";
import { dashboardApiConstants } from "../constants/DashboardConstantapi";

export const DashboardGetAction = () => async (dispatch) => {
  await dispatch({
    type:dashboardApiConstants.REQUEST,
    payload: { loading: true },
  });

  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);

    await dispatch({
      type:dashboardApiConstants.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch (error) {
    await dispatch({
      type:dashboardApiConstants.ERROR,
      payload: { loading: false, data: {} },
    });
  }
};
