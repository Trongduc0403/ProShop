import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Trong Duc",
    email: "Trongduc@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Lee Na",
    email: "Leena@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
