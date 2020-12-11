export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.data };
    case "LOGOUT":
      return {};
    default:
      break;
  }
};
