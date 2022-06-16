import React from "react";
import "./App.css";
import Popup from "./components/popup/popup";
import LeftSetting from "./components/leftSetting/leftSetting";
import { useSite } from "./context/SiteContext";
import Form from "./components/form/form";
import SucessForm from "./components/form/SucessForm";

function App() {
  const { modelShow, setModelShow, data, isSubmitting } = useSite();
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
            {!isSubmitting ? <Form /> : <SucessForm />}
            {/* <Form/> */}
          </Popup>
        )}
      </div>
    </div>
  );
}

export default App;
