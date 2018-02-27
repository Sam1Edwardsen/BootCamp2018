function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Pewaukee&APPID=1a2ee77c0293dfa5151729edae422322';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.name;
  return authors;
  Document.getElementsByClassName("cityname")[0].innerHTML = data.name;
  // let authors = data.results;
  // return authors.map(function(author) {
  //   let li = createNode('li'),
  //       img = createNode('img'),
  //       span = createNode('span');
  //   img.src = author.picture.medium;
  //   span.innerHTML = `${author.name.first} ${author.name.last}`;
  //   append(li, img);
  //   append(li, span);
  //   append(ul, li);
  // })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});
