import { SimpleCard } from "../../components/shared/cards/SimpleCard";
import { UserIcon, ListWrapper } from "../../assets/styles/shared/";
import useTransformData from "../../hooks/useTransformData";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const { users } = useTransformData();
  const navigate = useNavigate();

  return (
    <ListWrapper>
      {users.map((user) => (
        <div onClick={() => navigate(`user/${user.id}`)} key={user.id}>
          <SimpleCard
            icon={<UserIcon />}
            title={user.name}
            description={user.email}
          />
        </div>
      ))}
    </ListWrapper>
  );
};

export default UsersList;
