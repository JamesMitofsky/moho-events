import "./App.css";
import { Typography, Container } from "@mui/material";
import NewEvent from "./views/CreateEvent";
import Home from "./views/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Container sx={{ mt: 3, mb: 3 }}>
        <Typography color="primary.main" variant="h1">
          MOHO EVENTS
        </Typography>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="creer" element={<NewEvent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
