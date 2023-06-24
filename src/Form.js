import React from "react";

const Form = ({ input, handleChange, handleSubmit }) => {
  return (
    <div>
      <form>
        <label>Enter your name: </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <label>Enter your age: </label>
        <input
          type="number"
          name="age"
          value={input.age}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
