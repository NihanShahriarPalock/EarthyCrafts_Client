import { useContext } from "react";
import { AuthContext } from "../firebase/AuthContextProvider";


const UseAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuth;
