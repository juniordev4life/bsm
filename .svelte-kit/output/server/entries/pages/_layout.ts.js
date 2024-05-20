import "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import "firebase/database";
let auth;
async function load({ url }) {
  function getAuthUser() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user || false));
    });
  }
  return {
    getAuthUser,
    url: url.pathname
  };
}
export {
  load
};
