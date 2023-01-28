//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//In this function we use what is called a rest parameters and it provides an easier and cleaner way of working with an indefinite number of arguments.(if you want to know more google it, didn't want to clutter the code with info on the rest parameter)
function areThereDuplicates(...args) {
    
    //first we create an object that will keep track of the frequency and value of the data that being passed in
      const frequencyCounter = {}
  
    //here we actually take the data and put it into the objects 
   for(let val of args){
      frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
   }
  
   //this for loop goes into the frequencyCounter object and loops through it checking if there are any duplicates
   //the above for loop went through the array and counter how many time each key pops up 
   //if the counter (property) for each key is 1 it returns false but if its is more then two it will return true
   for(let key in frequencyCounter){
      if(frequencyCounter[key] >= 2){
          return true
      }
   }
   return false
  
  }

    //An easier way to do this problem is the One Liner Solution
    function areThereDuplicatesLinear() {
      //this code uses the Set method that takes an array and creates a new array with only unique values. So it basically removes duplicates
      //then this code compares the length of the new array that was created with the Set method and the array that was given to us
      //if the both arrays length is the same then there isn't any duplicates and it returns false but if there is duplicates so the two arrays length aren't the same so it returns true
      return new Set(arguments).size !== arguments.length;
    }

areThereDuplicates(1, 2, 3) // false
console.log(areThereDuplicates(1, 2, 2))// true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 