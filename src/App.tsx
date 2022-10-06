import "./App.css";
import { Container } from "@mui/material";
import NewEvent from "./views/CreateEvent";
import Home from "./views/LandingPage";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import ViewEvent from "./views/ViewEvent";
import NoResponse from "./views/NoResponse";
import MohoEventsLogo from "./components/MohoEventsLogo";

function App() {
  const { eventID } = useParams<{ eventID: string }>();
  return (
    <>
      <Container
        sx={{ mt: 0.2, mb: 3, display: "flex", flexDirection: "column" }}
      >
        <MohoEventsLogo height={80} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="creer" element={<NewEvent />} />
          <Route path="evenement">
            <Route path=":eventID" element={<ViewEvent />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NoResponse />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
