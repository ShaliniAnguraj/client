import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen"
import LoginScreen from "./Screen/LoginScreen";
import RegisterScreen from "./Screen/RegisterScreen";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/signup" element={<RegisterScreen/>} />
      </Routes>
    </div>
  );
}

export default App;