import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Create from "./component/Create";
import Show from "./component/Show";

function App() {
  
  return (
    <div className="container text-center">
      <h2 className="m-5 text-uppercase text-white grady p-2 rounded">CRUD Contex - Reducer</h2>
      <Create/>
      <Show/>
    </div>
  );
}

export default App;
