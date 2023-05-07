import React, { useState } from "react";
import "./Pestaña.css";

const Pestañas = ({ pestañas }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        {pestañas.map((tab, index) => (
          <div
            className="pestaña"
            key={index}
            onClick={() => {
              setActiveTab(index);
              tab.onTabClick();
            }}
            style={{ backgroundColor: index === activeTab ? "gray" : "white" }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        {pestañas.map((tab, index) => (
          <div
            key={index}
            style={{ display: index === activeTab ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pestañas;
