const server = require("./app.js");
const dotenv = require("dotenv").config();

server.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
