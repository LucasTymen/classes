const players = [
  { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
  { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
  { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
  { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
  { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
  { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
  { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
  { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
]

const sortPlayersByValueFromCity = (playersArr, city, sortKey) => {
  return playersArr.filter(player => {
      return player.city === city;
  }).sort((a,b) => {
      return a[sortKey] - b[sortKey]
  });
}

/*
Make Code Easier to Read and Reuse

The code for sortPlayersByValueFromCity() and filterPlayersByValueFromCity() is hard to read. With currying, we can write
functions that handle one task, and are therefore not only easier to read and understand, but more reusable. For
example, we can create a curried function that filters an array of objects by a provided key and value.
*/
/*
Make Code More Modular
Now we can reuse the filtered San Francisco object for additional specialized functions. Let’s use it to sort the players by the date they joined the sports league.
*/

const setFilter = array => key => value => array.filter(x => x[key] === value);
const filterPlayers = setFilter(players);
const filterPlayersByCity = filterPlayers('city');
const filteredPlayersBySanFrancisco = filterPlayersByCity('San Francisco');
const filterPlayersBySport = filterPlayers('sport');
const filteredPlayersBySoccer = filterPlayersBySport('soccer');

console.log(filteredPlayersBySanFrancisco); // Returns an array of players from San Francisco
console.log(filteredPlayersBySoccer); // Returns an array of players that play soccer

console.log("=====================================================")

/*
// ######## Making code more modular ########
Now we can reuse the filtered San Francisco object for additional specialized functions. Let’s use it to sort the
players by the date they joined the sports league.
*/


const sortArrayByValue = sortArray => sortKey => {
  return sortArray.sort(function(a, b){
      if(a[sortKey] < b[sortKey]) { return -1; }
      if(a[sortKey] > b[sortKey]) { return 1; }
      return 0;
  });
}

const sortSanFrancisco = sortArrayByValue(filteredPlayersBySanFrancisco);
const sortSFByDateJoined = sortSanFrancisco("dateJoined");
console.log(sortSFByDateJoined);

/*
// ######## Summary ########
In this article, we took a look at how currying works under the hood thanks to closures in JavaScript, and how you can use different syntax techniques to curry your functions. Overall, thanks to the modularity of curried functions, you can now use currying in your code to make your functions have a single purpose and therefore be easier to test, debug, maintain, and read.
*/
