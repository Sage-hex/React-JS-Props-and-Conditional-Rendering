
//Variation 1: Using Logical AND with Multiple Conditions in a Single Expression

const Box = ({ children, color, background }) => {
    const boxStyle = {
        width: "300px",
        height: "300px",
        backgroundColor: background,
        color: color,
        margin: 5
    };
    return (
        <div style={boxStyle}>
            {children}
        </div>
    );
};

function MyApp() {
    const user = "Admin";

    return (
        <div>
            <h1>Hello !</h1>
            {(user === "Student" && <Box color="white" background="black">Student</Box>) ||
             (user === "Admin" && <Box color="black" background="gold">Admin</Box>) ||
             (user === "Guest" && <Box color="grey" background="lightblue">Guest</Box>)}
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);

//Variation 2: Using Logical OR with Multiple Conditions in a Single Expression

const Box2 = ({ children, color, background }) => {
    const boxStyle = {
        width: "300px",
        height: "300px",
        backgroundColor: background,
        color: color,
        margin: 5
    };
    return (
        <div style={boxStyle}>
            {children}
        </div>
    );
};

function MyApp2() {
    const user = "Admin";
    return (
        <div>
            <h1>Hello !</h1>
            {(user === "Student" || <Box2 color="white" background="black">Student</Box2>) ||
             (user === "Admin" || <Box2 color="black" background="gold">Admin</Box2>) ||
             (user === "Guest" || <Box2 color="grey" background="lightblue">Guest</Box2>)}
             </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyApp2 />);



//Variation 3: IIFE with Multiple Conditions

const Box3 = ({ children, color, background }) => {
    const boxStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: background,
        color: color,
        margin: 5
    };
    return (
        <div style={boxStyle}>
            {children}
        </div>
    );
};



function MyApp() {
    const user = "Admin";

    return (
        <div>
            <h1>Hello World!</h1>
            {(function() {
                if (user === "Student") {
                    return <Box3 color="white" background="black">Student</Box3>;
                } else if (user === "Admin") {
                    return <Box3 color="black" background="gold">Admin</Box3>;
                } else if (user === "Guest") {
                    return <Box3 color="grey" background="lightblue">Guest</Box3>;
                }
            })()}
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);



//Variation 4: Separate Function with Multiple Conditions

const Box4 = ({ children, color, background }) => {
    const boxStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: background,
        color: color,
        margin: 5
    };
    return (
        <div style={boxStyle}>
            {children}
        </div>
    );
};

function renderBox(user) {
    if (user === "Student") {
        return <Box4 color="white" background="black">Student</Box4>;
    } else if (user === "Admin") {
        return <Box4 color="black" background="gold">Admin</Box4>;
    } else if (user === "Guest") {
        return <Box4 color="grey" background="lightblue">Guest</Box4>;
    }
    return null;
}

function MyApp() {
    const user = "Admin"; 

    return (
        <div>
            <h1>Hello World!</h1>
            {renderBox(user)}
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);



//Variation 55: Inline Ternary Operator with Multiple Conditions
const Box5 = ({ children, color, background }) => {
    const boxStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: background,
        color: color,
        margin: 5
    };
    return (
        <div style={boxStyle}>
            {children}
        </div>
    );
};

function MyApp() {
    const user = "Admin"; 

    return (
        <div>
            <h1>Hello World!</h1>
            {user === "Student" ? (
                <Box5 color="white" background="black">Student</Box5>
            ) : user === "Admin" ? (
                <Box5 color="black" background="gold">Admin</Box5>
            ) : user === "Guest" ? (
                <Box5 color="grey" background="lightblue">Guest</Box5>
            ) : null}
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);



























