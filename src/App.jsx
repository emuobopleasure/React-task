import AuthProvider from "./authContext";
import GlobalProvider from "./globalContext";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";
import NavBar from "./components/Header";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Header/>
          <Main />
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
