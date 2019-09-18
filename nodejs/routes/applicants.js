const express = require('express');
const Applicant = require('../models/Applicant');

const router = express.Router();
const mongoose = require('mongoose');
const errors = require('restify-errors');

module.exports = server => {
  server.get('/applicant', async (req, res, next) => {
    try {
      const applicants = await Applicant.find({});
      console.log(applicants);
      //res.send(applicants);
      res.send({ hello: 'world' });
      next();
    } catch (err) {
      return next(new errors.InvalidContentError(err));
    }
  });

  server.post('/applicant', (req, res, next) => {
    Applicant.create(req.body, (err, applicant) => {
      if (err) return next(new errors.InvalidContentError(err));
      res.json(applicant);
    });
  });

  server.put('/applicant/:id', async (req, res, next) => {
    if (!RegExp.toString('application/json'))
      return next(new errors.InvalidContentError('Expects json object'));
    try {
      const applicant = await Applicant.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.send(201);
      next();
    } catch (err) {
      return next(`There is no customer with the id of ${req.params.id}`);
    }
  });
};
