const elRed = document.getElementById("redPicker")
const elGreen = document.getElementById("greenPicker")
const elBlue =  document.getElementById("bluePicker")
const prodImg = document.getElementById("productImg");


elGreen.addEventListener("click", event => {
 console.log("clicked green")
 prodImg.style.backgroundImage = 'url("./assets/greenCar.jpeg")';
})


// 1. lanjutkan hal yang sama untuk picker warna biru, dan merah. 
// 2. rubah text color dari value dengan id=tag sesuai dengan warna yang dipilih.

// 3. nanti ada lagi tambahannya ,stay tune di hari jumat. 