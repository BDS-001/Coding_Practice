//example
const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        // Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
  };

// 2 ways 
function getPersonsInfo(name) {
    return server.getPeople().then(people => {
      return people.find(person => { return person.name === name });
    });
  }

  async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  }
//using async makes function look alot closer to sync js code

//to do error handling with async function, you can add a .catch() to it
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}

asyncFunctionCall().catch(err => {
  console.error(err)
});
//or you can use try/catch inside the async function
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}