const btn = document.getElementById("fbutton");
btn.addEventListener('click',function flipper(){
    var symbols,hash;
    symbols='0123456789ABCDEF';
    hash='#';
    for (let i=0;i<6;i++){
        hash=hash + symbols[Math.floor(16*Math.random())]
        document.body.style.backgroundColor=hash;
    }
    document.getElementById('hex-code').innerText='The Hexa-Decimal Code For The Displayed Color is: '+ hash
});