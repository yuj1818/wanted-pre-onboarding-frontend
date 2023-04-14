import {Routes, Route} from "react-router-dom";
import SigninPage from "./Pages/SinginPage";
import SignupPage from "./Pages/SingupPage";
import TodoPage from "./Pages/TodoPage";
import isUser from "./hoc/isUser";

function App() {

  const AuthTodoPage = isUser(TodoPage, true);
  const AuthSigninPage = isUser(SigninPage, false);
  const AuthSignupPage = isUser(SignupPage, false);

  return (
    <Routes>
      <Route path="/signin" element={<AuthSigninPage />} />
      <Route path="/signup" element={<AuthSignupPage />} />
      <Route path="/todo" element={<AuthTodoPage />} />
    </Routes>
  );
}

export default App;
