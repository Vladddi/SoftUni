function firstLast(strings){
    const last= Number([...strings].pop());
    const first= Number([...strings].shift());

    return first + last;
}

console.log(firstLast(['20', '30', '40']));
console.log(firstLast(['5','10']));
console.log(firstLast(['5']));