import { MongoClient } from 'mongodb';
import 'dotenv/config'

const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '27017';
const dbUser = process.env.DB_USER || 'neopro';
const dbPass = process.env.DB_PASS || '123456';
export const dbName = process.env.DB_NAME || 'neopro';
export const client = new MongoClient(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}`);
