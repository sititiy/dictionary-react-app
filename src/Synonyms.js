import React from "react";

export default function Synonyms(props) {
 
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          if (props.synonyms) {
            return <span key={index}>{synonym}</span>;
          } else {
            return null;
          }
        })}
      </div>
    );
   
}
