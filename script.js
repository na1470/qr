const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrimg = wrapper.querySelector(".qr_code img");
generateBtn.addEventListener("click",()=>{
    let qrvalue = qrinput.value;
    if(!qrvalue) return;
    generateBtn.innerText = "Generating QR code...";
    //console.log(qrvalue);
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrimg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
    
});
qrinput.addEventListener("keyup",()=>{
    if(!qrinput.value){
        wrapper.classList.remove("active");
    }
});