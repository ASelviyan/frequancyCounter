//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2){
    //first we take the two two numbers that were given to us and turn them into an array of char
      const arr1 = num1.toString().split("")
      const arr2 = num2.toString().split("")
      //then we create an object that will keep track of the frequency 
      const frequencyCounter1 = {}
      const frequencyCounter2 = {}
  
//this for loop takes the first array of char and turns them into an obj of char keys and frequency for the property      for(let digit of arr1) {
          frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1
      }

      //this for loop takes the second array of char and turns them into an obj of char keys and frequency for the property
      for (let digit of arr2) {
          frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1
      }
      
      //this for loop compares the two objects making use that it has the same numbers and the same frequency of those numbers 
      for(let key in frequencyCounter1){
        //if the two arrays dont have the same keys it will return false 
          if(!(key in frequencyCounter2)){
              return false
          }
          //if keys are the same but the frequency of the keys is not the same it will return false 
          if(frequencyCounter2[key] !== frequencyCounter1[key]){
              return false
          }
      }
      //if everything is the same it will return true 
      return true
  }

//   console.log(sameFrequency(182,281) ) // true
  sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false