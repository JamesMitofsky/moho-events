import "./App.css";
import { Typography, Container } from "@mui/material";
import NewEvent from "./views/creer-evenement";
import Home from "./views/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Head>
        <title>Moho Events</title>
        <meta name="description" content="Gérer des événements à Moho" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Container sx={{ mt: 3, mb: 3 }}>
        <Typography color="primary.main" variant="h1" sx={{ fontSize: 50 }}>
          MOHO EVENTS
        </Typography>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="creer-evenement" element={<NewEvent />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
