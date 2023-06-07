import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Create from "./component/Create";
import Show from "./component/Show";

function App() {
  
  return (
    <div className="container text-center">
      <div className="m-5 grady d-flex p-2 rounded justify-content-center">
        <img src={viteLogo} alt="Logo Vite" className="px-3" />

        <h2 className="text-uppercase text-white px-2">
          CRUD Context - Reducer
        </h2>
        <img src={reactLogo} alt="Logo React" className="px-3" />
      </div>
      <Create/>
      <Show/>
    </div>
  );
}

export default App;
