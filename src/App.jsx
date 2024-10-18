import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("f1f2f3");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
    console.log(handleClick);
  }

  return (
    <div className="Container">
      <h1 className="header">My QR Code Generator</h1>
      <div className="">
        <input
          type="text"
          onChange={(e) => {
            setTemp(e.target.value);
          }}
          placeholder="Enter the text you want to encode..."
        />
        <button className="btn" onClick={handleClick}>
          Generate a QR Code
        </button>
      </div>

      <div className="two-input">
        <h6>Background Color for QR Code:</h6>
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value.substring(1));
          }}
        />
        <h6>Dimension:</h6>
        <input
          type="range"
          min="200"
          max="600"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
      </div>

      <div className="output">
        <img src={qrCode} alt="qr code image" />
        <a
          href={qrCode}
          download="QRCode"
          className="btn-download"
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
