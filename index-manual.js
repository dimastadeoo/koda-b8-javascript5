const bil = [4,5,6,3,15,77,100, 17, 7]
//proses untuk rumus cari bilangan prima
function isPrime(num) {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true
}
let prima =[]
let x= 0
while (x < bil.length){
    if (isPrime(bil[x])){
        prima = [...bil]
    }
    x++
}
console.log(prima)