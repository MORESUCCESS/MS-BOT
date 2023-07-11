const userinput = document.getElementById("user-message");
const form = document.getElementById('chat-form');
const messages = document.getElementById('chat-area');
const apikey="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"

form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    const msg = userinput.value;
    userinput.value="";

    messages.innerHTML +=  `<div class="usermsg">You: <br> ${msg} </div><br>`;
    
    const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
            prompt: msg,
            model: "text-davinci-003",
            temperature:0,
            max_tokens: 4000,
            top_p:1,
            frequency_penalty:0.0,
            presence_penalty:0.0,
        },
        {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        }
    );
    const botresponse = response.data.choices[0].text;

    messages.innerHTML += `<div class="bot">MS Chatbot:<br>  <span> ${botresponse}</span>`;
});
