import { createContext } from "react";
import { UserObject } from "../utilities/globalTypes";

const UserContext = createContext<UserObject>({} as UserObject);

export default UserContext;
