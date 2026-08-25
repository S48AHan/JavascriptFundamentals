import React from "react";
import { useUsers } from "./hooks/useUsers";
import UserList from "./UserList";

const UserPage = () => {
  const { user, loading, error } = useUsers();
  if (loading) return <p>Loading.........</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Users</h1>
      <UserList users={user} />
    </div>
  );
};

export default UserPage;
