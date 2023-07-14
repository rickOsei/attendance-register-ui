import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
console.log(window.innerWidth, window.innerHeight);

function App() {
  return (
    <div className="App">
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
