const SoloUser = require('../models/solomodels');
const DuoUser = require('../models/duomodels');

exports.getSolo = function (req, res) {
    SoloUser.find({}, function (err, userlist) {
        if (err) {
            return "Error retrieving solo entry";
        }
        userlist = userlist.sort((a, b) => b["score"] - a["score"]).slice(0, 10);
        res.status(201).json(userlist);
    });
};

exports.addSolo = function (req, res) {
    let newEntry = new SoloUser(
        {
            username: req.body.username,
            score: req.body.score
        }
    );

    newEntry.save(function (err) {
        if (err) {
            return "Error saving solo entry";
        }
        res.send("Entry saved successfully.")
    });
};

exports.getDuo = function (req, res) {
    DuoUser.find({}, function (err, userlist) {
        if (err) {
            return "Error retrieving duo entry";
        }
        userlist = userlist.sort((a, b) => b["score"] - a["score"]).slice(0, 10);
        res.status(201).json(userlist)
    });
};

exports.addDuo = function (req, res) {
    let newEntry = new DuoUser(
        {
            username: req.body.username,
            score: req.body.score
        }
    );

    newEntry.save(function (err) {
        if (err) {
            return "Error saving duo entry";
        }
        res.send("Entry saved successfully.")
    });
};
