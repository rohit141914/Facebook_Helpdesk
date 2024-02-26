// import logo from "./logo.svg";
import "./App.css";
import Connect from "./pages/Connect";
import CreateAccount from "./pages/Create_Account";
import Integeration from "./pages/Integeration";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Final from "./pages/Final";
import { useEffect } from "react";
import {
  initFacebookSdk,
  loadAndInitFBSdk,
  loadFacebookSDK,
} from "./Handlers/facebook";

function App() {
  useEffect(() => {
    // loadFacebookSDK(document, "script", "facebook-jssdk")
    //   .then(() => {
    //     initFacebookSdk();
    //   })
    //   .catch((err) => {
    //     console.log("error while loading facebook sdk", err);
    //   });
    loadAndInitFBSdk(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="/integration" element={<Integeration />}></Route>
          <Route path="/chat" element={<Final />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
