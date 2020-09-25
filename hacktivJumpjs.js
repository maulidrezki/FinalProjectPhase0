let kiri = document.getElementById("kiri");
let kanan = document.getElementById("kanan");
let counter=0;

//https://www.w3schools.com/jsref/prop_element_classlist.asp

function jump(){
    if(kiri.classList == "animate"){return}
    kiri.classList.add("animate");
    setTimeout(function(){
        kiri.classList.remove("animate");
    },300);
}
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp,
//   https://www.w3schools.com/jsref/jsref_parse_json.asp
  

let selesai = setInterval(function() {
    let kakiKiri = parseInt(window.getComputedStyle(kiri).getPropertyValue("top"));
    let kepalaKanan = parseInt(window.getComputedStyle(kanan).getPropertyValue("left"));
    if(kepalaKanan<20 && kepalaKanan>-20 && kakiKiri>=130){
        kanan.style.animation = "none";
        alert(`AKHIRNYA KAMU BISA MENANGKAP SERANGGANYA!!! TAPI KARENA KAMU KELAMAAN JADI KAMU BAYAR Rp.${+Math.floor(counter/100) * 10000}`);
        counter=0;
        kanan.style.animation = "kanan 0.269s infinite linear";
    }else{
        counter++;
    }
}, 10);