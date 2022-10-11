import { useState } from "react";
import Option from "./Option";
import Swal from 'sweetalert2'

const AllQuize = ({ all }) => {

  const { question, options ,correctAnswer} = all;
  const [open, setOpen] = useState(correctAnswer);


  const hellow =()=>{
    console.log(open);
    Swal.fire({
      title: open,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    // alert(open)
  }


  return (
    <div className="bg-slate-200 p-6 m-10 w-3/5 mx-auto">
      <div className="flex gap-3 justify-between">
        <div>{question}</div>


        {/* <div onClick={() => setOpen(!open)}>
          {open ? (
            <i class="fa-solid fa-unlock"></i>
          ) : (
            <i class="fa-solid fa-lock"></i>
          )}

        </div> */}
        <div>
        <i onClick={hellow} class="fa-solid fa-eye" ></i>
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
