import React from "react";
import SucessPng from "../../img/sucess.png";
import { useSite } from "../../context/SiteContext";

export default function SucessForm() {
  const { sucessMessage } = useSite();
  return (
    <div className="form-sucess">
      <img src={SucessPng}></img>
      <p>{sucessMessage}</p>
    </div>
  );
}
