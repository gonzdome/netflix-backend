const mongoose = require('mongoose');

class Index {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/netflix',
      // 'mongodb+srv://name:password@netflix.ncstc.mongodb.net/netflix',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

module.exports = new Index();
