// import { create } from "zustand";
// import { getData, postData } from "../api/requests";
// import { loginEndpoints } from "../api/endpoints";


// const useAuthStore = create((set, get) => ({
//   user: null,
//   isSignInLoading: false,
//   isUserLoading: false,
//   isAuth: false,

//   setIsAuth: (isAuth) => set({ isAuth }),

//   currentUser: async () => {
//     set({ isUserLoading: true });
//     try {
//       const currentUser = await getData(loginEndpoints.currentUser);
//       set({ user: currentUser });
//       set({ isAuth: true });
//     } catch (err) {
//       set({ user: null });
//       set({ isAuth: false });
//     }
//     set({ isUserLoading: false });
//   },

//   signIn: async (data) => {
//     set({ isSignInLoading: true });
//     try {
//       const { access, refresh } = await postData(loginEndpoints.signIn, { arg: data });
//       localStorage.setItem("accessToken", `Bearer ${access}`);
//       localStorage.setItem("refreshToken", `Bearer ${refresh}`);
//       get().currentUser();
//     } catch (err) {
//       console.log("signIn error", err);
//     }
//     set({ isSignInLoading: false });
//   },

//   signOut: () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     set({ user: null });
//     set({ isAuth: false });
//   },

//   getNewAccessToken: async () => {
//     const refreshToken = localStorage.getItem("refreshToken");

//     const { access } = await postData(loginEndpoints.refresh, {
//       arg: { refresh: refreshToken?.replace("Bearer", "") },
//     });
//     localStorage.setItem("accessToken", `Bearer ${access}`);
//     set({ isAuth: true });

//     return access;
//   },
// }));

// export default useAuthStore;








import { create } from "zustand";
import { getData, postData } from "../api/requests";
import { loginEndpoints } from "../api/endpoints";

const useAuthStore = create((set, get) => ({
  user: null,
  isSignInLoading: false,
  isUserLoading: false,
  isAuth: false,
  
  setIsAuth: (isAuth) => set({ isAuth }),
  
  currentUser: async () => {
    set({ isUserLoading: true });
    try {
      const currentUser = await getData(loginEndpoints.currentUser);
      set({ user: currentUser });
      set({ isAuth: true });
    } catch (err) {
      set({ user: null });
      set({ isAuth: false });
    }
    set({ isUserLoading: false });
  },
  
  signIn: async (data) => {
    set({ isSignInLoading: true });
    try {
      const { access, refresh } = await postData(
        // 'https://medicalprojectback-production.up.railway.app/api/account/login/', 
        loginEndpoints.signIn,
         data );
      localStorage.setItem("accessToken", `Bearer ${access}`);
      localStorage.setItem("refreshToken", `Bearer ${refresh}`);
      get().currentUser();
    } catch (err) {
      console.log("signIn error", err);
    }
    set({ isSignInLoading: false });
  },
  
  signOut: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ user: null });
    set({ isAuth: false });
  },
  
  getNewAccessToken: async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    const { access } = await postData(loginEndpoints.refresh,
       {data: { refresh: refreshToken?.replace("Bearer", "") },
    });
    localStorage.setItem("accessToken", `Bearer ${access}`);
    set({ isAuth: true });

    return access;
  },
}));

export default useAuthStore;
