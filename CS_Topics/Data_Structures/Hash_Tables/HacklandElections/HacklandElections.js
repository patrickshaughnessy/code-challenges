function electionWinner(votes) {
    var highestSoFar = {
        name: '',
        count: 0
    };

    var memo = {};
    for (var i = 0; i < votes.length; i++){
        var name = votes[i];
        memo[name] = memo[name] ? memo[name] + 1 : 1;

        if (memo[name] > highestSoFar.count) {
            highestSoFar = {
                name: name,
                count: memo[name]
            }
        } else if (memo[name] === highestSoFar.count) {
            if (name > highestSoFar.name) {
              highestSoFar.name = name;
            }
        }
    }

    return highestSoFar.name;

}
