import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


const MyProjectHighlighter = () => {
  const codeString = ` const greeting = "Hello, React!"; console.log(greeting);
  <div className='bg-[#272822] w-full h-full 
  MyProjectHighlighterMyProjectHighlighterMyProjectHighlighter'>
  `;

  return (
       <SyntaxHighlighter className='!m-0' language="javascript" style={{ ...okaidia}} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default MyProjectHighlighter;
