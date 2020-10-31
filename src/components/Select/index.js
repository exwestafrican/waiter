import React, { useState } from "react";

const Select = ({ defaultText, optionsName, selectOptions }) => {
  const [appear, setAppear] = useState(false);
  const [text, setText] = useState(defaultText);
  const style = {
    space: {
      margin: "1rem 0 1.2rem 0",
    },

    dropdown: {
      display: appear ? "block" : "none",
    },
  };

  const selectOption = (e) => {
    setText(e.target.textContent);
  };

  const Options = ({ id, name, onClickHandler }) => {
    return (
      <div className="item" data-value={id} onClick={onClickHandler}>
        {name}
      </div>
    );
  };

  return (
    <div
      className="ui selection dropdown"
      onClick={() => setAppear(!appear)}
      style={style.space}
    >
      <input type="hidden" name={optionsName} value={text} />
      <i className="dropdown icon"></i>
      <div className="text">{text}</div>
      <div className="menu" style={style.dropdown}>
        {selectOptions.map((option) => (
          <Options
            key={option.id}
            id={option.id}
            name={option.name}
            onClickHandler={selectOption}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;
