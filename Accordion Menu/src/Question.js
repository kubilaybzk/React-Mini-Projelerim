import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);

  const openclose = () => {
    setOpen(!open);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={openclose}>
          {open?<AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {open && <p>{info}</p>}
    </article>
  );
};

export default Question;
