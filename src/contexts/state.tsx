import returnUserRole from "@/functions/returnUserRole";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type PossibleRoles = "admin" | "resident" | "unregistered" | "reg_nonresident";
type UnregisteredRole = { role: { unregistered: true } };
type Role = { role: Record<PossibleRoles, boolean> };
type ClientSideUserObject = (User & Role) | UnregisteredRole | null;

const AppContext = createContext<ClientSideUserObject>(null);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ClientSideUserObject>(null);

  // assign user to state
  useEffect(() => {
    onAuthStateChanged(getAuth(), async (thisUser) => {
      console.log("Auth change detected", thisUser);
      // if the server finds no user, empty the local representation
      if (!thisUser) {
        setUser({ role: { unregistered: true } });
        return;
      } else {
        const userWithRole = await returnUserRole(thisUser.uid);
        switch (userWithRole) {
          case userWithRole.role.admin || userWithRole.role.resident: {
            setUser(userWithRole);
          }
          case userWithRole.role.reg_nonresident: {
            setUser({ ...userWithRole, role: { reg_nonresident: true } });
          }
        }
      }
    });
  }, []);

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
