import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


function Sp() {
  return (
    <div>
      <h1>hmm~</h1>
    </div>
  )
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const another = (
  <a href="https://google.com" target='_blank'>click here to visit google</a>
)

const usertoo = "react isshhhh"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click here to visit google...',
  usertoo
)

createRoot(document.getElementById("root")).render(
  
  reactElement 
  // <App />
    
);
