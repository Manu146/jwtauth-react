import AuthContextProvider from "./context/AuthContext";
import ProtectedComp from "./components/ProtectedComp";
import AuthComponent from "./components/AuthComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProtectedComp />
        <AuthComponent />
      </AuthContextProvider>
    </div>
  );
}

export default App;
