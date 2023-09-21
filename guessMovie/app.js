// for array
let heroes = [["ironman","hulk","Thor"],["batman","flash","superman"]];
for(let i =0; i<heroes.length;i++)
{
    console.log(`The iteration of i :${i}`)
    console.log(i,heroes[i]);
    for(let j =0;j<heroes[i].length;j++){
        // console.log(`for the itertion j:${j}`);
        console.log(`j=${j},${heroes[i][j]}`);
    }
}