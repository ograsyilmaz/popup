import React from "react";
import "./App.css";
import Popup from "./components/popup/popup";
import LeftSetting from "./components/leftSetting/leftSetting";
import { useSite } from "./context/SiteContext";
import Form from "./components/form/form";

function App() {
  const { modelShow, setModelShow, data } = useSite();
  const { headline, description, sucessMessage } = useSite();

  const popupCloseHandler = (e) => {
    setModelShow(e);
  };




  return (
    <div className="App">
      <LeftSetting />
 


      <div className="flowers">
        {modelShow && (
          <Popup
            onClose={popupCloseHandler}
            show={modelShow}
            title={headline}
            description={description}
          >
            <Form />
          </Popup>
        )}
      </div>
    </div>
  );
}

export default App;
