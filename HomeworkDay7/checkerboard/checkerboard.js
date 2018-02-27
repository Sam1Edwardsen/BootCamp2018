var styles = {
    row: { height: '20px' },
    cell1: { height: '200px', width: '200px', display: 'inline-block', backgroundColor: 'black' },
    cell2: { height: '20px', width: '20px', display: 'inline-block', backgroundColor: 'red' },
}
// function CheckerBoard(props) {
//     return /*Some UI... perhaps a list of rows?*/
// }
// function Row(props) {
//     return /*Some UI... perhaps a list of cells?*/
// }
function Cell(props) {
    return React.createElement('div', {style: styles.cell1}, "")
}
ReactDOM.render(
    React.createElement(Cell, null), 
    document.getElementById('root')
);