import fetchData from "../../services/api/fetchData";
import { USERS_API } from "../../config/apiConfig";
import { UserInterface } from "../../interfaces/interfaces";
import { SimpleCard } from "../../components/shared/cards/SimpleCard";
import { UserIcon, ListWrapper } from "../../assets/styles/shared/";

const resource = fetchData(USERS_API.GET_USERS);

const UsersList = () => {
  const users = resource.read() as UserInterface[];
  return (
    <ListWrapper>
      {users.map((user) => (
        <SimpleCard
          key={user.id}
          icon={<UserIcon />}
          title={user.name}
          description={user.email}
        />
      ))}
    </ListWrapper>
  );
};

export default UsersList;
