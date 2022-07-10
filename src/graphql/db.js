const people = [
    {
        id: 1,
        name: "Emma",
        age: 33,
        gender: "female"
    },
    {
        id: 2,
        name: "Jake",
        age: 33,
        gender: "male"
    },
    {
        id: 3,
        name: "Jane",
        age: 27,
        gender: "female"
    },
    {
        id: 4,
        name: "John",
        age: 26,
        gender: "male"
    },
    {
        id: 5,
        name: "Sam",
        age: 8,
        gender: "male"
    }
];

export const getPeople = () => people;

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const deletePerson = (id) => {
    const cleanedPeople = people.filter(person => person.id != id);
    if(people.length > cleanedPeople.length){
        person = cleanedPeople;
        return true;
    } else {
        return false;
    }
};

export const addPerson = (name, age, gender) => {
    const newPerson = {
        id: `${people.length + 1}`,
        name,
        age,
        gender
    };
    people.push(newPerson);
    return newPerson;
}
