import { createContext } from "react";
import { UserObject } from "../utils/globalTypes";

const UserContext = createContext<UserObject>({} as UserObject);

export default UserContext;
