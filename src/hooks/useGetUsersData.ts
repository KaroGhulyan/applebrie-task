import fetchData from "../services/api/fetchData";
import { USERS_API } from "../config/apiConfig";

const users = fetchData(USERS_API.GET_USERS);
const posts = fetchData(USERS_API.GET_USERS);

const useGetUsersData = () => {
  return {
    users,
  };
};
