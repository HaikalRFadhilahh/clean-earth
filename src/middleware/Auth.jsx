import { useEffect } from "react";
import { getStatusAuth, token } from "../store";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import Loading from "../components/Loading";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [tokenJWT, setTokenJWT] = useRecoilState(token);
  const statusAuth = useRecoilValueLoadable(getStatusAuth);
  useEffect(() => {
    if (statusAuth.contents == false) {
      setTokenJWT(undefined);
      navigate("/masuk");
    }
  }, [navigate, statusAuth]);

  return statusAuth.contents ? children : <Loading show={true} />;
};

export default Auth;
