import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
