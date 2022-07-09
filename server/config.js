require("dotenv").config();

const config = {
  port: process.env.PORT || 4000,
  dbUrl: process.env.DB_URL || null,
  email: process.env.EMAIL || "rahul@gmail.com",
  defaultUsers: [
    {
      name: "Koshal",
      email: "koshal@gmail.com",
      balance: 1000,
    },
    {
      name: "Amit",
      email: "amit@gmail.com",
      balance: 2000,
    },
    {
      name: "Lovely",
      email: "lovely@gmail.com",
      balance: 500,
    },
    {
      name: "Sam",
      email: "sam@gmail.com",
      balance: 990000,
    },
    {
      name: "Preet",
      email: "preet@gmail.com",
      balance: 200,
    },
    {
      name: "Somnath",
      email: "somnath@gmail.com",
      balance: 5599,
    },
    {
      name: "Rohan",
      email: "rohan@gmail.com",
      balance: 44444,
    },
    {
      name: "Rohit",
      email: "rohit@gmail.com",
      balance: 230,
    },
    {
      name: "Pooja",
      email: "pooja@gmail.com",
      balance: 20100,
    },
    {
      name: "Sonam",
      email: "sonam@gmail.com",
      balance: 15000,
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      balance: 500000,
    },
  ],
};

module.exports = config;
