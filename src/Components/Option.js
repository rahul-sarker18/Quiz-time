import React from 'react';
import Swal from 'sweetalert2'


const Option = ({optio , opb , all}) => {

    const chackAns =(al ,option)=>{
        const ans = al.correctAnswer;
        if(option === ans){
            Swal.fire(
                'Good job!',
                'Correct answer',
                'success'
              )
        }else{
            Swal.fire({
                icon: 'error',
                text: 'You are wrong!',
                
              })
        }
    }




    return (
      <div>
        <div
          onClick={() => chackAns(all, optio)}
          className={`bg-slate-800 text-yellow-50 p-3 flex my-2  gap-2`}
        >
          <input type="checkbox"/> 
          <h1>{optio}</h1>

          
        </div>
      </div>
    );
};

export default Option;