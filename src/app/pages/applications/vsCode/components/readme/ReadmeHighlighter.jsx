import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ReadmeHighlighter = () => {
  const codeString = `You can use the following codes on index.jsx (_oBoApp/main/index.jsx) 
you can type '/clr' to clean,
you can type '/cv' to open the cv app,
you can type '/linkedin' to open the linkedin app,`;

  return (
       <SyntaxHighlighter className='!m-0' language="javascript" style={{ ...okaidia}} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ReadmeHighlighter;
