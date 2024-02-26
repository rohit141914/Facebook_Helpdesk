export const getApiUrl = () => {
  return process.env.REACT_APP_API_URL;
};

export const cookieAlias = {
  facebookId: "fid",
  accessToken: "fatk",
};

export const utcDateToLocal = (date) => {
  return new Date(date).toLocaleString();
};

export const getDateDiff = (date) => {
  const diff = new Date() - new Date(date);
  let minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 60)
    return minutes.toString() + (minutes <= 1 ? " min" : " mins");

  let hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + " h";

  return Math.floor(hours / 24) + " d";
};
