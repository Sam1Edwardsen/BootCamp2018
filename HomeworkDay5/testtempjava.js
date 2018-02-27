document.getElementById('button').addEventListener('click', (e) => {
    let enteredCity = document.getElementsByClassName("cityname")[0].value;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Pewaukee&APPID=1a2ee77c0293dfa5151729edae422322';
fetch(url)
    .then(function(main) {
        let enteredCity = cord.name;
        return document.getElementsByClassName("cityname")[0].innerHTML = data.name
        })

        

    })
    
