const server = require("./src/app");
const { sequelize } = require("./src/db");
const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST || "localhost";

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raise in: ${DB_HOST}:${PORT}`);
  });
});
