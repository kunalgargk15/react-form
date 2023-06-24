import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Output from "./Output";

function App() {
  const [input, setInput] = useState({});

  const [output, setOutput] = useState({});

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setInput({ ...input, [inputName]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput(input);
  };

  return (
    <div className="App">
      <center>
        <Header />
        <Form
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Output output={output} />
      </center>
    </div>
  );
}

export default App;
