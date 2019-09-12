const express = require('express');
const Applicant = require('../models/Applicant');
const router = express.Router();
const mongoose = require('mongoose');
const errors = require('restify-errors');

module.exports = server => {
  server.get('/', async (req, res, next) => {
    try {
      const applicants = await Applicant.find({});
      res.send(applicants);
      next();
    } catch (err) {
      return next(new errors.InvalidContentError(err));
    }
  });

  server.post('/', (req, res, next) => {
    Applicant.create(req.body, (err, applicant) => {
      if (err) return next(new errors.InvalidContentError(err));
      res.json(applicant);
    });
  });
};
