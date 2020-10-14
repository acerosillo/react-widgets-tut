import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Headers";

const items = [
  {
    title: "What is this 1",
    content: "this is some content to be pushed in",
  },
  {
    title: "What is this 2",
    content: "this is some content to be pushed in",
  },
  {
    title: "What is this 3",
    content: "this is some content to be pushed in",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color blue",
    value: "blue",
  },
  {
    label: "the color green",
    value: "green",
  },
];

export default () => {
  //const [showDropdown, setShowDropdown] = useState(true);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
