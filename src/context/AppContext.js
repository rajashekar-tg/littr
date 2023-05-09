import React, { useReducer, useContext } from "react";
import reducer from "./Reducer";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./Action";
export const initialState = {
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  // const loginUser = async (currentUser) => {
  //   console.log(currentUser);
  //   try {
  //     const { data } = await axios.post("/api/v1/login", currentUser);
  //     console.log(data);
  //     const { user } = data;
  //     dispatch({
  //       type: LOGIN_USER_SUCCESS,
  //       payload: { user },
  //     });
  //   } catch (error) {
  //     console.log(error.res);
  //     dispatch({
  //       type: LOGIN_USER_ERROR,
  //       payload: { msg: error.res.data.msg },
  //     });
  //   }
  // };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        // loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
