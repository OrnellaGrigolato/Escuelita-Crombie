//Ejercicio 13: Write a function that reverses characters in (possibly nested) parentheses in the input string.


function solution(str: string): string {
  while (/\([A-Za-z]*\)/g.test(str)) { //Mientras haya texto entre parentesis, lo extraigo, lo invierto y lo vuelvo a colocar en su lugar
    str = str.replace(/\([A-Za-z]*\)/g, (substr) => substr.slice(1, substr.length - 1).split('').reverse().join(''))
  }
  return str

}

console.log(solution("foo(bar)baz")) //foorabbaz
console.log(solution('foo(bar(baz))blim')) //foobazrabblim

