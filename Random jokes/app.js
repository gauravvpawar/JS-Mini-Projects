let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

let btn = document.querySelector("#result");
btn.addEventListener("click",async() =>{
    console.log("click");
    let joky = await getJoke();
    let p = document.querySelector("p");
    p.innerText = joky;

})

async function getJoke(){
    try{
    let res = await axios.get(url);
    console.log(res);
    return res.data.setup;
    }
    catch(e){
        console.log("err :- ",e);
        return "No data found";
    }
}