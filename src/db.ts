import { createConnection, Connection  } from 'mysql2/promise';

async function initializeDatabase(){
    try {
        const connection = await createConnection({
        host: process.env.DB_HOST ,
        user: process.env.DB_USER ,
        password: process.env.DB_PASS ,
        database: process.env.DB_NAME ,
        });
    
        return connection;}
    catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;  // Rethrow the error after logging it
      }
  }

  export default initializeDatabase;