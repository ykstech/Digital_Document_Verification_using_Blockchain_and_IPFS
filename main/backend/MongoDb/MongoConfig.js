import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://PratikEk:Pratik1372@cluster0.gcsram6.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}


  export { connectToDatabase };
