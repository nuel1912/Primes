function heyy() {    
    let a = Number(prompt("Enter a number")); //Prompts a user for an initial number...
    let b = Number(prompt("Enter a number")); //Prompts a user for an end number...
    
    function isPrime(number) {
        if (number <= 1) {
          return false;
        }
      
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
      }
      
      function listPrimesInRange(initial, end) {
        const primeNumbers = []; // Initialize an array to store prime numbers...
      
        for (let number = initial; number <= end; number++) {
          if (isPrime(number)) {
            primeNumbers.push(number); // Add prime numbers to the array...
          }
        }
      
        if (primeNumbers.length > 0) {
          alert("The prime numbers between " + initial + " and " + end + " are: " + primeNumbers.join(", ")); //Outputs all the prime numbers sent between the initial and end...
        } else {
          alert("No prime numbers found between " + initial + " and " + end + "."); //For non-prime numbers..
        }
      }

    listPrimesInRange(a,b);
}