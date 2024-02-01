import { dashboardApiConstants} from "../constants/DashboardConstantapi";

let initialValues = {
  dashboardgetapi: [],
};
export const dashboardReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case dashboardApiConstants.REQUEST:
      return { dashboardgetapi: action?.payload };
    case dashboardApiConstants.SUCCESS:
      return { dashboardgetapi: action?.payload };
    case dashboardApiConstants.ERROR:
      return { dashboardgetapi: action?.payload };
    default:
      return value;
  }
};