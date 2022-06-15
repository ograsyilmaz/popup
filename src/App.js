import React from "react";
import "./App.css";
import Popup from "./components/popup/popup";
import LeftSetting from "./components/leftSetting/leftSetting";
import { useSite } from "./context/SiteContext";

function App() {
  const { modelShow, setModelShow } = useSite();

  const popupCloseHandler = (e) => {
    setModelShow(e);
  };
  return (
    <div className="App">
      {console.log(modelShow)}
      <LeftSetting />
      
      {/* {/* <button onClick={(e) => setVisibility(!visibility)}>Toggle Popup</button> */}
{modelShow}
      {modelShow && (
        <Popup
          onClose={popupCloseHandler}
          show={modelShow}
          title="Hello Jeetendra"
        >
          <h1>Hello This is Popup Content Area</h1>
          <h2>This is my lorem ipsum text here!</h2>
        </Popup>
      )}
 
    </div>
  );
}

export default App;
