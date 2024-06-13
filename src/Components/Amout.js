import React from "react";

function Amout({title,amt}) {
  return (
    <div style={{
        display:"flex"
    }}>
      <div>
        <p
          style={{
            marginRight: "2px",
            fontWeight: "bold",
          }}
        >
          {title} |
        </p>
      </div>
      <div>
        <p
          style={{
            padding: "1px",
            border: "1px solid green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            fontWeight: "bold",
          }}
        >
          {amt}
        </p>
      </div>
    </div>
  );
}

export default Amout;
