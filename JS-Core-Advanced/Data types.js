function isMatch(obj, source) {
    return Object.keys(source).every(key => 
        obj.hasOwnProperty(key) && JSON.stringify(obj[key]) === JSON.stringify(source[key])
    );
}

console.log(isMatch({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })); 
console.log(isMatch({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 })); 
