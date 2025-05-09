import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('black');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPERCASE", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleColorBlue = () => {
    setTextColor('blue');
    props.showAlert("Text color changed to blue", "info");
  };

  const handleOnClear = () => {
    setText('');
    setTextColor('black');
    props.showAlert("Text cleared", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const readingTime = (0.008 * words).toFixed(2);

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: textColor
            }}
            id="myBox"
            rows="5"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-info mx-2" onClick={handleColorBlue}>Color to Blue</button>
        <button className="btn btn-danger mx-2" onClick={handleOnClear}>Clear Text</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{words} words and {text.length} characters</p>
        <p>{readingTime} Minutes read</p>
        <h2>Preview</h2>
        <p style={{ color: textColor }}>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
