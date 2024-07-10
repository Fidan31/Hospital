

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

export { instance };













// import axios,{ AxiosRequestConfig } from "axios";
// import useAuthStore from "../store/Authstore";

// const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

// const instance = axios.create({
//   baseURL: apiEndpoint,
// });


// const refreshAndRetryQueue = [];
// let isRefreshing = false;

// instance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers.Authorization = accessToken;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     const status = error.response ? error.response.status : null;

//     if (status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         try {
//           const accessToken = await useAuthStore.getState().getNewAccessToken();

//           instance.defaults.headers.Authorization = accessToken;

//           refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
//             instance
//               .request(config)
//               .then((response) => resolve(response))
//               .catch((err) => reject(err));
//           });

//           refreshAndRetryQueue.length = 0;

//           return instance(originalRequest);
//         } catch (refreshError) {
//           console.log("err", refreshError);
//         } finally {
//           isRefreshing = false;
//         }
//       }
//       return new Promise((resolve, reject) => {
//         refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
//         useAuthStore.getState().signOut();
//       });
//     }
//     return Promise.reject(error);
//   }
// );

// export { instance };











// import axios from "axios";
// import useAuthStore from "../store/Authstore";

// const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

// const instance = axios.create({
//   baseURL: apiEndpoint,
// });

// const refreshAndRetryQueue = [];

// let isRefreshing = false;

// instance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers.Authorization = accessToken;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     const status = error.response ? error.response.status : null;

//     if (status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         try {
//           const accessToken = await useAuthStore.getState().getNewAccessToken();

//           instance.defaults.headers.Authorization = accessToken;

//           refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
//             instance
//               .request(config)
//               .then((response) => resolve(response))
//               .catch((err) => reject(err));
//           });

//           refreshAndRetryQueue.length = 0;

//           return instance(originalRequest);
//         } catch (refreshError) {
//           console.log("err", refreshError);
//         } finally {
//           isRefreshing = false;
//         }
//       }
//       return new Promise((resolve, reject) => {
//         refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
//         useAuthStore.getState().signOut();
//       });
//     }
//     return Promise.reject(error);
//   }
// );

// export { instance };
