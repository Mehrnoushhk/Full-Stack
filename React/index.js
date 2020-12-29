// class Hello extends React.Component {
//     render() {
//         return <h1>Hello There</h1>;
//     }
// }

// function Hello() {
//     return (
//         <div>
//             <h1>Hello There</h1>
//             <h1>Hello There</h1>
//             <h1>Hello There</h1>
//         </div>
//     );
// }

function getMood() {
    const moods = ['Happy', 'Angry', 'Depressed', 'Rainbow', 'Buterfly'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return <h1>This is my age: {getMood()}</h1>
    }

}

function randNum() {
    return Math.floor(Math.random() * 10 + 1);
}

class JSXconditional extends React.Component {
    render() {
        let num = randNum();
        let msg;
        if (num === 7) {
            msg = <h1>Happy</h1>
        } else {
            msg = <h3>Sorry</h3>
        }
        return (
            <div>
                <p>Your number is {num}</p>
                {msg}
            </div>
        )
    }
}
ReactDOM.render(<JSXconditional />, document.getElementById('root'));