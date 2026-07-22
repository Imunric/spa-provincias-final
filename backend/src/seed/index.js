const sequelize = require('../config/database');
const seedProvincias = require('./provincias.seed');

(async () => {
  try {
    await sequelize.sync();
    await seedProvincias();
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();