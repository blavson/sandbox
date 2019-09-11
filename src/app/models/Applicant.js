const mongoose= require('mongoose');
const timestamp= require('mongoose-timestamp');

const ApplicantSchema = new mongoose.Schema({
  name : {
    type : String,
    required: true,
    trim: true
  },
  nickName : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
});
ApplicantSchema.plugin(timestamp);

const Applicant = mongoose.model('Applicant', ApplicantSchema);

module.exports = Applicant;