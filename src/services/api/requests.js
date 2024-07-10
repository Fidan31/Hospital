import { instance } from ".";

const getData = async (path) => 
  (await instance.get(path)).data;

const postData = async (path, data) => 
  (await instance.post(path, data)).data;

export { getData, postData }; 






// import { instance } from ".";

// const getData = async (path) => {
//   const response = await instance.get(path);
//   return response.data;
// };


// const postData = async (path, { arg }) => {
//   const response = await instance.post(path, arg);
//   return response.data;
// };

// export { getData, postData };
