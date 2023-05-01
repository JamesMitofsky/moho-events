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
      // if the server finds no user, empty the local representation
      if (!thisUser) {
        setUser({ role: { unregistered: true } });
        return;
      } else {
        // if user signs in for first time, record their info (returns false if no auth is returned)
        const userWithRole = await returnUserRole(thisUser.uid);

        if (userWithRole) {
          setUser(userWithRole);
          return;
        } else {
          // if server returned the user has no roles object attached, redirect to non-resident page
          setUser({ ...userWithRole, role: { reg_nonresident: true } });
          return;
        }
      }
    });
  }, []);

  console.log(user);

  // handle routing
  //   useEffect(() => {
  //     // exit if user has not yet been assigned to state
  //     if (!user) return;

  //     // PUBLIC ROUTES; do not respect auth rules for these paths
  //     const pathName = Router.pathname;
  //     if (pathName === "/key" || pathName === "/about") return;

  //     // if server has user
  //     const userHasRole = user.roles.admin || user.roles.resident;
  //     console.log(userHasRole);

  //     // send authorized users to code from the login page
  //     if (userHasRole) {
  //       // exit if not located on "login" or "welcome" pages
  //       if (pathName !== "/" && pathName !== "/new-user") return;

  //       // push to the code view
  //       Router.push("/code");
  //       return;
  //     }

  //     // exit if user has not authenticated (regardless of authroization status)
  //     if (user.roles.reg_nonresident) {
  //       Router.push("/new-user");
  //       return;
  //     }

  //     if (user.roles.unregistered) {
  //       Router.push("/");
  //       return;
  //     }

  // if user is not authorized, redirect to key page
  // }, [user]);

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
