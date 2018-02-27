var input = document.getElementById("rowsIn");
input.addEventListener('keyup', updateBoard);


function Cell (props) {
    //console.log(props);
    return React.createElement('div', 
    {style: {
        backgroundColor: getCellColor(props.rowNum,props.cellNum),
        height: '20px',
        width: '20px',
        display: 'inline-block'}});
}

// ReactDOM.render(React.createElement(Cell, {rowNum: 2, cellNum: 2}),
//     document.getElementById("board"));

function Row (props){
    let rowArr = [];
    for (let i=1; i <= props.num; i++){
        rowArr.push(React.createElement(Cell, {key: i, rowNum: props.rowNum, cellNum: i}));
    }
    //console.log(rowArr);
    return React.createElement('div',{style: {height: '20px'}}, rowArr);
}
//     return React.createElement('div', null, ()=>{
//         for (let i=1; i <= props.num; i++){
//             React.createElement(Cell, {rowNum: props.row, cellNum: i});
//         }
//     })
// }

// ReactDOM.render(React.createElement(Row, {num: 5, rowNum: 1}),
//     document.getElementById("board"));

function Board (props){
    let brdArr = [];
    for (let i=1; i<= props.num; i++){
        brdArr.push(React.createElement(Row, {key: i, num: props.num, rowNum: i }));
    }
    return React.createElement('div', null, brdArr);
}

function updateBoard(){

    ReactDOM.render(React.createElement(Board, {num:input.value}),
        document.getElementById("board"));
}



function getCellColor(rowNum, cellNum){
    if(rowNum % 2 === cellNum % 2){
        return 'Black';
    } else {
        return 'Red';
    }
}


 
// console.log(getCellColor(1,1));
// console.log(getCellColor(1,2));
// console.log(getCellColor(1,3));
// console.log(getCellColor(1,4));
// console.log(getCellColor(2,1));
// console.log(getCellColor(2,2));
// console.log(getCellColor(2,3));
// console.log(getCellColor(2,4));
