var generateBtn = document.querySelector(".btn-two");
var qrInput = document.querySelector(".qr-input");
var qrImg = document.querySelector(".qr-image");
var downloadBtn = document.querySelector(".btn-three")

generateBtn.onclick=function() {
    if(qrInput.value.length > 0) {
        generateBtn.innerText="Generating QR Code..."
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        +qrInput.value;
        qrImg.onload=function(){
            generateBtn.innerText="Generate";
        }
    }
}

downloadBtn.onclick=function() {
    console.log(qrImg);
    var doc = new jsPDF();
    doc.addImage(qrImg,10,10)
    doc.save('QRCode.png');
}
    
