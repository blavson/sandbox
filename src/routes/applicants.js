const errors = require('restify-errors');
const applicant = require('../app/models/Applicant');

module.exports = server => {
  server.get('/applicants', async(req, res, next) => {
    try {
      const applicants = await applicant.find({});
      res.send(applicants);
      next();
    }
    catch (err) {
      return (next(new errors.InvalidContentError(err)))
    }
  })  
}