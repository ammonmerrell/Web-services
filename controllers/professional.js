const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req,res) => {
    const result = await mongodb.getDatabase('cluster0').db('meetW1').collection('meetW1').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const getSingle = async (req,res) => {
    const contactId = new ObjectId(req.params);
    const result = await mongodb.getDatabase('cluster0').db('meetW1').collection('meetW1').find({ _id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};


module.exports = {
    getAll,
    getSingle
};