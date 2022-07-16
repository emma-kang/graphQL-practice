let users = [
    {
        id: 1,
        name: "Emma",
        age: 33,
        gender: "FEMALE",
        favorites: []
    },
    {
        id: 2,
        name: "Jake",
        age: 33,
        gender: "MALE",
        favorites: []
    }
];

export const getUsers = () => users;

export const getUserById = (id: number) => {
    const filteredUser = users.filter(user => id === user.id);
    return filteredUser[0];
}
export const deleteUser = (id: number) => {
    const cleanedUser = users.filter(user => user.id !== id);
    if (users.length > cleanedUser.length) {
        users = cleanedUser;
        return true;
    } else {
        return false;
    }
};

export const addUser = (name: string, age: number, gender: string, favorites: any) => {
    const newPerson = {
        id: `${users.length + 1}`,
        name,
        age,
        gender,
        favorites
    };
    // @ts-ignore
    users.push(newPerson);
    return newPerson;
}
