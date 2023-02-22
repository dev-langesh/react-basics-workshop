import React, { useState } from "react";
import { data } from "../data";

export default function ListUsers() {
  const [state, setState] = useState(data);

  return (
    <div>
      {state.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
}
