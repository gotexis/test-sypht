import {MongoClient, Server} from 'mongodb'
import assert from "assert";
// Set up the connection to the local db

const client = new MongoClient(new Server("localhost", 27017), {native_parser: true});

client.connect(e => {
    assert.equal(null, e);
    console.log("Connected successfully to MongoDB");
});

const db = client.db('sypht');
const collection = db.collection('files')

export default collection
