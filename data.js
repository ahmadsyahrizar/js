const data = {
  id: "3e8i3jr2938ru", 
  plate: "dbh-3491", 
  availability: true, 
  type: "Sedan", 
  year: 2022, 
  options: ['base', 'middle', 'class'], 
  meta: {
   machineNumber: "12345", 
   expiration: "2027", 
   tire: {
    expiration: "2030", 
    brand: "goodyear", 
    code: ['x', '01139', 'otpxu']
   }
  }
}

// optional chaining
let getBrand = data?.brand || "-"

// console.log({getBrand})

// Object.keys(data).length > 0 && data.meta && Object.keys(data.meta.tire).length > 0 && data.meta.tire.brand ? data.meta.tire.brand : ""

// ordinary
// console.log({getData: data['year']})
// console.log({getData: data.availability})
// console.log({getData: data['meta']['tire']['code'][1]})


const binarData = [
 {
  title: "elevate your digital skills", 
  description: "Tingkatkan skill digital dengan kursus intensif....", 
  rating: 4,
  rateEmployability: "80%"
 }, {
  title: "hire top tech talents", 
  description: "Solusi rekrutment tim IT dalam waktu cepat, ....", 
  rating: 0,
  rateEmployability: "80%"
 }, {
  title: "Transform your team", 
  description: "Solusi pelatihan skill digital karyawan ...", 
  rating: 0,
  rateEmployability: "80%"
 }
]

// console.log("================================")
// console.log({getTitle: binarData[0].title})
// console.log({getDesc: binarData[0].description})
// console.log({getRating: binarData[0].rating})
// console.log({getrateEmp: binarData[0].rateEmployability})

const catalog = [
 {
  "cd": {
   "title":"empire ., ", 
   "artist": "", 
   "country":
  }
 }, 
 {
  "cd": {
   "title":"empire ., ", 
   "artist": "", 
   "country":
  }
 }, 
 {
  "cd": {
   "title":"empire ., ", 
   "artist": "", 
   "country":
  }
 }
];