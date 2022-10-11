import React from 'react';

const Option = ({optio}) => {
    console.log(optio);
    return (
        <div>
            <div className='bg-slate-800 text-yellow-50 p-3'>
                <h1>{optio}</h1>
            </div>
        </div>
    );
};

export default Option;