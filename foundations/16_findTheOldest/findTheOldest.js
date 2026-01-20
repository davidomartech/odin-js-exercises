const findTheOldest = function (people) {
  return people.reduce((currentPerson, nextPerson) => {
    if (!("yearOfDeath" in currentPerson)) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }

    if (!("yearOfDeath" in nextPerson)) {
      nextPerson.yearOfBirth = new Date().getFullYear();
    }

    if (
      currentPerson.yearOfDeath - currentPerson.yearOfBirth >
      nextPerson.yearOfDeath - nextPerson.yearOfBirth
    ) {
      return currentPerson;
    }
    return nextPerson;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
