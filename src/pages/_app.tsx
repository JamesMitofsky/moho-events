import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/NavBar";
import UserContext from "@/contexts/UserContext";
import { auth } from "@/services/firebase";
import localizedTheme from "@/styles/theme";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, Container, ThemeProvider } from "@mui/material";
import { User, onAuthStateChanged } from "firebase/auth";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import createEmotionCache from "../services/server/createEmotionCache";
import "../styles/global.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function Layout({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  // prepare input field readability state to be passed to the provider component
  const [isReadOnly, setIsReadOnly] = useState(false);
  const passableValue = { isReadOnly, setIsReadOnly };

  const [user, setUser] = useState<User>({
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
  } as User);

  const router = useRouter();

  function navigateNewUserHome() {
    // only allow this function to run if the user is on the login page
    const currentPath = router.pathname;
    const loginPagePath = "connexion";
    if (currentPath === loginPagePath) {
      const pathToListOfEvents = "/tout";
      router.push(pathToListOfEvents);
    }
  }

  // authenticate user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Checking for user...");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        console.log(user);

        // prevent page from rendering twice if the user is already where they should be going
        navigateNewUserHome();
      } else {
        // User is signed out
        console.log("No user is signed in.");
      }
    });
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={localizedTheme}>
        <UserContext.Provider value={user}>
          {/* <IsReadOnly.Provider value={passableValue}> */}
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
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
              <Component {...pageProps} />
            </Container>
            <Footer />
          </Box>
          {/* </IsReadOnly.Provider> */}
        </UserContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
