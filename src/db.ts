import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const {
  MONGO_URI = process.env.MONGO_URI || '',
} = process.env;

const client = new MongoClient(String(MONGO_URI));
const db = client.db();

export { db, client };

