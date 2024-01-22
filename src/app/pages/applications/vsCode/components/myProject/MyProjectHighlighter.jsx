import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


const MyProjectHighlighter = () => {
  const codeString = `import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
  const MyProjectHighlighter = () => {
    return (
      <SyntaxHighlighter className='!m-0' language="javascript" style={{ ...okaidia}} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
)};
export default MyProjectHighlighter;`;

  return (
       <SyntaxHighlighter className='!m-0' language="javascript" style={{ ...okaidia}} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default MyProjectHighlighter;
