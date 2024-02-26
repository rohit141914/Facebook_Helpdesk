import { useNavigate } from "react-router-dom";
import "../styles/Connect.css";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { fbLogin, isFacebookConnected } from "./../Handlers/facebook.js";
import { cookieAlias } from "../utils/utils.js";

export default function FBInit() {
  const navigate = useNavigate();
  const [_, setCookie] = useCookies();

  useEffect(() => {
    isFacebookConnected().then((val) => {
      if (val) {
        navigate("/integration");
      }
    });
  }, []);

  //// to do
  // create api file

  function login() {
    fbLogin()
      .then((res) => {
        if (res.status !== "connected") {
          console.log("Login Aborted");
          return;
        }
        const authRes = res.authResponse;
        setCookie(cookieAlias.accessToken, authRes.accessToken);
        setCookie(cookieAlias.facebookId, authRes.userID);
        navigate("/integration");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="integration-box">
      <div className="title">Facebook Page Integration</div>
      <button className="connect-button" onClick={login}>
        Connect Page
      </button>
    </div>
  );
}
