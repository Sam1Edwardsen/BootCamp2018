// const container =
// React.createElement('div', {},
//     React.createElement('h1', { style: { backgroundColor: 'blue', color: 'white', width: '300px', height: '300px', float: 'left'} }, 'white on blue'),
//     React.createElement('h1', { style: { backgroundColor: 'red', color: 'blue', width: '300px', height: '300px', float: 'left' } }, 'blue on red'),
//     React.createElement('h1', { style: { backgroundColor: 'pink', color: 'green', width: '300px', height: '300px', float: 'left' } }, 'green on pink')
// )
// ReactDOM.render(
//     container,
//     document.getElementById('root')
// );

function App(props) {
    return React.createElement('div', null, React.createElement(Square,
        { background: 'blue', color: 'white', width: '300px', height: '300px', float: 'left' }),
        React.createElement(Square,
            { background: 'red', color: 'blue', width: '300px', height: '300px', float: 'left' }),
        React.createElement(Square,
            { background: 'pink', color: 'green', width: '300px', height: '300px', float: 'left' }),
    )
}
function Square(props) {
    return React.createElement('h1', { style: { backgroundColor: props.background, color: props.color, width: props.width, height: props.height, float: props.float } }, props.color + " on " + props.background)
}
ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('root')
);