let btn = document.querySelector("#btn"); 
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate =1 ;
    text_speak.pitch =1;
    text_speak.volume=0.8;
    text_speak.lang="en-GB";
    window.speechSynthesis.speak(text_speak);
} 

function wishme() {
    let day = new Date();
    let hours = day.getHours();  // Get 24-hour format

    // Convert to 12-hour format
    let hours12 = hours % 12 || 12;  
    let ampm = hours >= 12 ? "PM" : "AM";  

    // Example greeting logic
    if (hours >= 0 && hours < 12) {
        speak("Good Morning");
    } else if (hours >= 12 && hours < 18) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}
// window.addEventListener("load",() =>{
//     wishme();
// })

window.addEventListener("load", () => {
    setTimeout(() => {
        wishme();
    }, 1000);  // 1-second delay
});

let speechrecognation = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechrecognation();
recognition.onresult = (event) =>{
    let currentindex=event.resultIndex;
    let transcript=event.results[currentindex][0].transcript;
    content.innerText = transcript;
    takecommand(transcript.toLowerCase())
}

btn.addEventListener("click",() =>
{
recognition.start();
btn.style.display = "none"
voice.style.display = "block"
})

function takecommand(message){
    btn.style.display = "flex"
voice.style.display = "none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, what can i help you?");
    }
    else if (message.includes("who are you")){
        speak("i am virtual assistent created by yash");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...");
        window.open("https://www.youtube.com/","_blank");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("https://www.whatsapp.com/","_blank");
    }
    else if(message.includes("open google")){
        speak("opening google...");
        window.open("https://www.google.com/","_blank");
    }else if(message.includes("open facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com/","_blank");
    
    }else if(message.includes("open instagram")){
        speak("opening instagram...");
        window.open("https://www.instagram.com/","_blank");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://");
    }
    else if(message.includes("open vs code")||message.includes("openVisual Studio Code")){
        speak("opening vs code...");
        window.open("Visual Studio Code://");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("whatsapp://");
    }
    else{
        let finaltext = "this what i found on internet regarding"+ message.replace("shifra","") || message.replace("shipra","");
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${message.replace("shipra","") || message.replace("shifra","")}`,"_blank");
    }
}