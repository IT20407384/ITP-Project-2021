import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./selector.css";
import { getConstantValue } from "typescript";

export default function Selector(props) {
  const data = [
    { id: 1, Country: "India" },
    { id: 2, Country: "America" },
    { id: 3, Country: "Sri Lanka" },
    { id: 4, Country: "Italy" },
    { id: 6, Country: "China" },
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
        onSelect={e => props.getValue(e)}
      />
    </div>
  );
}
