let url = "https://meme-api.com/gimme/wholesomememes";


let btn = document.querySelector("button");
btn.addEventListener("click",async() =>{
    let source = await getMeme();
    console.log(source);
    let img = document.querySelector("#imeg");
    img.setAttribute("src",source);
})

async function getMeme(){
    try{
        let res = await axios.get(url);
        return res.data.url;
    }
    catch(err)
{
    console.log("err :-",err)
    return "No data found";
}
}