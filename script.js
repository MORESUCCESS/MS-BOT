function sendMessage(){
    if(document.getElementById("user-message").value==""){
        alert("A message is required! inorder to communicate with MS CHATBOT");
    }else{
    var message =document.getElementById("user-message").value;
    document.getElementById("user-message").value="";
    var usermessage="<div class='user-message' style='  padding: 0.5rem 1rem;font-weight:bolder; margin-bottom:1em;background:#2aaa;box-shadow:0px 0px 10px rgba(224,225,16,0.3); border-radius:32px 0px 32px 32px; margin-top:1em; float: right;width:80%;font-size: 18px;color:#fff; font-family:'Roboto' sans-serif;'><br><span style='color:darkorange; font-family:monospace;'>You:</span> <br>"+ message +"</div>";
    document.getElementById("chat-area").innerHTML += usermessage;

    var chatbotmessage ="<div class='bot-message' style='  padding: 0.5rem 1rem;font-weight:bolder;border:0px;box-shadow:0px 0px 10px rgba(224,225,16,0.3);border-radius:0px 32px 32px 32px; margin-top:6.8em; width:80%;font-size: 18px;background:#2aaa; color:#fff;font-family:'Roboto' sans-serif;'><br><span style='color:darkorange; font-family:monospace;'>MS Chatbot AI:</span><br>"+ motivaionalResponse(usermessage)+"</div>";
    document.getElementById("chat-area").innerHTML += chatbotmessage;
}}
// function to get the motivational message
function motivaionalResponse(text){
    if(containkeyword(text, ["sad", "down", "broken", "depressed", "unhappy", "heartbroken", "not happy"])){
        return "The toughest and hardest time comes when things are about to get better, always remember that tough time don't last, but tough people do, stay strong and keep pushing forward!.There is a sacredness in tears. They are not the mark of weakness, but of power. They speak more eloquently than ten thousand tongues. They are the messengers of overwhelming grief, of deep contrition, and of unspeakable love.";
    }
    else if(containkeyword(text, ["stressed", "overwhelmed", "pressure", "anxious"])){
        return "Take a deep breadth and remind yourself that you're capable of handling anything that comes your way. Stay positive";
    }
    else if(containkeyword(text, ["failure", "mistake", "defeat", "frightened"])){
        return "Don't be afraid of failure. It's just a stepping stone to success. Learn from your mistakes and keep going!";
    }
    else if(containkeyword(text, ["your name","what is your name?","your name?", "what is your name"])){
        return "My name is MS Chatbot, I am a motivational Speaker, kindly let me know how you feel so that I can motivate you.";
    }
    else if(containkeyword(text, ["whats up", "how are you"])){
        return "Yo!, I'm good let me know the way you feel and let me motivate you.";
    }
    else if(containkeyword(text, ["thank you", "thanks"])){
        return "You're welcome!, I am glad you're motivated!.";
    }
    else if(containkeyword(text, ["i need motivation", "i need motivation words", "please motivate me", "motivate me", "can you motivate me"])){
        return "Let me know the exact way you really feel, and let me motivate you";
    }
    else if(containkeyword(text, ["why do people doubt me", "doubt me", "people are limiting me", "i am limited by people", "people limits me"])){
        return "if people are doubting how far you can go, go as far as you can that you can't hear them anymore.";
    }
    else if(containkeyword(text, ["hi", "hello","hey"])){
        return "Hi, whats up? kindly let me know the way you feel and let me motivate you!";
    }
    else if(containkeyword(text, ["write a program", "java","code", "write a code"])){
        return "I'm Sorry, as an AI, I can't write a program or code, I can only motivate you.";
    }
    else if(containkeyword(text, ["okay", "ok","alright"])){
        return "Yeah!";
    }
    else if(containkeyword(text, ["procastination", "not doing things on time","delay in everything"])){
        return "My advice is to never do tomorrow what you can do today. Procrastination is the thief of time!, do not delay or postpone what you are supposed to do at the right time.";
    }
    else if(containkeyword(text, ["inspirational quote", "inspirational"])){
        return "Try not to become a man of success, but rather become a man of value, and Focus on being productive instead of busy.";
    }
    else if(containkeyword(text, ["get hurt", "feel disappointed", "disappointed","hurt"])){
        return "As long as the world still exist people will always remain unbelievable, unpredictable, and always full of weird doings!. If you always get worried about what people will say, you will remain unhappy, just stay positive and be your real self";
    }
    else if(containkeyword(text, ["you are crazy,","you are crazy","you are mad,", "you are mad", "mad","crazy", "idiot", "bitch", "are you mad","are you crazy","bastard"])){
        return "I am deeply sorry if I made you angry &#128116; kindly let understand the way you really feel and let me motivate you!";
    }
    else if(containkeyword(text, ["who made you","developed you?","created you", "developed you"])){
        return "More Success&#128119;, was the one who developed me.";
    }
	else if(containkeyword(text, ["are you there?","are you there"])){
        return "Yes of course I am here with you";
    }
	else if(containkeyword(text, ["I am scared","I am afraid"])){
        return "I am sorry as an AI, I don't have feelings as human, I would have motivated you, try saying something else and I am sure I will try my best.";
    }
	else if(containkeyword(text, ["who is more success","who is more success?"])){
        return "More Success &#128119; is a front-end web developer who develops a responsive and animated landing pages and websites using html, css and javascript programming languages, he has gotten up to two years experience in front-end web development skills. He also design newsletters, forms, websites and landing pages using different platforms such as systeme.io, getresponse, GoHighlevel and many more...";
    }
	else if(containkeyword(text, ["i need money","send money"])){
        return "I am sorry, as an AI, I don't have the ability to send you money, and I am so sorry for that, I can only motivate you.";
    }
    else{
        return "Sorry  I don't really understand the way you feel or what you are trying to say, kindly let me know the way you actually feel!";
    }
}
//function to check if user input contain any of the given words
function containkeyword(input, keywords){
    input = input.toLowerCase();
    for(var i=0; i<keywords.length; i++){
        if(input.includes(keywords[i])){
            return true;
        }
    }
    return false;
}
