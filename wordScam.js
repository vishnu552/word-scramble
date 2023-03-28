const wordText = document.querySelector(".word");
const hintText =document.querySelector(".hint span"),
 inputText =document.querySelector("input"),
 timeText =document.querySelector(".time b"),
refreshbtn = document.querySelector(".refresh-word"),
checkbtn = document.querySelector(".check-word");
let correctword,timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--;
        return timeText.innerText=maxTime;
        }
        clearInterval(timer);
        alert(`time off! ${correctword} was the correct word`)
    },1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random obj from words file
    let wordArray = randomObj.word.split("");// spiliting each letter of random word
    for(let i=wordArray.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));//getting random number
        let temp=wordArray[i];
        wordArray[i]=wordArray[j];
        wordArray[j]=temp;
    }
    wordText.innerText = wordArray.join("");//passing shuffled word as a word text 
    hintText.innerText = randomObj.hint;    //passing random  hint as a hint text
    correctword =randomObj.word.toLowerCase();//passing random word to correctword
    inputText.value ="";
    console.log(randomObj);
}
initGame();

const checkword=()=> {
    let userword =inputText.value.toLocaleLowerCase();//getting user value
    console.log(userword);
    if(!userword) return alert(`please! enter answer`);//if user didn't enter anything
    if(userword !== correctword) return alert(`oops! ${userword} is wrong answer`);//if user enter wrong word
    else alert(`congratsulations! ${userword} is correct answer`);//if user enter correct worc
    initGame();
}

refreshbtn.addEventListener("click",initGame);
checkbtn.addEventListener("click",checkword);
