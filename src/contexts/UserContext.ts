import { User } from "firebase/auth";
import { createContext } from "react";

type UserContextProps = {
  user: User;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextProps>({
  user: {} as User,
  setUser: () => {},
});

export default UserContext;
