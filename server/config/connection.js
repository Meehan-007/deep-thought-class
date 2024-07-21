const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deep-thoughts',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
)
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

module.exports = mongoose.connection;