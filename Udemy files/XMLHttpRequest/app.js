// "https://swapi.dev/api/people/1/"

//This is how you make a request through via XHR (XML HTTP REQUEST)
//This is an old way of making an request through Javascript

const req = new XMLHttpRequest();

req.onload = function() {
    console.log("It loaded!");
    const data = JSON.parse(this.responseText);
    console.log(data);
    const name = data;
    console.log(data.name, data.height);
}

req.onerror = function () {
console.log("ERROR!");
console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/")
req.send();


