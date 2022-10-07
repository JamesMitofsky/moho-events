import "./App.css";
import { Container } from "@mui/material";
import NewEvent from "./views/CreateEvent";
import Home from "./views/LandingPage";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ViewEvent from "./views/ViewEvent";
import NoResponse from "./views/NoResponse";
import MohoEventsLogo from "./components/MohoEventsLogo";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <>
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Container
          sx={{ mt: 0.2, mb: 3, display: "flex", flexDirection: "column" }}
        >
          <MohoEventsLogo height={80} />
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="creer" element={<NewEvent />} />
            <Route path="evenement">
              <Route path=":eventID" element={<ViewEvent />} />
            </Route>
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NoResponse />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
