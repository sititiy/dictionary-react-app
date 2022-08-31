import React, { useState } from "react";

export default function DictionarySearch() {
  const [word, setWord] = useState("");

  function updateWord(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    alert(`searching for ${word}`);
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
