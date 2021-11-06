export const DASHBOARD_SET_USERNAME = "DASHBOARD_SET_USERNAME";

export const setUserName = (username) => {
  return {
    type: DASHBOARD_SET_USERNAME,
    username,
  };
};
