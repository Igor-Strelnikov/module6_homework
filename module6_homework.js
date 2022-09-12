// Задание 1 6.2 Функции без параметров

// Задание 2  6.4 Параметры и возвращаемое значение

function isPrime(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "данные неверны";

    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
        if (n % i === 0) return "не простое число";

    return "простое число";
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(989));

// Задание 3  6.5 Функции высшего порядка

function outer(a) {
    return function(b) {
      return a + b;
    }
  }
  
  const one = outer(3);
  const two = outer(4);
  
  console.log(one(5));
  console.log(two(5));

//   Задание 4  6.7 Функции обратного вызова

function printNumbersInterval() {
    var i = 5;
    var timerId = setInterval(function() {
      console.log(i);
      if (i == 15) clearInterval(timerId);
      i++;
    }, 1000);
  }
  
  printNumbersInterval();

//   Задание 5 6.8 Функции в ES6

const pow = (x, n) => {
    let result = x
    
    for(let i=1; i<n; i++) {
    result *= x;
    }
    
    return result
    }
    
    let x = prompt("x?", '');
    let n = prompt("n?", '');
    
    console.log( pow(x, n) );


