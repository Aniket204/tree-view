import React from "react";
import Tree from "./components/Tree";

const data = {
  id: "1",
  label: "Root",
  branches: [
    {
      id: "2",
      label: "Child 1",
      branches: [
        { id: "4", label: "Grandchild 1" },
        { id: "5", label: "Grandchild 2" },
      ],
    },
    {
      id: "3",
      label: "Child 2",
      branches: [
        { id: "6", label: "Grandchild 3" },
        { id: "7", label: "Grandchild 4" },
      ],
    },
  ],
};

const App = () => (
  <div>
    <Tree data={data} />
  </div>
);

export default App;
