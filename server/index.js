const server = require("./src/app");
const { sequelize } = require("./src/db");
const { DB_HOST, PORT } = process.env;

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raise in: ${DB_HOST}:${PORT}`);
  });
});
