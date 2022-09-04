function happyHalloweenCountDown(){
    const hellDate = new Date("October 31,2022 00:00");
    

    const now = new Date();
   
    const diff = hellDate-now;
   
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor (diff/msInDay);
   

    document.querySelector(".days").textContent = displayDay; 
   

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    
    document.querySelector(".min").textContent = displayMinute;

    const displaySec = Math.floor ((diff%msInMinute)/msInSecond);
    
    document.querySelector(".sec").textContent = displaySec;

    if (diff<=0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".min").textContent = 0;
        document.querySelector(".sec").textContent = 0;
        clearInterval(timer); 
        
        
        happyHalloween(); 
    }
}

let timer = setInterval(happyHalloweenCountDown,1000); 

function happyHalloween(){
    const heading = document.querySelector("h1");
    heading.textContent = "This is Halloween...🎃 ";
    heading.classList.add("event");
}



const button = document.querySelector("#myButton"); 
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play(); 
}

)