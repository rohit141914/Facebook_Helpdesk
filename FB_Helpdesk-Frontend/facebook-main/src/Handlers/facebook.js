export const initFacebookSdk = () => {
  window.fbAsyncInit = () => {
    window.FB.init(
      {
        appId: "426435983148825",
        cookie: true,
        xfbml: true,
        version: "v19.0",
      },
      {
        scope: "pages_show_list,pages_messaging,public_profile,email",
        enable_profile_selector: true,
        return_scopes: true,
      },
    );

    window.FB.getLoginStatus(function(response) {
      console.log("facebook initialized");
    });
  };
};

export const loadAndInitFBSdk = (doc, script, sId) => {
  window.fbAsyncInit = () => {
    window.FB.init({
      appId: "426435983148825",
      autoLogAppEvents: true,
      xfbml: true,
      version: "v19.0",
    });
    window.FB.getLoginStatus(function(response) {
      console.log("facebook initialized");
    });
  };
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(doc, script, sId);
};

export function loadFacebookSDK(d, s, id) {
  return new Promise((resolve) => {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    console.log(js, fjs);
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    resolve();
  });
}

export const getFacebookLoginStatus = () => {
  if (!window.FB) return;
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      resolve(response);
    });
  });
};

export const fbLogin = () => {
  return new Promise((resolve, reject) => {
    window.FB.login(
      (response) => {
        resolve(response);
      },
      { config_id: "2148033162241382" },
    );
  });
};

export const getaccessToken = async () => {
  const res = await getFacebookLoginStatus();
  return res && res.access_token;
};

export const fbSdkLogout = (callback) => {
  return window.FB.logout(callback);
};

export const isFacebookConnected = async () => {
  const res = await getFacebookLoginStatus();
  return res && res.status === "connected";
};
