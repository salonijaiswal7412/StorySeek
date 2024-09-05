async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userInput })
        });
        const data = await response.json();
        displayResponse(data.message);
    }catch(error){
        console.log('error: ',error);
    }
}

function displayResponse(data){
    const chatBox=document.getElementById('chat-box');
    chatBox.innerHTML+=`<p>${data}</p>`;
}