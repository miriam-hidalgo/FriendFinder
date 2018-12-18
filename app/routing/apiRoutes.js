const friends = require("../data/friends");

// A GET route with the url `/api/friends`
// Displays JSON of all possible friends
module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
        });
//A POST route `/api/friends`
//Takes in JSON user survey input
//Handles incoming survey results & compatibility logic
    app.post("/api/friends", function(req, res) {
        console.log(userInput)
    });
};

//Compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//Example:
//User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//Total Difference: **2 + 1 + 2 =** **_5_**
//Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//The closest match will be the user with the least amount of difference.
//Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//The modal should display both the name and picture of the closest match.