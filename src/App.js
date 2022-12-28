import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import LinearStepper from "./Components/LinearStepper";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Success from "./Pages/Success";
import Fail from "./Pages/Fail";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Container component={Box} p={3}>
                <Paper p={3}>
                    <Routes>
                        <Route path="/" element={<LinearStepper />} />
                        <Route path="/success" element={<Success />} />
                        <Route path="/fail" element={<Fail />} />
                    </Routes>
                </Paper>
            </Container>
        </div>
    );
}

export default App;
