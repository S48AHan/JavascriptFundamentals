import React from "react";
import type { UserData } from "./Component1";

export const  UserContext = React.createContext<UserData[]>([]);