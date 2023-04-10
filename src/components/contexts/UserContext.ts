import { createContext } from "react";
import { UserObject } from "../../functions/globalTypes";

const UserContext = createContext<UserObject>({} as UserObject);

export default UserContext;
