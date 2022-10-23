const uuid = require('uuid')

const usersDB = [
    {
        id: uuid.v4(),
        first_name: 'Jorge',
        last_name: 'Gomez',
        email: 'jorge.gomez@academlo.com',
        password: '123456',
        birthday: '2000/01/10'
    },{
        id: uuid.v4(),
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'luis.miguel@academlo.com',
        password: '123456',
        birthday: '2001/02/18'
    }

];

const getAllUsers = () => {
    return usersDB
}

const getUsersById = (id) => {
    const data = usersDB.find(user => user.id === id)
    return data
}

const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser
}