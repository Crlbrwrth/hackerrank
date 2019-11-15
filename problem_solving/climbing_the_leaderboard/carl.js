function climbingLeaderboard(scores, alice) {
    let rankings = [];
    scores = scores
        .sort((a, b) => b - a)
        .filter((e, i) => scores.indexOf(e) == i);
    for (let i = 0; i < alice.length; i++) {
        if (alice[i] > scores[0]) {
            scores.unshift(alice[i]);
            rankings.push(1);
        } else if (alice[i] < scores[scores.length - 1]) {
            scores.push(alice[i]);
            rankings.push(scores.length);
        } else if (scores.includes(alice[i])) {
            rankings.push(scores.indexOf(alice[i]) + 1);
        } else {
            for (let j = 0; j < scores.length; j++) {
                if (scores[j] > alice[i] && scores[j + 1] < alice[i]) {
                    scores.splice(j + 1, 0, alice[i]);
                    rankings.push(j + 2);
                    break;
                }
            }
        }
    }
    return rankings;
}

// function climbingLeaderboard(scores, alice) {
//     let rankings = [];
//     scores = scores.sort((a, b) => b - a).filter((e, i) => scores.indexOf(e) == i);
//     for (let i = 0; i < alice.length; i++) {
//         if (alice[i] > scores[0]) {
//             scores.unshift(alice[i]);
//             rankings.push(1);
//         } else if (alice[i] < scores[scores.length - 1]) {
//             scores.push(alice[i]);
//             rankings.push(scores.length);
//         } else if (scores.includes(alice[i])) {
//             rankings.push(scores.indexOf(alice[i]) + 1);
//         } else {
//             for (let j = 0; j < scores.length; j++) {
//                 if (scores[j] > alice[i] && scores[j+1] < alice[i]) {
//                     scores.splice(j + 1, 0, alice[i]);
//                     rankings.push(j + 2);
//                     break;
//                 }
//             }
//         }
//     }
//     return rankings;
// }

// SHORT SOLUTION (exceeds time limit)

// function climbingLeaderboard(scores, alice) {
//     let rankings = [];
//     alice.forEach(e => {
//         scores.push(e);
//         scores = sortScores(scores);
//         rankings.push(scores.indexOf(e) + 1);
//     })
//     return rankings;
// }
//
// function sortScores(scoreArr) {
//     return scoreArr.sort((a, b) => b - a).filter((e, i) => scoreArr.indexOf(e) == i);
// }

// LONG SOLUTION (exceeds time limit)

// function climbingLeaderboard(scores, alice) {
//     let rankings = [];
//     scores = scores
//         .sort((a, b) => b - a)
//         .filter((e, i) => scores.indexOf(e) == i);
//     alice.forEach(e => {
//         if (scores.indexOf(e) > -1) {
//             rankings.push(scores.indexOf(e) + 1);
//         } else {
//             scores.forEach((s, i) => {
//                 if (scores[i] > e && scores[i + 1] < e) {
//                     rankings.push(i + 2);
//                     scores.splice(i + 1, 0, e);
//                 }
//                 if (e < scores[scores.length - 1]) {
//                     scores.push(e);
//                     rankings.push(scores.length);
//                 }
//                 if (e > scores[0]) {
//                     scores.unshift(e);
//                     rankings.push(1);
//                 }
//             });
//         }
//     });
//     return rankings;
// }
