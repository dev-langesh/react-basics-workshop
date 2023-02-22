import Counter from "./components/Counter";
import Form1 from "./components/Form";
import ListUsers from "./components/ListUsers";
import Welcome from "./components/Welcome";

function App() {
  // return <Welcome name="langesh" text="Hello" />;

  return (
    <div>
      <Counter />

      <Form1 />

      <ListUsers />
    </div>
  );
}

export default App;
