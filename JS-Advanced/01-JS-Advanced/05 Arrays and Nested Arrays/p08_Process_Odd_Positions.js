function processOddPositions(numbers) {
    // const oddNums = numbers.filter((v, i) => i % 2 == 1);
    // const doubled = oddNums.map(x => x * 2);
    // doubled.reverse();
    // return doubled.join(' ');

    return numbers
        .filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);