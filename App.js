import React from "react";
import ReactDOM from "react-dom/client";

/**Simple Element */
const heading = React.createElement('h1',{id:'heading'},"Hello from actual react");
console.log('Heading :', heading);
const simpleElement = ReactDOM.createRoot(document.getElementById('simpleElement'));
console.log('Root :', simpleElement);
simpleElement.render(heading);

/**
 * Complex Element
 * <div id='parent'>
 *   <div id='child'>
 *      <h1>I'm h1 tag inside the child</h1>
 *   </div>
 * </div>
 */

const parentChildH1 = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child1'},
    [React.createElement('h1',{},'I am sibling1 inside the child1 id'),
    React.createElement('h1',{},'I am sibling2 inside the child1 id')]),
    React.createElement('div',{id:'child2'},
    [React.createElement('h1',{},'I am sibling1 inside the child2 id'),
    React.createElement('h1',{},'I am sibling2 inside the child2 id')])]

);
console.log('parentChildH1 :', parentChildH1);
const parentChildH1ID = ReactDOM.createRoot(document.getElementById('parentChildH1ID'));
console.log('parentChildH1ID :', parentChildH1ID);
parentChildH1ID.render(parentChildH1);



/**
 * Cmd for the prod build  ---> `npx parcel build index.html`
 * if running the above command need to remove the  "main":"App.js" as parcel will
 * start giving the conflict because we have already given a entry point which is index.html.
 * why react is so fast. there could be so many reasons as lib,dependencies used
 * but one of them in parcel.
 * which makes the react fast.
 * what does parcel do ?
 * Read parceljs.com
 * HMR -> Hot module replacement.
 * Dev build.
 * local server.
 * Parcel uses a file watching algorithm written in c++.
 * Faster Build Because of caching.
 * Minification of file in case of production build.
 * Image Optimization.
 * Tree shaking means it removes the unused code
 * Consistant Hashing ? Read about it....
 * code splitting
 * Differential bundling to support older browsers.
 * Bundle all the files basically it is the bundler.
 * compresses the file It will remove all the white space of the file.
 * And at the end parcel is not doing all the thing by all it self it uses different
 * libraries to do the different things. for ex. for minification it uses diff. lib.
 */