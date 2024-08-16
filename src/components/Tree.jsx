import React from "react";
import "./Styles.css";

const Tree = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ paddingLeft: 25 }}>
      {data.branches?.length > 0 ? (
        <div>
          <div
            onClick={toggleOpen}
            style={{
              cursor: "pointer",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className={`arrow ${isOpen ? "down" : "right"}`} />
            <span style={{ marginLeft: 8 }}>{data.label}</span>
          </div>
          {isOpen && (
            <div>
              {data.branches.map((node) => (
                <Tree key={node.id} data={node} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>{data.label}</div>
      )}
    </div>
  );
};

export default Tree;
