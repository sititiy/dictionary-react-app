import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <div>
                <strong>Definition:</strong>
                {definition.definition}
                <br />

                <strong>Example:</strong>
                <em>{definition.example}</em>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div>
                <strong>Definition:</strong>
                {definition.definition}
                <br />

                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
