import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UserContext";

export interface UserData {
  id: string;
  name: string;
  position: string;
}

const Component1 = () => {
  const [user, setUser] = useState<UserData[]>([
    {
      id: "1",
      name: "Saber",
      position: "SE",
    },
    {
      id: "2",
      name: "Shushmi",
      position: "DMO",
    },
  ]);
  return (
    <UserContext.Provider value={user}>
      <Component2  />
    </UserContext.Provider >
  );
};

export default Component1;
