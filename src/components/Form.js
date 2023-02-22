import { useState } from "react";

const initialState = {
  username: "",
  password: "",
};

function Form() {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="name"
      />
      <input
        onChange={handleChange}
        name="password"
        type="text"
        placeholder="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
