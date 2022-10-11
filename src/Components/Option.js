import React from 'react';

const Option = ({optio , opb , all}) => {
   

    const chackAns =(al ,option)=>{
        const ans = al.correctAnswer;
        console.log('ans' ,ans);
        
    }




    return (
        <div>
            <div onClick={()=>chackAns(all , optio)} className='bg-slate-800 text-yellow-50 p-3 flex gap-2'>
                <input type="checkbox"></input>
                <h1>{optio}</h1>
            </div>
        </div>
    );
};

export default Option;