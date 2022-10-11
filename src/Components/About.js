import React from 'react';

const About = () => {
  return (
    <div>
      <div className="bg-slate-400 w-5/6 mx-auto p-5 rounded-xl shadow-lg shadow-cyan-500/50 my-7">
        <h1 className="pb-3 text-2xl font-bold">
          what is the purpose of react router
        </h1>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>

      <div className= "my-7 bg-slate-400 w-5/6 mx-auto p-5 rounded-xl shadow-lg shadow-cyan-500/50">
        <h1 className="pb-3 text-2xl font-bold">how does context api work</h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>

      <div className="bg-slate-400 my-8 w-5/6 mx-auto p-5 rounded-xl shadow-lg shadow-cyan-500/50">
        <h1 className="pb-3 text-2xl font-bold">what is useref hook</h1>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default About;