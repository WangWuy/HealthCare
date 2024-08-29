import Config from "react-native-config";

export const ApiConfig = {
  API_URL: Config.API_URL,
};

export const ApiAuth = {
  VERSION: 'v1',
  API_GOOGLE_AUTH() {
    return `auth/google`;
  },
};

export const ApiProfile = {
  VERSION: 'v1',
  get API_GET_USER() {
    return `api/users/detail`;
  },
  API_EDIT_PROFILE() {
    return `api/users/update`;
  },
};

export const ApiFood = {
  VERSION: 'v1',
  get API_GET_FOOD() {
    return `api/foods`;
  },
  get API_GET_DETAIL_FOOD() {
    return `/foods/detail/{id}`;
  },
};