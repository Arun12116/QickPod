
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { useState } from "react";


function App() {
  const [isLoggin, setLoggin] = useState(true)
  return (
    <>


      {
        isLoggin ? <Home /> : <Login  setLoggin={setLoggin}/>
      }


    </>
  );
}

export default App;
