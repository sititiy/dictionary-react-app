import "./App.css";
import Footer from "./Footer";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="mt-5">
          <DictionarySearch defaultword="sunrise" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
