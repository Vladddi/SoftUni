class InventoryManager {

    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.length >= this.capacity) {
            throw new Error('The inventory is already full.');
        }

        const findItemByName = this.items.find(i => i.itemName === itemName);
        if (findItemByName) {
            findItemByName.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }


        return `Added ${quantity} ${itemName}(s) to the inventory.`
    };

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        const itemIndex = this.items.findIndex(i => i.itemName === itemName);
        if (itemIndex === -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        let item = this.items[itemIndex];
        if (quantity > item.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        };

        item.quantity -= quantity;
        if (item.quantity === 0) {
            this.items.splice(itemIndex, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    };

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const findItemByName = this.items.find(i => i.itemName === itemName);
        if (findItemByName) {
            findItemByName.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        const itemExistInOutOfStock = this.outOfStock.indexOf(itemName);
        if (itemExistInOutOfStock !== -1) {
            this.outOfStock.splice(itemExistInOutOfStock, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;

    };
    getInventorySummary() {

        let summary = `Current Inventory:\n`;
        summary += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
        if (this.outOfStock.length > 0) {
            summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
        }
        return summary;

    };
}

// try { test1(); } catch (err) { console.error(err.message); };
// try { test2(); } catch (err) { console.error(err.message); };
// try { test3(); } catch (err) { console.error(err.message); };
// try { test4(); } catch (err) { console.error(err.message); };
// try { test5(); } catch (err) { console.error(err.message); };

function test1() {
    console.log('----test1:');
    const manager = new InventoryManager(2);

    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Level", 3));


    /*      
    Added 10 Drill(s) to the inventory.
    Added 5 Hammer(s) to the inventory.
    Uncaught Error Error: The inventory is already full.

    */
}

function test2() {
    console.log('----test2:');
    const manager = new InventoryManager(3);

    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.sellItem("Paintbrush", 2));

    /*      
Added 10 Drill(s) to the inventory.
Added 5 Hammer(s) to the inventory.
Added 3 Chisel(s) to the inventory.
Sold 3 Drill(s) from the inventory.
Uncaught Error Error: The item Paintbrush is not available in the inventory.

    */
}
function test3() {
    console.log('----test3:');
    const manager = new InventoryManager(3);

    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.restockItem("Drill", 5));
    console.log(manager.restockItem("Paintbrush", 1));


    /*      
Added 10 Drill(s) to the inventory. 
Added 5 Hammer(s) to the inventory. 
Added 3 Chisel(s) to the inventory. 
Sold 3 Drill(s) from the inventory. 
Restocked 5 Drill(s) in the inventory. 
Restocked 1 Paintbrush(s) in the inventory.
    */
}
function test4() {
    console.log('----test4:');
    const manager = new InventoryManager(3);

    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.sellItem("Hammer", 5));
    console.log(manager.restockItem("Drill", 5));
    console.log(manager.restockItem("Paintbrush", 1));
    console.log(manager.getInventorySummary());
    /*      
Added 10 Drill(s) to the inventory.
Added 5 Hammer(s) to the inventory.
Added 3 Chisel(s) to the inventory.
Sold 3 Drill(s) from the inventory.
Sold 5 Hammer(s) from the inventory.
Restocked 5 Drill(s) in the inventory.
Restocked 1 Paintbrush(s) in the inventory.
Current Inventory:
Drill: 12
Chisel: 3
Paintbrush: 1
Out of Stock: Hammer
    */
}