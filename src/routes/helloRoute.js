import { MongoClient } from 'mongodb';

export const helloRoute = {
    method: 'get',
    path: '/hello',
    handler: async (req, res) => {
        res.send("Hello!");
    },
};