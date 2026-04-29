import React, { useContext } from "react";
import type { UserData } from "./Component1";
import { UserContext } from "./UserContext";

const Component3 = () => {
    const users:UserData[] = useContext(UserContext); 
  return (
    <div className="flex gap-2">
      {users.map((user) => {
        return (
          <div className="flex gap-1" key={user.id}>
            {user.name}-{user.position}
          </div>
        );
      })}
    </div>
  );
};

export default Component3;
