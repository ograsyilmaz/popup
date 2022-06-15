import React from "react";
import "./leftSetting.scss";
import { useSite } from "../../context/SiteContext";

const LeftSetting = () => {
  const { headline, setHeadline } = useSite();
  const { description, setDescription } = useSite();
  const { sucessMessage, setSucessMessage } = useSite();

  const headlineChange = (value) => {
    setHeadline(value);
  };
  const descriptionChange = (value) => {
    setDescription(value);
  };
  const sucessMessageChange = (value) => {
    setSucessMessage(value);
  };
  return (
    <div className="leftSetting">
      <div className="leftSetting-Title">
        <h1>General Settings</h1>
      </div>
      <div className="leftSetting-Form">
        <div className="leftSetting-Form-Headline  leftSetting-Form-Item-Position">
          <p className="leftSetting-Form-Item-Title">Headline</p>
          <input
            type="text"
            value={headline}
            onChange={(e) => headlineChange(e.target.value)}
            name="headline"
            className="leftSetting-Form-Item-Input"
          />
        </div>
        <div className="leftSetting-Form-Description leftSetting-Form-Item-Position">
          <p className="leftSetting-Form-Item-Title">Description</p>
          <textarea 
          rows="5" cols="33"
          value={description}
            onChange={(e) => descriptionChange(e.target.value)}
            name="description"
            className="leftSetting-Form-Item-Input InputBig"></textarea>
          {/* <input
            type="text"
            value={description}
            onChange={(e) => descriptionChange(e.target.value)}
            name="description"
            className="leftSetting-Form-Item-Input InputBig"
          /> */}
        </div>
        <div className="leftSetting-Form-Success leftSetting-Form-Item-Position">
          <p className="leftSetting-Form-Item-Title">Sucess Message</p>
          <input
            type="text"
            value={sucessMessage}
            onChange={(e) => sucessMessageChange(e.target.value)}
            name="sucessMessage"
            className="leftSetting-Form-Item-Input"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSetting;
