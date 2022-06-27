// function calorieObject(arr) {

//     const result = {};
//     for (let i = 0; i < arr.length; i += 2) {
//         result[arr[i]] = Number(arr[i + 1]);

//     }

//     console.log(result);

// }
// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//-----------------------------------------------------------------
// function constructionCrew(obj) {

//     if (obj.dizziness) {
//         obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
//         obj.dizziness = false;
//     }

//     return obj;
// }

// console.log(constructionCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }));
// console.log(constructionCrew({
//     weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false
// }));
// console.log(constructionCrew({
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }));

//-----------------------------------------------------------------
// function carFactory(obj) {
//     const result = {};

//     function getEngine(power) {
//         if (power <= 90) {
//             return {
//                 power: 90,
//                 volume: 1800
//             };
//         } else if (power <= 120) {
//             return {
//                 power: 120,
//                 volume: 2400
//             };
//         } else {
//             return {
//                 power: 200,
//                 volume: 3500
//             };
//         }
//     }
//     const properWeelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
//     result.model = obj.model;
//     result.engine = getEngine(obj.power);
//     result.carriage = {
//         type: obj.carriage,
//         color: obj.color
//     };
//     result.wheels = new Array(4).fill(properWeelSize, 0, 4);

//     return result;
// }

// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));
// console.log(carFactory({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 }
// ));


//-----------------------------------------------------------------
// function heroicInventory(arr) {
//     const result = [];

//     arr.forEach((el) => {
//         let [name, level, items] = el.split(" / ");
//         result.push({
//             name,
//             level: Number(level),
//             items: items ? items.split(", ") : []
//         })
//     })

//     console.log(JSON.stringify(result));


// }
// heroicInventory(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

//-----------------------------------------------------------------
//  05

// function lowestPriceInTheCity(arr) {

//     const catalogue = {};

//     arr.forEach((el) => {
//         let [town, product, price] = el.split(' | ');
//         price = Number(price);

//         if (!catalogue[product]) {
//             catalogue[product] = {};
//         }
//         catalogue[product][town] = price;
//     })

//     for (const prod in catalogue) {
//         const sortedItems = Object.entries(catalogue[prod]).sort((a, b) => a[1] - b[1]);

//         console.log(`${prod} -> ${sortedItems[0][1]} (${sortedItems[0][0]})`);
//     }

// }

// lowestPriceInTheCity(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);
//-----------------------------------------------------------------
//  06

// function storageCatalogue(arr) {

//     const productCatalogue = {};

//     arr.forEach((el) => {
//         let [productName, price] = el.split(' : ');
//         price = Number(price);
//         const index = productName[0];
//         if (!productCatalogue[index]) {
//             productCatalogue[index] = {}
//         }
//         productCatalogue[index][productName] = price;
//     })

//     let initialSort = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));

//     for (const key of initialSort) {
//         let products = Object.entries(productCatalogue[key])
//             .sort((a, b) => a[0].localeCompare(b[0]));
//         console.log(key);
//         products.forEach((el) => {
//             console.log(`  ${el[0]}: ${el[1]}`);
//         })
//     }

// }

// storageCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

//-----------------------------------------------------------------
//  07
// function townsToJSON(arr) {
//     const result = [];

//     const splitted = arr[0].split("|");
//     const town = splitted[1].trim();
//     const latitude = splitted[2].trim();
//     const longitude = splitted[3].trim();
//     for (let i = 1; i < arr.length; i++) {
//         const obj = {};
//         const splittedEntry = arr[i].split("|");
//         obj[town] = splittedEntry[1].trim();
//         obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
//         obj[longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));
//         result.push(obj);
//     }
//     return JSON.stringify(result)
// }
// townsToJSON(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]);

//-----------------------------------------------------------------
//  08
// function rectangle(width, height, color) {

//     return {
//         width,
//         height,
//         color: color[0].toUpperCase() + color.slice(1, color.length),
//         calcArea: function () {
//             return width * height;
//         }
//     }

// }

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

//-----------------------------------------------------------------
//  10
// function solve() {
//     let fighter = (name) => {
//         return {
//             name,
//             health: 100,
//             stamina: 100,
//             fight() {
//                 this.stamina -= 1;
//                 console.log(`${name} slashes at the foe!`)
//             }
//         }
//     }
//     let mage = (name) => {
//         return {
//             name,
//             health: 100,
//             mana: 100,
//             cast(spellName) {
//                 this.mana -= 1;
//                 console.log(`${name} cast ${spellName}`);
//             }
//         }
//     }

//     return {
//         fighter: fighter,
//         mage: mage
//     };
// }


// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);