import useGetUserById from "../../hooks/useGetUserById";
import { UserViewWrapper } from "../../assets/styles/pages";
const UserView = () => {
  const { user } = useGetUserById();
  console.log(user);
  return (
    <>
      {user && user.post && (
        <UserViewWrapper>
          <div>
            <h2>{user.name} Post</h2>
            <p>{user.post.title}</p>
            <p>{user.post.body}</p>
          </div>
        </UserViewWrapper>
      )}
    </>
  );
};

export default UserView;
