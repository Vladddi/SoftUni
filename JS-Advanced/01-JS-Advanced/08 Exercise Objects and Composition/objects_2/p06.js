function solve(arr) {
    const catalogue = {};

    arr.forEach((el) => {
        let [produtName, productPrice] = el.split(" : ");
        productPrice = Number(productPrice);
        const index = produtName[0];
        if(!catalogue[index]) {
            catalogue[index] = {};
        }

        catalogue[index][produtName] = productPrice;

    });

    let initialSort = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of initialSort) {
        let products = Object.entries(catalogue[key])
        .sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        })
    }

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);