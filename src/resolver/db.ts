import { UserType } from "./types";

let users = [
    {
        id: 1,
        name: "Jane Doe",
        age: 33,
        gender: "FEMALE",
    },
    {
        id: 2,
        name: "John Doe",
        age: 25,
        gender: "MALE",
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

export const addUser = (user: UserType) => {
    try {
        const { name, age, gender } = user;
        const newId = users.length + 1;
        const newPerson = {
            id: newId,
            name,
            age,
            gender,
        };
        users.push(newPerson);

        return { status: 200, message: 'Successfully added'}
    } catch (error) {
        return { status: 500, message: error }
    }
}
