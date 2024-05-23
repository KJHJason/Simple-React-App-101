import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
//     </div>
//   );
// }

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      {opened && (
        <Alert onClose={() => setOpened(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button colour="success" onClick={() => setOpened(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
