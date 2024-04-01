function makeNewArray(num1, num2) {
    // An empty array final is initialized to store the generated numbers.
      let final = [];
      
      for (let i = num1; i <= num2; i++) {
        final.push(i);   // Push each number into the array and iterate from num1 to num2
      }
      return final;
    }
    console.log(makeNewArray(4, 7));
    console.log(makeNewArray(-4, 7));
    