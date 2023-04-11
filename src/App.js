import {Routes, Route} from "react-router-dom";
import SigninPage from "./Pages/SinginPage";
import SignupPage from "./Pages/SingupPage";
import TodoPage from "./Pages/TodoPage";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
