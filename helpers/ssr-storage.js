import cookie from 'js-cookie';

export default {
  getItem(key) {
    if (process.SERVER_BUILD) return;
    window.localStorage.getItem(key);
    cookie.get(key);
  },
  setItem(key, value) {
    if (process.SERVER_BUILD) return;
    window.localStorage.setItem(key, value);
    cookie.set(key, value);
  },
  removeItem(key) {
    if (process.SERVER_BUILD) return;
    window.localStorage.removeItem(key);
    cookie.remove(key);
  },
};
