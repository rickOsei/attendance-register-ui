import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router />
      <GlobalStyles />
      <ToastContainer
        autoClose={3000}
        toastClassName="alert"
        closeButton={false}
      />
    </div>
  );
}

export default App;
