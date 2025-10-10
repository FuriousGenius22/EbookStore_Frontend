
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Container from "./components/common/Container"
const App = () => {
  return (
    
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Container>
    
  );
};

export default App;
