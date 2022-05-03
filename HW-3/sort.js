const sort = input => {
    const min = Math.min(...input);
    const max = Math.max(...input);
    const map = new Map();
    let inputClone = [...input];

    for(let i = min; i <= max; i++) {
        if(inputClone.includes(i)) {
            map.has(i) && map.set(i, [].concat(map.get(i), i));
           !map.has(i) && map.set(i, i);
            inputClone.splice(inputClone.indexOf(i), 1);
            i--;
        }
    }
    
    return [...map.values()].flat();
};
