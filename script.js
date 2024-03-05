// //alert("Hallo")
// let nama = "Putri";
// console.log(typeof nama);

// const phi = 3.14;
// console.log(phi);

// let ipk = 4.0;

// console.log(ipk);
// let isSuccess = true;
// console.log(isSuccess);

// let fakultas = [
//   "Fakultas Ilmu Komputer",
//   "Fakultas Hukum",
//   "Fakultas Kedokteran",
// ];
// console.log(fakultas[1]);
// const kedokteran = fakultas[1];
// console.log(kedokteran);

// const [fakul1, fakul2, fakul3] = fakultas;
// console.log[fakul3];
// fakultas.push("Fakultas Kedokteran");
// console.log(fakultas);
// fakultas.pop();
// console.log(fakultas);
// fakultas.shift();
// console.log(fakultas);
// fakultas.unshift(2);
// fakultas.unshift(true);
// console.log(fakultas);

// let result = 18 < 2;
// //console.log(result)
// let namaDepan = "Nadia";
// let namaBelakang = "Rafifah";
// //let fullName = namaDepan.concat (namaBelakang)
// let fullName = namaDepan + namaBelakang;
// console.log(fullName);

// let male = ["Nadia", "Nadya","Naia","Nday"]
// let female = ["Kepo","Kepoo","Kepooo","Kepoooo"]

// let student = [...female,...male]
// console.log(student)

// let orang ={
//     "nama":"Nadia",
//     "kelas":4,
//     "NPM": 2210631170038
// }
// console.log(orang.nama)
// console,log(orang["kelas"])

// let nilai;
// nilai = "100"
// nilai = +nilai
// console.log(typeof(nilai))
// if(nilai === 100){
//     console.log("Sempurna")
// }

// let nomor = [1,2,3,4,5]
// for(let i of nomor){
//     console.log(i)
// }

// const nama = nomor.forEach

// console.log (nama)
// function nama(number1,number2){
//     console.log(number1,number2)
// }
// nama(1,2)

// const hallo == () =>{
//     console.log("Hallo Word")
// }
// hallo()

// const urutan = (string,...nomor) =>{
//     console.log(...nomor)
// }
// urutan(1,2,3,4,5,6,7,8)

const Average = (...index) => {
  let sum = index.length;
  let result = 0;
  for (const i of index) {
    result += i;
  }
  return result / sum;
};

console.log("rata ratanya adalah" + Average(2, 3, 4, 6, 7, 8));

const Iyah = () => "Iyah dong";
const penambhan = (number1, number2) => {
  return number1 + number2;
};
console.log("rata ratanya adalah " + Average(2, 3, 4, 5, 6, 7, 8));
const iya = () => "iya dong";
const penambahan = (number1, number2) => number1 - number2;
let result = penambahan(10, 20);
let result2 = pengurangan(15, 5);
console.log(result2);
console.log(result);
