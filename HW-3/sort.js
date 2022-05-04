const sort = input => {
    const [min, max] = [Math.min(...input), Math.max(...input)];
    const map = new Map();
    const inputClone = [...input];

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
