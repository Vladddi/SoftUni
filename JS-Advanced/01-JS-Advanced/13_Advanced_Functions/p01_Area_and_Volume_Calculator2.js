/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {string} input 
 */
const solve = (area, vol, input) => JSON.parse(input).map({
    area: area.apply(cube),
    volume: vol.apply(cube)
});

const data = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;


console.log(solve(area, vol, data));

function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};