function solve() {
    // console.log("ho ho ho")
    const recipitentNameInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const addBtnInput = document.getElementById('add');
    addBtnInput.addEventListener('click', createMail);
    const resetBtnInput = document.getElementById('reset');
    resetBtnInput.addEventListener('click', onReset);

    const list = document.getElementById('list');

    const sentList = document.querySelector('.sent-list');

    const deleted = document.querySelector('.delete-list');

    function createMail(e) {
        e.preventDefault();

        const name = recipitentNameInput.value;
        const title = titleInput.value;
        const message = messageInput.value;
        if (name == '' &&
            title == '' &&
            message == '') {
            return;
        }

        const element = document.createElement('li');
        element.innerHTML = `<h4>Title: ${title}</h4>
            <h4>Recipient Name: ${name}</h4>
            <span>${message}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>`;

        element.querySelector('#delete').addEventListener('click', deleteMail);
        element.querySelector('#send').addEventListener('click', sentMail);

        list.appendChild(element);

        clearInputFields();

        function sentMail() {
            const sentMailElement = document.createElement('li');
            sentMailElement.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

            ///--------------------------------------
            sentMailElement.querySelector('.delete').addEventListener('click', () => {
                const deletedMailElement = document.createElement('li');
                deletedMailElement.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>`;

                deleted.appendChild(deletedMailElement);
                sentMailElement.remove();
            });
            sentList.appendChild(sentMailElement);
            element.remove();
        }

        function deleteMail() {
            const deletedMailElement = document.createElement('li');
            deletedMailElement.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>`;

            deleted.appendChild(deletedMailElement);
            element.remove();

        }
    }


    function onReset(e) {
        e.preventDefault();
        clearInputFields();
    }

    function clearInputFields() {
        recipitentNameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }
}
solve()