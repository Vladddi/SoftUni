//--------------------------------------------
// function cityRecord(name, population, treasury) {
//     const result = {
//         name,
//         population,
//         treasury
//     }
//     return result;
// }
// console.log(cityRecord('Tortuga',
//     7000,
//     15000
// ));


// function townPopulation(arr) {

//     const towns = {};
//     for (let data of arr) {
//         const tokens = data.split(' <-> ');
//         const townName = tokens[0];
//         let townPopulation = Number(tokens[1]);

//         if (towns[townName]) {
//             townPopulation += towns[townName];
//         }
//         towns[townName] = townPopulation;
//     }

//     for (const [name, pop] of Object.entries(towns)) {
//         console.log(`${name} : ${pop}`);
//     }
// }

// townPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000'
// ])
// console.log('-----------')
// townPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000'
// ])

//--------------------------------------------
// 

// function city(name, population, treasury) {
//     const result = {
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes() {
//             this.treasury += Math.floor(this.population * this.taxRate);
//         },
//         applyGrowth(percent) {
//             this.population += Math.floor(this.population * (percent / 100));
//         },
//         applyRecession(percent) {
//             this.treasury -= Math.ceil(this.treasury * (percent / 100));
//         }
//     };
//     return result;
// }
// const tortuga = city('Tortuga',
//     7000,
//     15000
// );
// console.log(tortuga);

// tortuga.collectTaxes();

// console.log(tortuga);

// tortuga.applyGrowth(5);

// console.log(tortuga);

// tortuga.applyRecession(10);

// console.log(tortuga);

// function createRect(width, height) {
//     const rect = {
//         width,
//         height
//     };
//     rect.getArea = () => {
//         return rect.width * rect.height;
//     };

//     return rect;
// }

// console.log(createRect(4,3));
// console.log(createRect(2,8));

// rect.createRect

// function factory(library, orders) {
//     return orders.map(compose);

//     function compose(order) {
//         //Create empty object
//         //Copy properties from template
//         //Compose methods from library for every item in parts
//         //Return result

//         const result = Object.assign({}, order.template);

//         for(let part of order.parts) {
//             result[part] = library[part];
//         }

//         return result;
//     }
// }

// const library = {
//     print: function () {
//         console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//         console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//         console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
// };


// const orders = [
//     {
//         template: {name: 'ACME Printer'},
//         parts: ['print']
//     },
//     {
//         template: {name: 'Initech Scanner'},
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier' },
//         parts: ['scan', 'print']
//     },
//     {
//         template: {name: 'BoomBox Stereo'},
//         parts: ['play']
//     }
// ];

// const products = factory(library, orders);
// console.log(products);

