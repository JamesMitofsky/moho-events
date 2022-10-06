import "./App.css";
import { Typography, Container } from "@mui/material";
import NewEvent from "./views/CreateEvent";
import Home from "./views/LandingPage";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import ViewEvent from "./views/ViewEvent";
import NoResponse from "./views/NoResponse";

function App() {
  const { eventID } = useParams<{ eventID: string }>();
  return (
    <>
      <Container
        sx={{ mt: 3, mb: 3, display: "flex", flexDirection: "column" }}
      >
        <Typography color="primary.main" variant="h1">
          MOHO EVENTS
        </Typography>
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
