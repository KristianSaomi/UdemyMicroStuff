/*
fetch("https://swapi.dev/api/people/1/") //Fetch is gonna return a promise, send a request to this url.
.then(res =>  { //then it returns a promise, that promise may be responded or rejected.
    console.log("RESOLVED!", res)
    return res.json() //its up to us to return it as json, doe it resolves as fast as possible in the browser as "readableStream", this allso returns a promise.
})
.then(data => { //We then chain it to another then so we dont need to chain anything, keep it clean.
    console.log("Here comes data 1: ",data);
    return fetch("https://swapi.dev/api/people/2/");
})
.then(res => {
    return res.json();
})
.then(data2 => {
    console.log("Here comes data 2: ", data2);
})
.catch((e) => {
    console.log("ERROR!", e);
})
*/

//Async function

const loadStarWarsPeople = async () => {
    try {
    const res = await fetch("https://swapi.dev/api/people/1/"); 
    const data = await res.json();
    console.log(data);
    let hello = document.createElement('div');
    const parent = document.querySelector('#simpleH1');
    parent.before(hello)
    hello.className="beforeText"
    hello.innerHTML="This is the main character";
    const data1 = document.getElementById('simpleH1').innerHTML = 'Name: ' + data.name;
    
   

    } catch (e) {
        console.log("error");
    }
}

function myFunction() {
    loadStarWarsPeople();
}