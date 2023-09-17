
let btn = document.querySelector("button");
btn.addEventListener("click", async() =>
{
   let fact = await getAction();
   console.log(fact);
   let p = document.querySelector("#result");
   p.innerText = fact;
})
let url = "https://catfact.ninja/fact";
async function getAction(){
    try{
    let res  = await axios.get(url);
    return res.data.fact;
    }
    catch(e)
    {
        console.log("err - ",e);
        return "No found";
    }
}



