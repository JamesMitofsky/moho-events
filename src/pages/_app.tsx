import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/NavBar";
import UserContext from "@/contexts/UserContext";
import { auth } from "@/services/firebase";
import localizedTheme from "@/styles/theme";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, Container, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Analytics } from "@vercel/analytics/react";
import "dayjs/locale/fr";
import { User, onAuthStateChanged } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
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

  const userValue = { user, setUser };

  const router = useRouter();

  function logoutRedirection() {
    const currentPath = router.pathname;
    const pathToHome = "/";

    if (currentPath !== pathToHome) {
      router.push(pathToHome);
    }
  }

  // authenticate user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Verifying user");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        console.log(user);

        // prevent page from rendering twice if the user is already where they should be going
      } else {
        // User is signed out
        console.log("No user is signed in.");
        logoutRedirection();
        // navigateToLogin();
      }
    });
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={localizedTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <UserContext.Provider value={userValue}>
            {/* begin testing */}
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <NavBar />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  style={{ flex: 1 }}
                  key={router.route}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                >
                  <Container
                    sx={{
                      mt: 3,
                      mb: 3,
                      display: "flex",
                      flex: 1,
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Component {...pageProps} />
                    <Analytics />
                  </Container>
                </motion.div>
              </AnimatePresence>
              <Footer />
            </Box>
            {/* end testing */}
          </UserContext.Provider>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
