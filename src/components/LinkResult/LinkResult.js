import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "../LinkResult/LinkResult.css"

export default function LinkResult({ shortenLink }) {
  const [copied, setCopied] = useState(false);
  const [isEdit, setIsEdit]=useState(false)

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer); 
  }, [copied]);

  return (
    <>
    {!isEdit && (
    <div className="result">
      <p>{shortenLink}</p>
      <CopyToClipboard text={shortenLink} onCopy={copy}>
        <button className={copied ? "copied" : ""}>Копировать</button>
      </CopyToClipboard>
    </div>
    )}
    </>
  );
}
