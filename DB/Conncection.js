const mongoose = require('mongoose');

const URI ="mongodb+srv://admin:1234@dbutd.lq25j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('');
};

module.exports = connectDB;
