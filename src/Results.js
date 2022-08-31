import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.info) {
    return (
      <div className="Results">
        <h2>{props.info.word}</h2>
        {props.info.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
