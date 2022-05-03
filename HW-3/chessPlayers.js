const solution = (chessPlayers, finishedMatches) => {
    const finishedMatchesString = finishedMatches.map(match => String(match));
    const matchesToPlay = [];
    
    for(let i = 0; i < chessPlayers; i++) {
        for(let j = i + 1; j < chessPlayers; j++) {
            !finishedMatchesString.includes(i + ',' + j) &&
            !finishedMatchesString.includes(j + ',' + i) &&
            (matchesToPlay.push([i,j]))
        }
    }
    
    return matchesToPlay; 
}
