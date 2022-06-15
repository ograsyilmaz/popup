import { useState } from "react";
import "./App.css";
// import Popup from "./components/popup/popup";
import LeftSetting from './components/leftSetting/leftSetting'

function App() {
  const [visibility, setVisibility] = useState(true);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <div className="App">
      <LeftSetting />
      {/* <button onClick={(e) => setVisibility(!visibility)}>Toggle Popup</button>
     

      {visibility && (
        <Popup
          onClose={popupCloseHandler}
          show={visibility}
          title="Hello Jeetendra"
        >
          <h1>Hello This is Popup Content Area</h1>
          <h2>This is my lorem ipsum text here!</h2>
        </Popup>
      )} */}
    </div>
  );
}

export default App;
