# Penjelasan
## Penjelasan program memfilter bilangan prima dari array menggunakan built in method dan secara manual

Program ini menjelaskan cara memfilter bilangan prima menggunakan built in dan manual

menggunakan built in
1. pertama buat array berisi nilai acak
2. lalu buat function berisi rumus mencari nilai bilangan prima dengan return true atau false
3. lalu buat variabel baru untuk menampung data filter value yang ada di array menggunakan built in filter dengan iterative method untuk callback function setiap elemen di array. dimana function yang bernilai true akan dimasukkan ke dalam array dengan variabel baru
4. Terakhir cetak variabel baru yang dibuat

secara manual
1. pertama buat array berisi nilai acak
2. lalu buat function berisi rumus mencari nilai bilangan prima dengan return true atau false 
3. untuk langkah ke 3 agak berbeda yakni kita buat dulu variabel baru untuk tampung array yang akan di filter dengan array kosong,
4. selanjutnya buat nilai awal untuk inisialisasi  dengan nilai 0 dan buat nilai akhir berdasarkan panjang array 
5. buat kondisi untuk cek masing masing nilai elemen dalam array apakah bernilai true dengan menggunakan function yang dibuat pada langkah ke 2
6. jika kondisi true kita spread operator pada array yang sudah dibuat untuk menampung data yang di filter yang dibuat pada langkah ke 3, dan kita spread dengan nilai array yang kondisinya true
7. lalu buat kondisi increment pada looping
8. terakhir cetak variabel array yang sudah di filter