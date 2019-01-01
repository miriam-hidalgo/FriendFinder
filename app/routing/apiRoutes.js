const friends = require("../data/friends");

// A GET route with the url `/api/friends`
// Displays JSON of all possible friends
module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
        console.log(friends);
    });
//A POST route `/api/friends`
//Takes in JSON user survey input
//Handles incoming survey results & compatibility logic
    app.post("/api/friends", function(req, res) {        
        let userAnswers = req.body

        for(let i = 0; i < friends.length; i++){
            let totalDifference = 0
        
            for(let j = 0; j < friends[i].scores.length; j++){
                totalDifference += Math.abs(userAnswers.scores[j] - friends[i].scores[j]);
                } 
                //totalDifference is an array of the total difference of scores for each friend, with the below code I wanted to grab the minimun score from the array and then alert it
                    //lowestScore = Math.min(...totalDifference)); 
                    
                    //alert("Your matched friend is: " + friends[i].name + "!" + "/n" + friends[i].photo);
            }       
                //holding difference of each friend
                console.log(friends[i].name + ":" + totalDifference);
                //console.log("Lowest score:" + lowestScore);   
        friends.push(userAnswers);   
    });
};