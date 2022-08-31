import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearch() {
  const [word, setWord] = useState("");

  function updateWord(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0].meanings);
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
    </div>
  );
}
