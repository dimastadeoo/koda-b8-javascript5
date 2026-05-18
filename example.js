let array1 = ["a", "b", "c", 1,2,6]
let array2 = ["d", "e", "f"]
let array = [5, 6, 7]

/*1. built in method concat() untuk mengabungkan 2 atau lebih array
contohnya pada variabel array 3 ini menggabungkan elemen array 1 
dengan elemen array 2 dan elemen array*/
let array3 = array1.concat(array2, array) 
console.log(array3)

/*2. built in method copyWithin() ini untuk menyalin sebagian 
dari array ini ke lokasi lain dalam array yang sama 
dan mengembalikan array ini tanpa mengubah panjangnya
logikanya copyWithin(target, start, end) 
contoh pada array 1 dari elemen ke 0 akan diubah nilainya
menjadi elemen ke 3 sampai ke sebelum 5*/
console.log(array1.copyWithin(0, 3, 5)) 

/*3. built in method at() ini digunakan menerima nilai integer 
dan mengembalikan item pada indeks tersebut, memungkinkan 
integer positif dan negatif. Integer negatif dihitung mundur 
dari item terakhir dalam array contoh
*/
let index = 2
console.log(`index ke ${index} mengembalikan nilai ${array1.at(index)}`)
index = -2
console.log(`index ke ${index} mengembalikan nilai ${array.at(index)}`)


/*4. built in method every() ini akan mengembalikan nilai false
jika menemukan elemen dalam array yang tidak memenuhi fungsi 
pengujian yang diberikan. Jika tidak, metode akan mengembalikan 
nilai true contoh
*/
const kondisi = (nilai) => nilai < 40
array1 = [1, 30, 39, 29, 10, 13]
//akan menghasilkan true karena  semua elemen kondisinya terpenuhi
console.log(array1.every(kondisi))

/*5. built in method entries() ini untuk mengembalikan objek 
iterator array baru yang berisi pasangan kunci/nilai untuk 
indeks dalam array. contoh
*/
const iterator = array.entries();
//nilainya akan [0, nilai array ke 0]
console.log(iterator.next().value);
//nilainya akan [1, nilai array ke 1] dst
console.log(iterator.next().value);

/*6. built in method fill() ini untuk mengubah semua 
elemen dalam rentang indeks tertentu dalam sebuah array 
menjadi nilai statis. Metode ini mengembalikan array yang 
telah dimodifikasi. contoh
*/
array = [1, 2, 3, 4, 6]

// ubah menjadi nilai 0 dari elemen ke 2 sampai 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0, 6]

// ubah menjadi nilai 5 dari elemen ke 1 dst
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5, 5]

/*7. built in method filter() ini untuk membuat salinan dari 
sebagian array yang diberikan, dimana data yang bernilai true
dari function yang kita buat yang akan dimasukkan datanya
contoh
dimana disini kita punya array dan kita buat function untuk
me return true jika nilai lebih dari sama dengan 10
selanjutnya kita filter berdasarkan fungsi jika true
maka elemen tersebut akan dimasukkan ke variabel yang sudah 
di filter
*/
array = [1,5,7,89,54,6,9]
function isBigEnough(value) {
  return value >= 10;
}

const filtered = array.filter(isBigEnough);

/*8. built in method find() ini untuk mengembalikan nilai pada 
elemen pertama dalam array jika kondisi yang diberikan 
bernilai true contoh
*/
array = [1,5,7,89,54,6,9]
let found = array.find((element) => element > 10);

console.log(found);
// Expected output: 12

/*9. built in method findIndex() ini untuk mengembalikan index
pada elemen pertama dalam arrayketika kondisi sudah
bernilai true contoh
*/
array = [1,5,7,89,54,6,9]
found = array.findIndex((element) => element > 10);

console.log(found);
// Expected output: 3

/*10. built in method findLast() ini untuk mengembalikan nilai
pada elemen pertama dalam urutan terbalik
(urutan mencarinya kebalikan pada method find()) dalam array 
ketika kondisi sudah bernilai true contoh
*/
array = [5, 12, 50, 130, 44];

found = array.findLast((element) => element > 45);

console.log(found);
// Expected output: 130

/*11. built in method findLastIndex() ini untuk mengembalikan 
index pada elemen pertama dalam urutan terbalik
(urutan mencarinya kebalikan pada method findIndex()) dalam array 
ketika kondisi sudah bernilai true contoh
*/
array = [5, 12, 50, 130, 44];

found = array.findLastIndex((element) => element > 45);

console.log(found);
// Expected output: 3

/*12. built in method forEach() ini untuk mengeksekusi looping 
dengan fungsi yang diberikan, setiap proses akan dijalankan
satu kali untuk setiap elemen array. contoh
*/
array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

/*13. built in method includes() ini untuk menentukan 
apakah sebuah array menyertakan nilai tertentu 
dalam elementnya, akan bernilai True atau false. contoh
*/
array = ["a", "b", "c", 1, 2];

console.log(array.includes(2));
// Expected output: true


console.log(array.includes("a"));
// Expected output: true

console.log(array.includes("at"));
// Expected output: false

/*14. built in method indexOf() ini akan mengembalikan nilai 
indeks pertama di mana elemen ditemukan dalam array, 
akan bernilai -1 jika tidak ditemukan. contoh
*/
array = ["a", "b", "c", 1, 2];

console.log(array.indexOf(2));
// Expected output: 4


console.log(array.indexOf("a"));
// Expected output: 0

console.log(array.indexOf("at"));
// Expected output: -1

/*15. built in method map() ini untuk membuat array baru 
yang diisi dengan hasil pemanggilan fungsi yang diberikan 
proses pada setiap elemen dalam array tersebut
contoh
*/
array = [1,5,6,8,9];

console.log(array.map((x) => x * 2))
// Expected output: Array [2, 10, 12, 16, 18 ]

/*16. built in method map() ini untuk membuat array baru 
yang diisi dengan hasil pemanggilan fungsi yang diberikan 
proses pada setiap elemen dalam array tersebut
contoh
*/
array = [1,5,6,8,9];

console.log(array.map((x) => x * 2))
// Expected output: Array [2, 10, 12, 16, 18 ]