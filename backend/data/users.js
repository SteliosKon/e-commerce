import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123123123", 10),
    isAdmin: true,
  },
  {
    name: "test user 1",
    email: "tu1@gmail.com",
    password: bcrypt.hashSync("123123123", 10),
  },
  {
    name: "test user 2",
    email: "tu2@gmail.com",
    password: bcrypt.hashSync("123123123", 10),
  },
]
export default users
