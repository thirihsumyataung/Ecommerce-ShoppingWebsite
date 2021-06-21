import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin Winnie",
        email: "admin@example.com",
        password: bcrypt.hashSync('1269', 10), 
        isAdmin: true, 
    },
    {
        name: "John Doe",
        email: "Doe@example.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: "Dara",
        email: "daradoe@example.com",
        password: bcrypt.hashSync('78910', 10)
    },
    {
        name: "Hermes",
        email: "hermes_moe@example.com",
        password: bcrypt.hashSync('24689', 10)
    }
]

export default users; 