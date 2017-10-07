/*
 * Complete the function below.
 */
function gemstones(rocks) {
    let gems = 0;
    const memo = {};

    // build memo with elements from first rock
    rocks[0].split('').forEach(e => {
        memo[e] = 1;
    });

    // remove elements from memo if not found in a rock
    for (let i = 1; i < rocks.length; i++) {
        for (let e in memo) {
            if (!rocks[i].includes(e)) {
                delete memo[e];
            }
        }
    }

    // count remaining elements found in every rock ==> gems
    for (let e in memo) {
        gems++;
    }

    return gems;
}
