import React from "react";
import "./App.css";
import Popup from "./components/popup/popup";
import LeftSetting from "./components/leftSetting/leftSetting";
import { useSite } from "./context/SiteContext";

function App() {
  const { modelShow, setModelShow } = useSite();
  const { headline,description ,sucessMessage} = useSite();


  const popupCloseHandler = (e) => {
    setModelShow(e);
  };
  return (
    <div className="App">
        <LeftSetting />
     
    

      {/* {/* <button onClick={(e) => setVisibility(!visibility)}>Toggle Popup</button> */}
    
      <div className="flowers">
      {modelShow && (
        <Popup
          onClose={popupCloseHandler}
          show={modelShow}
          title={headline}
          description={description}
        >
         
         
        </Popup>
      )}
      </div>
      
    </div>
  );
}

export default App;
