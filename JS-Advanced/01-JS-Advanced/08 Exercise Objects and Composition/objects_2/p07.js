function solve(arr) {
    const result = [];
    //const [town, latitude, longitude] = arr[0].split("| ");

    for (let i = 1; i < arr.lenght - 1; i++) {
        const obj = {};
        let [currentTown, currentLatitude, currentLongitude] = arr[i].split("| ");
        obj[town] = currentTown;
        obj[latitude] = Number(currentLatitude).toFixed(2);
        obj[longitude] = Number(currentLongitude).toFixed(2);
        result.push(obj);
    }
    console.log(result);
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);