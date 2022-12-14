import { Container, Box } from "@mui/material";
import NewEvent from "./views/CreateEvent";
import ListOfEvents from "./views/ListOfEvents";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Event from "./views/Event";
import EditEvent from "./views/EditEvent";
import NoResponse from "./views/NoResponse";
import NavBar from "./components/navbar/NavBar";
import Login from "./views/Login";
import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import UserContext from "./services/UserContext";

function App() {
  // handle transition animations
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  const [user, setUser] = useState<any>({});

  function checkAuthState() {
    //TODO — add loading state here
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        console.log(user);

        // prevent page from rendering twice if the user is already where they should be going
        const eventsPathName = "/liste-des-evenements";
        if (location.pathname === eventsPathName) return;
        navigate(eventsPathName);
      } else {
        // User is signed out
        const loginPath = "/";
        navigate(loginPath);
      }
    });
  }
  const navigate = useNavigate();

  // authenticate user
  useEffect(() => {
    console.log("Checking for user...");
    checkAuthState();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
        <Container
          sx={{
            mt: 0.2,
            mb: 3,
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
          className={transitionStage}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Login />} />
            <Route path="/liste-des-evenements" element={<ListOfEvents />} />
            <Route path="creer" element={<NewEvent />} />
            <Route path="/evenement">
              <Route path=":eventID/edit" element={<EditEvent />} />
              {/* <Route path=":eventID" element={<ViewEvent />} /> */}
            </Route>
            <Route path="*" element={<NoResponse />} />
          </Routes>
        </Container>
      </Box>
    </UserContext.Provider>
  );
}

export default App;
