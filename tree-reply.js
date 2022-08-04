let splNum = 1;

function getComment(){
    let messageArea = document.querySelector(".messageArea")
    messageArea.id="textId";
    const msgDiv = document.createElement("div");
    msgDiv.className="msgDiv";
    const messageDiv = document.createElement('div')
    messageDiv.className="messageDiv"

    const comment = document.getElementById("comment").value;
    const reply = document.createElement("p");

    const dynamicBtn = document.createElement("BUTTON");
    dynamicBtn.setAttribute("id", "replyBtn");
    dynamicBtn.className ='btn';
    dynamicBtn.innerHTML="REPLY"
    dynamicBtn.onclick=a;

    reply.innerText=comment;
    messageDiv.appendChild(reply);
    messageDiv.appendChild(dynamicBtn);
    msgDiv.appendChild(messageDiv)
    messageArea.appendChild(msgDiv);
    splNum ++;
}


function a(){
    const msgDiv = document.querySelector(".msgDiv");
    const nestedmessage = document.createElement("div");
    nestedmessage.className="nestedDiv"
    const comment = document.getElementById("comment").value;
    const nestedReply = document.createElement("p");
    const nestedbtn =document.createElement("BUTTON")   
    nestedbtn.setAttribute("id","NestReplyBtn");
    nestedbtn.className ='btn';
    nestedbtn.innerText="REPLY"

    // nestedbtn.onclick=;

    nestedReply.innerText=comment;
    nestedmessage.appendChild(nestedReply);
    nestedmessage.appendChild(nestedbtn);
    msgDiv.appendChild(nestedmessage);
    // console.log("hi");
}
const parentbtn = document.querySelector("#replyBtn");
const childbtn = document.querySelector("#NestReplyBtn")
