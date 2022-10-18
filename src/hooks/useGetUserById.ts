import { useContext, useEffect, useState } from "react";
import { UserInterface } from "../interfaces/interfaces";
import { UserDataContext } from "../store/context/UserDataStore/UserDataProvider";
import { useParams } from "react-router-dom";

interface useGetUserByIdInterface {
  user: UserInterface | null;
}

const useGetUserById = (): useGetUserByIdInterface => {
  const { id } = useParams();
  const [user, setUser] = useState<UserInterface | null>(null);
  const { userDataState } = useContext(UserDataContext);

  useEffect(() => {
    const userById = userDataState.users.find((user) => user.id === Number(id));
    if (userById) {
      setUser(userById);
    }
  }, [userDataState, id]);

  return {
    user,
  };
};

export default useGetUserById;
