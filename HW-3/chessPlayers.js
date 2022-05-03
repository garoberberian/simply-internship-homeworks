const solution = (chessPlayers, finishedMatches) => {
    const finishedMatchesStr = finishedMatches.map(match => String(match));
    const matchesToPlay = [];
    
    for(let i = 0; i < chessPlayers; i++) {
        for(let j = i + 1; j < chessPlayers; j++) {
            !finishedMatchesStr.includes(i + ',' + j) &&
            !finishedMatchesStr.includes(j + ',' + i) &&
            (matchesToPlay.push([i,j]))
        }
    }
    
    return matchesToPlay; 
}
