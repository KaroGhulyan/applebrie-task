import fetchData from "../services/api/fetchData";
import { POSTS_API, USERS_API } from "../config/apiConfig";
import { useContext, useEffect, useState } from "react";
import { PostInterface, UserInterface } from "../interfaces/interfaces";
import { UserDataContext } from "../store/context/UserDataStore/UserDataProvider";
import { DataActionTypes } from "../store/context/UserDataStore/actions";

const usersResults = fetchData(USERS_API.GET_USERS);
const postsResults = fetchData(POSTS_API.GET_POSTS);

interface useTransformDataInterface {
  users: UserInterface[];
  posts: PostInterface[];
}

const useTransformData = (): useTransformDataInterface => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const { dispatchUserDataState } = useContext(UserDataContext);

  const usersList = usersResults.read() as UserInterface[];
  const postsList = postsResults.read() as PostInterface[];

  useEffect(() => {
    const usersWithPosts = usersList.map((user) => {
      const post = postsList.find((post) => user.id === post.userId);
      return { ...user, post };
    });
    dispatchUserDataState({
      type: DataActionTypes.SetData,
      payload: usersWithPosts,
    });
    setUsers(usersWithPosts);
    setPosts(postsList);
  }, [usersList, postsList]);

  return {
    users,
    posts,
  };
};

export default useTransformData;
