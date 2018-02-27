window.onload = function () {
    document.getElementById('button').addEventListener('click', (e) => {
        let userCity = document.getElementsByClassName("location")[0].value;
        const promise = axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + userCity + '&&appid=1a2ee77c0293dfa5151729edae422322&units=imperial');
        let userTemp = document.getElementsByClassName("temp")[0].value;

        promise.then(data => {
            document.getElementsByClassName("cityname")[0].innerHTML = data.data.name
            document.getElementsByClassName("temp")[0].innerHTML = 'Temperature: ' + ((data.data.main.temp))
            console.log()
        })

        promise.catch(err => {
            document.getElementsByClassName("cityname")[0].innerHTML = "Please enter a city."
            document.getElementsByClassName("temp")[0].innerHTML = ""
        })

        //console.log('display me')
    })
}