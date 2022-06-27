function solve(arr) {

    const arrHeroes = [];

    arr.forEach((el) => {
        const [name, level, items] = el.split(" / ");
        arrHeroes.push({
            name,
            level: Number(level),
            items: items ? items.split(", ") : []
        })
    });
    return JSON.stringify(arrHeroes);
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);