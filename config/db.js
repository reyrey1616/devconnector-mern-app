const mongoose = require('mongoose');
const config = require('config');
const colors = require('colors');
const db = config.get('MONGO_URI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected'.green.inverse);
  } catch (err) {
    console.error(err.message.red.inverse);
    //     Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
