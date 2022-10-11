import { useState } from "react";
import Option from "./Option";

const AllQuize = ({ all }) => {
  const { question, options, correctAnswer } = all;
  const [open, setOpen] = useState(false);
  // console.log(correctAnswer);

  // const splite =question.split('<p>')
  // const next =splite.pop('</p>')
  // console.log(splite);

  return (
    <div className="bg-slate-200 p-6 m-10 w-3/5 mx-auto">
      <div className="flex gap-3 justify-between">
        <div>{question}</div>


        <div onClick={() => setOpen(!open)}>
          {open ? (
            <i class="fa-solid fa-unlock"></i>
          ) : (
            <i class="fa-solid fa-lock"></i>
          )}
        </div>

      </div>

      <div className="grid grid-cols-2 gap-5 mt-6">
        {options.map((op) => (
          <Option opb={open} all={all} optio={op}></Option>
        ))}
      </div>
    </div>
  );
};

export default AllQuize;
