/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let copy = [...array];
    copy.sort( (a, b)=>{
      if(a.year < b.year){
        return -1;
      } else if(b.year < a.year){
        return 1
      } else{
        if(a.title < b.title){
          return -1;
        } else if(b.title < a.title){
          return 1;
        } else{
          return 0
        }
      }
    })
    return copy
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
  let spielbergDrama = array.filter( (eachMovie)=>{
     return eachMovie.genre.includes("Drama") && eachMovie.director == "Steven Spielberg";
  })
  if(spielbergDrama.length == 0){
    return 0;
  } else{
    return spielbergDrama.length
  }
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(titleorder) {
    let copy = [...titleorder]
  
    // Goal - Sort it by year
    copy.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (b.title < a.title) {
        return 1;
      } else {
        return 0
      }
    })
  
    // console.log(copy)
  
    let titleArray = copy.map((eachMovie)=> {
      return eachMovie.title 
      })
  
  // Goal - Return first 20
  
  
  return titleArray.splice(0,20)
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
  if(array.length == 0){
    return 0
  }
  let rates = array.map( (eachMovie)=>{
    if(eachMovie.rate){
    return eachMovie.rate
    } else{
      return 0
    }
  })
  let sumRates = rates.reduce( (a, c)=>{
    return a + c
  })
  let finalAverage = Number((sumRates / array.length).toFixed(2))
  console.log(typeof(finalAverage))
  return finalAverage
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
  let dramaMovies = array.filter( (eachMovie)=>{
    return eachMovie.genre == "Drama";
  })
  return ratesAverage(dramaMovies)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


    // Goal - Convert duration to a Number(minutes) 
    // remove/targe h and min =====> Splice, substring, indexOf

    // '2h 22min' 
    // First - locate what you have hours and minutes????? hours????? minutes??????? 
    // Conditionals!!!!!!!
    // indexOf("h")
    // indexOf("min")
    // Now...
    // substring...

    // if("2h 22min".indexOf('h') >=0)
    // "2h 22min".substring(0, "2h 22min".indexOf('h'))
    //  let min =  
    // let hour = 









    
    // function turnHoursToMinutes(arr){
    //   let newArr = arr.map(a => Object.assign({}, a));
    //   for(let i = 0; i < newArr.length; i += 1){
    //     if(typeof(newArr[i].duration) !== Number){
    //       if(newArr[i].duration.indexOf(' ') !== -1 && newArr[i].duration.indexOf('m') !== -1){
    //         let hoursMinutes = newArr[i].duration.split(' ');      
    //         let hours = (parseInt(hoursMinutes[0].split(''))) * 60;
    //         let minutes = parseInt(hoursMinutes[1].split('m'));
    //         newArr[i].duration = hours + minutes;
    //       }else if(newArr[i].duration.indexOf('h') !== -1){
    //         let hoursMinutes = newArr[i].duration.split(' ');
    //         let hours = (parseInt(hoursMinutes[0].split(''))) * 60;
    //         newArr[i].duration = hours;
            
    //       }else if(newArr[i].duration.indexOf('m') !== -1){
    //         let hoursMinutes = newArr[i].duration.split(' ');
    //         let minutes = (parseInt(hoursMinutes));
    //         newArr[i].duration = minutes;
    //       }
    //     }else{
    //         continue;
    //       }
    //   }
    // return (newArr);  
    // };












// BONUS Iteration: Best yearly rate average - Best yearly rate average
