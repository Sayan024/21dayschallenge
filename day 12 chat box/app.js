const text = document.getElementById('textbox')
const chat = document.getElementById('chattext')
function addchat(){
    if(text.value!==null)
    {
        chat.innerHTML += chat.innerHTML ? `<div class="chatview"><img src="rao.png" alt=""><h4>${text.value}</h4><div>`: `<div class="chatview"><img src="rao.png" alt=""><h4>${text.value}</h4><div>`;
        text.value="" 
    }
}
