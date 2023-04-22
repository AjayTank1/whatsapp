function typeMessage(message) {
    const a = document.querySelector("#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._1VZX7 > div._3Uu1_ > div > div.to2l77zo.gfz4du6o.ag5g9lrv.bze30y65.kao4egtt");
    a.focus();
    document.execCommand("insertText", false, message); 
}

function sendMessage() {
    const b = document.querySelector("#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._1VZX7 > div._2xy_p._3XKXx > button");
    b.click();
}

function send(message) {
    typeMessage(message);
    setTimeout(sendMessage, 100);    
}

let p = setInterval(send, 500, "Hey!!");
