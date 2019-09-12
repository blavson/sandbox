const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');
const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

const db = mongoose.connection;
db.on('err', err => console.log(err));

db.once('open', () => {
  require('../routes/applicants')(server);
  console.log(`Server stared on port ${config.PORT}`);
});
