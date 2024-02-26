import { useNavigate } from "react-router-dom";
import "../styles/Integeration.css";
import { fbSdkLogout } from "../Handlers/facebook";
import { useCookies } from "react-cookie";
import { cookieAlias } from "../utils/utils";

function Integeration() {
  const navigate = useNavigate();
  const [_, __, removeCookie] = useCookies();

  function delete_acc() {
    fbSdkLogout(() => {
      console.log("logged out facebook");
      removeCookie(cookieAlias.accessToken);
      removeCookie(cookieAlias.facebookId);
      navigate("/connect");
    });
  }

  function chat() {
    navigate("/chat");
  }
  return (
    <div className="container">
      <header>
        <h1>Facebook Page Integration</h1>
      </header>
      <main>
        <h2>Integrated Page: Amazon Business</h2>
        <button className="btn-delete" onClick={delete_acc}>
          Delete Integration
        </button>
        <button className="btn-reply" onClick={chat}>
          Reply To Messages
        </button>
      </main>
    </div>
  );
}

export default Integeration;
