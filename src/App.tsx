import { Container, Box } from "@mui/material";
import NewEvent from "./views/CreateEvent";
import Home from "./views/LandingPage";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Event from "./views/Event";
import EditEvent from "./views/EditEvent";
import NoResponse from "./views/NoResponse";
import NavBar from "./components/Layouts/NavBar";
import AddGroupButton from "./components/AddGroupButton";
import Login from "./views/Login";
import { verifyUser } from "./services/firebase";

function App() {
  // handle transition animations
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  // authenticate user
  useEffect(() => {
    console.log("Checking for user...");
    verifyUser();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <NavBar />
      <Container
        sx={{ mt: 0.2, mb: 3, display: "flex", flexDirection: "column" }}
        className={transitionStage}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="creer" element={<NewEvent />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="evenement">
            <Route path=":eventID/edit" element={<EditEvent />} />
            <Route path=":eventID" element={<ViewEvent />} />
          </Route> */}
          <Route path="*" element={<NoResponse />} />
        </Routes>
      </Container>
      {location.pathname === "/" && <AddGroupButton />}
    </Box>
  );
}

export default App;
