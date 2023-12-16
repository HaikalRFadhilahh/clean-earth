import axios from "axios";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const token = atom({
  key: "token",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

const datausers = atom({
  key: "datausers",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

const getStatusAuth = selector({
  key: "getStatusAuth",
  get: async ({ get }) => {
    const tokenJWT = get(token);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_SERVICE}/users/validate`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: tokenJWT,
          },
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  },
});

// const getUserData = selector({
//   key: "getUserData",
//   get: async ({ get }) => {
//     const tokenJWT = get(token);
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_SERVICE}/users/validate`,
//         {},
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: tokenJWT,
//           },
//         }
//       );

//       return res.data.data;
//     } catch (error) {
//       localStorage.removeItem("recoil-persist");
//     }
//   },
// });

export { token, getStatusAuth, datausers };
