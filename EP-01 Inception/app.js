//for h1 

// const heading = React.createElement("h1", {id: "heading"} , "hello ji learn react");
// console.log(heading) ; // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// for paragraph

// const para = React.createElement("p",{id: "para"},"this is paragraph");
// console.log(para); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(para);

// exmple

// <div id='parent'>
    // <div id="child">
    //     <h1>this is para tag</h1>
    //     <h2>this is para tag</h2>
    // </div>

    // <div id="child2">
        //     <h1>this is para tag</h1>
        //     <h2>this is para tag</h2>    
    // </div>    

// </div>

// ReactElement(object) = converting to HTML(browser understand)


// React.createElement required three argument
// 1. name of the tag  such as h1,p,div,span
// 2. attributes (object) such as id,class 
// 3. children  1) normal 2) nested children this is parse with array.

const parent = React.createElement("div", {id: "parent"},

    //two element as sibbling create array of children
    React.createElement('div', {id: "child"}, [
        React.createElement('h1', {} , "this is para tag"),
        React.createElement('h2', {} , "this is para tag"),
    ]),
    React.createElement('div', {id: "child2"}, [
        React.createElement("h1",{}, "this is heading2"),
        React.createElement("h1",{}, "this is heading2")
    ])
);

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render method change (root ni under jeh pn hoy ane replace kare che and display.)
