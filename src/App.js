import "./App.css";
import LinkResult from "./components/LinkResult/LinkResult";
import { useState } from "react";
import InputShortener from "./components/InputShortener/InputShortener";

function App() {
  const [inputValue, setInputValue] = useState("");//состояние для храниение тек значение
  const [shortenLink, setShortenLink] = useState("");// состояние которое хранит сокращенный URL-адрес после нажметие кнопку "Сократить".
  const [isShortened, setIsShortened] = useState(false);//состония для отображения компонента

  return (
    <div className="App">
      <h1>
        Сокращение <span>URL-адреса</span>{" "}
      </h1>

      <InputShortener
        setInputValue={setInputValue}
        setShortenLink={setShortenLink}
        setIsShortened={setIsShortened}
      />

      {isShortened && <LinkResult shortenLink={shortenLink} />} 
    {/*  isShortened &&- для отображение*/}
    </div>
  );
}

export default App;
