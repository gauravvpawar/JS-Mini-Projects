let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async() =>
{
    let link = await getImage();
    let img = document.querySelector("#imeg");
    img.setAttribute("src",link);
    console.log(link);
})

async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(err){
        console/log("err : =",err);
        return "No img found";
    }
}