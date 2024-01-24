function solve() {
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const tBody = document.getElementById('tbody');
    const addSalary = document.getElementById('sum');

    //  const addBtnInput = 
    document.getElementById('add-worker').addEventListener('click', (e) => {
        e.preventDefault();
        if (fnameInput.value &&
            lnameInput.value &&
            emailInput.value &&
            birthInput.value &&
            positionInput.value &&
            salaryInput.value) {
            addEmployee(
                e,
                fnameInput.value,
                lnameInput.value,
                emailInput.value,
                birthInput.value,
                positionInput.value,
                salaryInput.value
            );
            clearInputFields();
        }
    });



    function addEmployee(e, fname, lname, email, birth, position, salary) {
        const tr = createElement('tr');
        createElement('td', `${fname}`, tr);
        createElement('td', `${lname}`, tr);
        createElement('td', `${email}`, tr);
        createElement('td', `${birth}`, tr);
        createElement('td', `${position}`, tr);
        createElement('td', `${salary}`, tr);
        const td = createElement('td', '', tr);
        let fireBtn = createElement('button', 'Fired', td);
        fireBtn.setAttribute('class', 'fired');
        let editBtn = createElement('button', 'Edit', td);
        editBtn.setAttribute('class', 'edit');
        tBody.appendChild(tr);

        const currentSalary = Number(addSalary.textContent);
        const addedSalary = Number(salary);
        addSalary.textContent = (currentSalary + addedSalary).toFixed(2);
        editBtn.addEventListener('click', (e) =>
            editWorker(e, fname, lname, email, birth, position, salary)
        );
        fireBtn.addEventListener('click', (e) => fireEmployee(e, salary));
    }

    function fireEmployee(e, salary) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
        reduceCurrentSalarySum(salary)
    }

    function editWorker(
        e,
        firstName,
        lastName,
        emailAddress,
        birthDate,
        currentPosition,
        currentSalary
    ) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
        fnameInput.value = firstName;
        lnameInput.value = lastName;
        emailInput.value = emailAddress;
        birthInput.value = birthDate;
        positionInput.value = currentPosition;
        salaryInput.value = currentSalary;
        reduceCurrentSalarySum(currentSalary);
    };

    function reduceCurrentSalarySum(salary) {
        
        const sumSalary = Number(addSalary.textContent);
        addSalary.textContent = Math.abs((Number(salary) - sumSalary)).toFixed(2);
    }

    function createElement(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

    function clearInputFields() {
        fnameInput.value = '';
        lnameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';
    }
}


solve()