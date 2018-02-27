function change(num)
var num=86
let coins = {q:0, d:0, n:0, p:0}
if(num >= 25) {
    coins.q = math.floor(num/25)
        num = num%25
}
if(num >= 10) {
    coins.d = math.floor(num/10)
        num = num%10
}
if(num >= 5) {
    coins.n = math.floor(num/5)
        num = num%5
}
if(num >= 1) {
    coins.p = num
    return coins
} 
console.log(change(86))
