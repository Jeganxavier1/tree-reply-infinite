
function getComment(){
    var div=document.createElement('div');
    div.innerHTML=generate();
    document.getElementById('message').appendChild(div);
    const reply =document.getElementById('comment').value;
    document.getElementById('text').innerHTML=reply;
}

function generate(){
    return "<p id='text'></p><button>reply</button>"
}