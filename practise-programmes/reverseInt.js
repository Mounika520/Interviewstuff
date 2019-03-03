function reverseINT(number){
  return	Math.sign(number) * (parseInt(number.toString().split('').reverse().join('')))
}