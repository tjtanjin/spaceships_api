const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')
var mongoose = require('mongoose');

const UserController = require('../controllers/usercontroller');

router.get('/sololeaderboard', UserController.getSolo);

router.post('/sololeaderboard', UserController.addSolo);

router.get('/duoleaderboard', UserController.getDuo);

router.post('/duoleaderboard', UserController.addDuo);

module.exports = router;
