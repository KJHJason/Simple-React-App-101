import { useState } from "react";

interface ListGroupProps {
  items:   string[];
  heading: string;

  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// Props variables are immutable by design unlike state variables
// Similarity? Both causes the component to re-render when changed
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const handleClick = (e: MouseEvent) => console.log(e);

  // hook as the component cannot access variables outside of the return
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // 1st returned value == variable (selectedIndex)
  // 2nd returned value == updater function (setSelectedIndex)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // when using map, you need to provide a unique key for each item
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
