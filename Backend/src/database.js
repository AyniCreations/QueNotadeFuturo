const mongoose = require('mongoose');
const initSetup = require('./libs/initSetup');

mongoose.connect(
  'mongodb+srv://quenotadefuturo2021:Z1etHNZxnlbsr7q3@quenotadefuturo.hn2g9.mongodb.net/quenotaDB?retryWrites=true&w=majority',

  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  },
)
  .then(() => console.log("Database connected!")) 
  .catch((err) => console.log(err));

var db = mongoose.connection;

db.once('open', async () => {
  console.log('Conectada a mongoDB');
  // await initSetup();
});
