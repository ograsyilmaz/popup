import React from "react";

export default function PopupModalHead(props) {
  return (
    <>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </>
  );
}
