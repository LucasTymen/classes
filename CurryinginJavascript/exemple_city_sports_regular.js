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

//console.log(sortPlayersByValueFromCity(players, "San Francisco", "age"));


const filterPlayersByValueFromCity = (playersArr, city, filterKey, filterValue) => {
  return playersArr.filter(player => {
    return player.city === city;
  }).filter(playersFromCity => playersFromCity[filterKey] === filterValue)
 }

 console.log(filterPlayersByValueFromCity(players, "San Francisco", "sport", "handball"));
