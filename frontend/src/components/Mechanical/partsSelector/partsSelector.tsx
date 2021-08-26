import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./selector.css";

export default function Selector() {
  const data = [
    { Country: "India", id: 1 },
    { Country: "America", id: 2 },
    { Country: "Sri Lanka", id: 3 },
    { Country: "Italy", id: 5 },
    { Country: "China", id: 6 },
  ];

  const [options] = useState(data);

  return (
    <div className="sel">
      <Multiselect
        avoidHighlightFirstOption
        placeholder="Select Spare-Parts"
        showArrow
        closeIcon="cancel"
        options={options}
        displayValue="Country"
      />
    </div>
  );
}
