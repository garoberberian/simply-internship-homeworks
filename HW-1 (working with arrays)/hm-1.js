// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;
Array.prototype.map = null;
// ==============================

Array.prototype.find = function (cb) {
    if(typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`)
    }

    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return this[i];
        } 
    }

};

Array.prototype.findIndex = function (cb) {
    if(typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`)
    }

    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return i;
        } 
    }

    return -1;
};

Array.prototype.lastIndexOf = function (n) {
    for(let i = this.length - 1; i >= 0; i--) {
        if(this[i] === n) {
            return i;
        }
    }

    return -1;
};

Array.prototype.some = function (cb) {
    if(typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`);
    }
    
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return true;
        }
    }
    
    return false;

};

Array.prototype.every = function (cb) {
   if(typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`);
    }
    
    for(let i=0; i<this.length; i++) {
        if(!cb(this[i], i, this)) {
            return false;
        }
    }
    
    return true;
};

Array.prototype.reduce = function (cb, initial) {
    //z variable is the index of the array from which the loop will iterate
    let z = 0;
    if(typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`);
    }

    //if array is empty and second parameter is not given, throw error
    if(!this.length && initial === undefined) {
        throw new TypeError(`Reduce of empty array with no initial value`);
    }
    
    //if second parameter is not given, set initial the first element and start the loop from index 1
    if(initial === undefined) {
        initial = this[0];
        z = 1;
    }

    for(let i = z; i < this.length; i++) {
        initial = cb(initial, this[i], i, this);    
    }
    
    return initial;
}

Array.prototype.reduceRight = function (cb, initial) {
    //z variable is the index of the array from which the loop will iterate
    let z = this.length - 1;

    if(typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`);
    }

    //if array is empty and second parameter is not given, throw error
    if(!this.length && initial === undefined) {
        throw new TypeError(`Reduce of empty array with no initial value`);
    }

    //if second parameter is not given, set initial the last element and start the loop from this.length - 2
    if(initial === undefined) {
        initial = this[this.length-1];
        z = this.length-2;
    }

    for(let i = z; i >= 0; i--) {
        initial = cb(initial, this[i], i, this);    
    }
    
    return initial;
}

Array.prototype.join = function (n = ',') {
    let newstr = '';
    if(!this.length) {
        return newstr;
    }
    
    for(let i = 0; i < this.length - 1; i++) {
        newstr += this[i] + n;
    }

    newstr += this[this.length - 1];
   
    return newstr;
};

Array.prototype.pop = function () {
    const last = this[this.length - 1];
    if(this.length) {
        this.length = this.length - 1;    
    }
    return last;
};

Array.prototype.unshift = function (n) {
    //the reason why i wrote [...arguments].length instead of n === undefined is because in case of [].unshift(undefined)
    // to add element with undefined value
   if(![...arguments].length) {
          return this.length;
      }
      this.length = this.length + 1;
    
      for(let i=this.length-1; i>=1; i--) {
          this[i] = this[i-1];
      }
      this[0] = n;
      return this.length;
};
