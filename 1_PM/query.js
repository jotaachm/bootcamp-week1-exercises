const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */
let users = database.users
let friends = database.friends
let college = database.college

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  const favPetUsers = users.filter(user => user.favPet === pet);
  return favPetUsers;
};
console.log(usersByPet('dog'));
console.log(usersByPet('cat'));

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  const collegeId = users.filter(person => person.firstName === user)[0].collegeId;
  const userCollege = college.filter(college => college.id === collegeId);
  const collegeDetails = userCollege.map(university => `${university.name} ${university.color}`)
  return collegeDetails
}
console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const oppositesAttract = friends.filter(person => {
  let friend1 = person.id1;
  let friend2 = person.id2;
  let favPet1 = users.filter(person => person.id === friend1)[0].favPet;
  let favPet2 = users.filter(person => person.id === friend2)[0].favPet;
  return (favPet1 !== favPet2);
});
console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
const local = users.filter(user => {
  let liveState = user.state;
  let collegeId = user.collegeId;
  let collegeState = college.filter(college => college.id === collegeId)[0].state;
  return (liveState = collegeState);
})
console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = friends.filter(person => {
  let friend1 = person.id1;
  let friend2 = person.id2;
  let college1 = users.filter(person => person.id === friend1)[0].collegeId;
  let college2 = users.filter(person => person.id === friend2)[0].collegeId;
  return (college1 === college2);
}

)
console.log(collegeFriends)
