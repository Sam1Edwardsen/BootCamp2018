function tick() {
    let currentTime = new Date().toLocaleTimeString('en-US');
    const test = React.createElement('h1', null, 'The time is ' + currentTime);

    ReactDOM.render(test, document.getElementById("root"));
}

tick() 
setInterval(tick, 1000);
