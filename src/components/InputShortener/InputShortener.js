import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "../InputShortener/InputShortener.css";

export default function InputShortener({ setInputValue, setShortenLink,setIsShortened }) {
  const [value, setValue] = useState("");
 
  const shortUrl = () => {
    if (value.trim() !== "") {
      console.log(value);
      fetch(`https://clck.ru/--?url=${value}`)
        .then((res) => res.text())
        .then((shortenedLink) => {
          setShortenLink(shortenedLink);
          setIsShortened(true);
          console.log(shortenedLink);
        });
    }
  };

  return (
    <div className="input__container">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={shortUrl} value={"Сократить"} />
    </div>
  );
}
