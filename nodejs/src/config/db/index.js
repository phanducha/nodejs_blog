const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev', {

        });
        console.log(' Connect Successful');
    } catch (error) {
        console.log(' Connect ERROR');
    }
}
module.exports = { connect };