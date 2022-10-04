const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'test',
  password: 'postgres',
  port: 5432,
})

pool.connect(error => {
  if (error) {
    console.log(error, 'Data Layer');
  } else {
    console.log('Database Connected')
  }
});

module.exports = pool;