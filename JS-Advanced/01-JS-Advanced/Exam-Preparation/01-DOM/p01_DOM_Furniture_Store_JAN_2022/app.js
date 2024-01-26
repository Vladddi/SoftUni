window.addEventListener('load', solve);


function solve() {
    const addBtnElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        modelInputElement.value = '';
        descriptionInputElement.value = '';
        yearInputElement.value = '';
        priceInputElement.value = '';

        if (!model || !description) {
            return;
        }

        if (price <= 0 || year <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let infoBtnElement = document.createElement('button');
        let buyBtnElement = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        infoBtnElement.textContent = 'More Info';
        infoBtnElement.classList.add('moreBtn');
        infoBtnElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info'
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info'

            }
        });

        buyBtnElement.textContent = 'Buy it';
        buyBtnElement.classList.add('buyBtn');
        buyBtnElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove();
            contentsRowElement.remove();
        });

        actionsCellElement.appendChild(infoBtnElement);
        actionsCellElement.appendChild(buyBtnElement);

        rowElement.classList.add('info');

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);


        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);
    });

}

