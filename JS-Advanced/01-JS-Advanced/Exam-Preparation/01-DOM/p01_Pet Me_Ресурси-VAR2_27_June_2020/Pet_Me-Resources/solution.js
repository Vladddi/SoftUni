function solve() {
    //get references to elements of interes
    //configuer event listeners

    const fields = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    addBtn.addEventListener('click', addPet);

    // # Add new pet
    // 1. Read input fields
    // 2. Validate values
    // 3. Create new list item
    // 4. Configure event listener for newly created element
    function addPet(event) {
        event.preventDefault();

        const [name, age, kind, owner] = fields.map(f => f.value.trim());

        if (fields.map(f => f.value.trim()).some(v => v == '') || Number.isNaN(Number(age))) {
            return;
        }

        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);

        fields.forEach(f => f.value = '');

        // # Contact owner
        // Create confirmation div
        // Configure event listener for new button
        // Replace existing button with confirmation div
        function contact() {
            const confirmInput = e('input', {
                placeholder: 'Enter your names'
            });
            const confirmBtn = e('button', {}, 'Yes! I take it!');
            const confirmDiv = e('div', {},
                confirmInput,
                confirmBtn);

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));


            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }




    // # Adopt a pet
    // Read and validate input
    // Create new button for cheking 
    // Configure event listener for new button
    // Replace confirmation div with new button
    // Change text content of Owner span
    // Move element to other list
    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        }

        const checkBtn = el('button', 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet));

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);
    }

    // # Cheking of adopted pet
    // Remove element from DOM
    function check(pet) {
        pet.remove();
    }


    // function that create new element
    function el(type, ...content) {
        return e(type, {}, ...content);
    }



    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }

}