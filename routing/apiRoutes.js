var path = require('path');
var friends = require('../app/data/friends.js');
var closest = 100;
var score = 0;
var match;


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newRes = req.body;
        console.log(newRes);
        console.log(friends);

        for (i in friends) {
            for (var x = 0; x < 10; x++) {
                score += Math.abs(friends[i].scores[x] - newRes.scores[x]);
            }
            //console.log("Score for " + friends[i].name + " is " + score);
            if (score < closest) {
                closest = score;
                match = friends[i];
                score = 0;
            }
            score = 0;
        }
        friends.push(newRes);
        closest = 100;
        console.log("Your match is: " + match.name);
        res.json(match);
        

    });

};