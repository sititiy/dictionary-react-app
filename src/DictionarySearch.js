import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function DictionarySearch() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function updateWord(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //main website : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="your word..."
          autoFocus="off"
          autoComplete="off"
          className="text-center"
          onChange={updateWord}
        />
      </form>
      <Results info={result} />
    </div>
  );
}
