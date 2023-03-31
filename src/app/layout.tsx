"use client";

import React, { useEffect, useState } from "react";
import "@fontsource/antonio";
import { Box, Container, ThemeProvider } from "@mui/material";
import NavBar from "@/components/navbar/NavBar";
import UserContext from "@/services/UserContext";
import Footer from "@/components/Footer";
import { auth } from "@/services/firebase";
import { UserObject } from "@/utilities/globalTypes";
import { onAuthStateChanged } from "firebase/auth";
import localizedTheme from "@/styles/theme";
import "../styles/global.css";

export default function Layout({ children }: any) {
  // prepare input field readability state to be passed to the provider component
  const [isReadOnly, setIsReadOnly] = useState(false);
  const passableValue = { isReadOnly, setIsReadOnly };

  const [user, setUser] = useState<UserObject>({
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
  });

  // const navigate = useNavigate();

  function navigateNewUserHome() {
    const eventsPath = "/tout";
    // TODO manage auto user navigation
    // if the signed in user is anywhere other than the login screen
    // if (currentPath !== "/") return;
    // navigate(eventsPath);
  }

  function checkAuthState() {
    //TODO — add loading state here
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user as UserObject);
        console.log(user);

        // prevent page from rendering twice if the user is already where they should be going
        navigateNewUserHome();
      } else {
        // User is signed out
        const loginPath = "/";
        // navigate(loginPath);
      }
    });
  }

  // authenticate user
  useEffect(() => {
    console.log("Checking for user...");
    checkAuthState();
  }, []);
  return (
    <React.StrictMode>
      <ThemeProvider theme={localizedTheme}>
        <html>
          <UserContext.Provider value={user}>
            {/* <IsReadOnly.Provider value={passableValue}> */}
            <Box
              component="body"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <NavBar />
              <Container
                sx={{
                  mt: 0.2,
                  mb: 3,
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                }}
              >
                {children}
              </Container>
              <Footer />
            </Box>
            {/* </IsReadOnly.Provider> */}
          </UserContext.Provider>
        </html>
      </ThemeProvider>
    </React.StrictMode>
  );
}
