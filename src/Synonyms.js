import React from "react";

export default function Synonyms(props) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          if (props.synonyms) {
            return( <li key={index}>{synonym}</li>);
          } else {
            return null;
          }
        })}
      </ul>
    );
   
}
