/* fetch("https://swapi.dev/api/people/1") //Fetch is going to return a promise
.then(res => { //That promise may be resolved or rejected
    console.log("Resolved", res); //Print resolved
    return res.json() //Doe it have an in-complette body, we take that resolved answer nad return it to a readable json.

})
.then((data)=> {
    console.log("---------------------------------------------")
    console.log("DONE!", data);
    console.log("Name is:", data.name);
    console.log("Height is :", data.height);
    console.log("Mass :", data.mass);
    console.log("Hair color :", data.hair_color);
    console.log("Skin color :", data.skin_color);
    console.log("---------------------------------------------")
    return fetch("https://swapi.dev/api/people/2");
    
})
.then((res) => {
  console.log("Data 2 returned");
  return res.json();
})
.then((data) => {
    console.log("---------------------------------------------")
    console.log("DONE 2", data);
    console.log("Name is:", data.name);
    console.log("Height is :", data.height);
    console.log("Mass :", data.mass);
    console.log("Hair color :", data.hair_color);
    console.log("Skin color :", data.skin_color);
    console.log("---------------------------------------------")
    return fetch("https://swapi.dev/api/people/3");
})
.then((res) => {
    console.log("Data 3 responded")
    return res.json()
    console.log("---------------------------------------------")
})
.then((data) => {
    console.log("---------------------------------------------")
    console.log("Data 3 sucessfully", data);
    console.log("DONE 2", data);
    console.log("Name is:", data.name);
    console.log("Height is :", data.height);
    console.log("Mass :", data.mass);
    console.log("Hair color :", data.hair_color);
    console.log("Skin color :", data.skin_color);
})
.catch((e) => {
    console.log("error!", e);
}); */


//Fetching multipul people in a async
/* const loadStarWarsPeople = async () => {
    try{
    const res = await fetch("https://swapi.dev/api/people/3");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/4");
    const data2 = await res2.json();
    console.log("Fetch nr 2 - OK:")
    console.log(data2);
    } catch(e) {
        console.log("AN ERROR ACCOURED - ", e)
    };
};

loadStarWarsPeople(); */


//Fetching one guy with Async.
/* const loadOneGuy = async () => {
    const res = await fetch ("https://swapi.dev/api/people/4");
    const data = await res.json();
    console.log(data);
}
loadOneGuy(); */





//Playing around

fetch("https://swapi.dev/api/people/3")
.then((res) => {
    return res.json();
})
.then((data) => {
   console.log("res 1: ", data)
   return fetch("https://swapi.dev/api/people/4");
})
.then((res) => {
console.log("res 2:", res);
}) .catch((e) => {
console.log("Error", e)
});

const tryingSomething = async () => {
const res = await fetch("https://swapi.dev/api/people/4");
const data = await res.json();
console.log("Data is:", data)
}

tryingSomething();