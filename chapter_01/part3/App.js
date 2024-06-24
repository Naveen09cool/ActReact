const heading = React.createElement("h1", {}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id:"child1"},[
        React.createElement("h1", {}, "First Child"),
        React.createElement("h2", {}, "Second Child")
    ]), 
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "First Child"),
        React.createElement("h2", {}, "Second Child")
    ])
])

root.render([heading,parent]);

// Usually JSX is used in react instead of above defined way as this becomes too complicated to read when structure gets big.