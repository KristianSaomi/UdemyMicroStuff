/* axios.get("https://swapi.dev/api/people/1") //So working with Axios library actually parse the data
.then(res => { //No need to parse the promise to json
    console.log("resopond", res) //Get the data object stright away
})
.catch(e => {
    console.log("Error accoured: ", e)
}); */

/* const getAStarWarsPerson = async () => {
    const res2 = await axios.get("https://swapi.dev/api/people/1") //Fetch with a respond, parse into json object stright away.
    console.log(res2); //Show in log, no need to return the respond and await another promise.
};
getAStarWarsPerson(); */

/* ------------------------------ */

/* const getStarWarsPerson = async (people, id) => {
    try {
    const res3 = await axios.get(`https://swapi.dev/api/${people}/${id}`)
    console.log(res3.data);
    console.log("hair color is: ", res3.data.hair_color);
    console.log("height is: ", res3.data.height)
}catch(e) {
    console.log("ERROR", e)
};
};

getStarWarsPerson('people',1);
getStarWarsPerson('people',2);
getStarWarsPerson('people',3); */


/* const getJoke = async () => {
    const getAJoke = await getDadJoke();
    console.log(getAJoke);
} */
/* 
const buttons = document.querySelector('button');
const jokes = document.querySelector('#jokes');

const addTheJoke = async () => {
    const textJoke = await getDadJoke();
    console.log(textJoke);
    const newLi = document.createElement('LI');
    newLi.append(textJoke);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    const config = {headers: { Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;

}
buttons.addEventListener('click', addTheJoke); */

const button1 = document.getElementById('btn2');
const container = document.getElementById('joker');


const aJokePlease = async () => {
    const jokeText = await heresAJoke();
    console.log(jokeText);
    const created = document.createElement('LI');
    created.append(jokeText);
    container.append(created);

}

const heresAJoke = async () => {
    try {
        const headerSetts = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', headerSetts);
        return res.data.joke;
    } catch (e)  {
        console.log("NO JOKES AVAIBLE", e)
    }
}

button1.addEventListener('mouseover', aJokePlease)