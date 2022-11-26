import axios from "axios";

export const jsonFetcher = async (/** @type {string} */ url) => {
  const res = await axios.get(url, {
    headers: {
      "Cache-Control": "public, max-age=31536000",
      "Content-Encoding": "gzip",
    },
    responseType: "json",
  });
  return res.data;
};

/**
 * @param {string} url
 * @param {string} userId
 */
export const authorizedJsonFetcher = async (url, userId) => {
  const res = await axios.get(url, {
    headers: { "x-app-userid": userId },
    responseType: "json",
  });
  return res.data;
};
