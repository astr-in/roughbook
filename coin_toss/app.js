const coin = document.querySelector(".coin");
const stepSize = 200;
let delay = 400;
const max = 100;
const min = 50;
const offset = 10;
const accelaration = 0.06;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

coin.addEventListener("click", ()=>{
    console.log("flipping the card predict the output!!!!");
    for(let i = 0; i<getRandomInt(max)+min+getRandomInt(offset); i++){
        if(i%2===0){
            // rotation 1
            setTimeout(()=>{
                coin.style="transform:rotateY(180deg)";
            }, delay);
        }else{
            // rotation 2
            setTimeout(()=>{
                coin.style="transform:rotateY(360deg)";
            }, delay);        
        }

        delay += stepSize-(delay*accelaration);
    }
    delay = 500;
});