import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function DictionarySearch(props) {
  const [word, setWord] = useState(props.defaultword);
  const [result, setResult] = useState(null);
  const [load, setLoad] = useState(false);

  function updateWord(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    //main website : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function loaded() {
    setLoad(true);
    search();
  }

  if (load) {
    return (
      <div className="DictionarySearch">
        <section>
          <h2>Want to search for a word?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="your word..."
              autoFocus="off"
              autoComplete="off"
              className="text-center"
              defaultValue={props.defaultword}
              onChange={updateWord}
            />
          </form>
          <div className="hint mt-3">
            suggested words: sunrise, happy, coding, ....
          </div>
        </section>
        <Results info={result} />
      </div>
    );
  } else {
    loaded();
    return "Loading...";
  }
}
