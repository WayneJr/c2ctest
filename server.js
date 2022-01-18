const app = require('express')();
const SequelizeAuto = require('sequelize-auto');
const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv').config();
const account = require('./src/models/migrations_test_account');

// First install sequelize and sequelize-auto globally using:
// npm i -g sequelize sequelize-auto

// before you do the testing be sure to generate the models into a folder using:
// sequelize-auto -h ec2-52-45-73-150.compute-1.amazonaws.com -d ddp2b7jtf9b4mc -u ehthujrefcyzke -x 7d1a814709fac47c356727e4f5db73212cd1a6dc4bb146a967659ea526d896cc -p 5432 --dialect postgres -o ./models -c ./config.json


const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS,{
    host: process.env.DBHOST,
    dialect: 'postgres',
    ssl: true,
    protocol: "postgres",

    logging: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

async function testConnection() {
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    
        // await account(sequelize, DataTypes).create({
        //     "first_name": "James",
        //     "last_name": "Gregory",
        //     "username": "jamieeeee",
        //     "phone_number": "+2348172767890",
        //     "email": "jamesgregory@gmail.com",
        //     "date_of_birth": "2021-06-30",
        //     "created": new Date(),
        //     "updated": new Date()
        // });

        const data = await account(sequelize, DataTypes).findAll();
        console.log(data);
        console.log('Data successfully created');


    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();



app.listen(3000, () => console.log('listening on port 3000'));
