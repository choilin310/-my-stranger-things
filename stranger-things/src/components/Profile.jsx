import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { token, user, setToken } = useAuth();

  return (
    <div>
      {console.log("user from profile")}
      <h1>Welcome - {token && `Welcome, ${user.username}`}</h1>
      <h3>Our Posts - insert our posts here,</h3>
      <h3>Our Messages </h3>
    </div>
  );
}
export default Profile;
