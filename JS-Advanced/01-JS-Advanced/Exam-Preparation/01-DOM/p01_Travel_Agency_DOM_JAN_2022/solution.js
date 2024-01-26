window.addEventListener('load', solution);

function solution() {
  const finalEcran = document.querySelector('#block');

  const fnameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const codeInput = document.getElementById('code');
  const submitBTNInput = document.getElementById('submitBTN');
  submitBTNInput.addEventListener('click', submit);
  const classPreview = document.querySelector('.preview');
  const infoPreview = document.querySelector('#infoPreview');

  const editBTN = document.querySelector('#editBTN');
  const continueBTN = document.querySelector('#continueBTN');


  function submit(e) {
    e.preventDefault();

    if (fnameInput.value != '' && emailInput.value != '') {
      const fname = fnameInput.value;
      const email = emailInput.value;
      const phone = phoneInput.value;
      const address = addressInput.value;
      const code = codeInput.value;

      // console.log('TODO: Write the missing functionality!');
      const li1FnameElement = document.createElement('li');
      li1FnameElement.textContent = `Full Name: ${fname}`;
      const li2EmailElement = document.createElement('li');
      li2EmailElement.textContent = `Email: ${email}`;
      const li3PhoneElement = document.createElement('li');
      li3PhoneElement.textContent = `Phone Number: ${phone}`;
      const li4AddressElement = document.createElement('li');
      li4AddressElement.textContent = `Address: ${address}`;
      const li5CodeElement = document.createElement('li');
      li5CodeElement.textContent = `Postal Code: ${code}`;

      if (fname == '' || email == '') {
        return;
      }
      infoPreview.appendChild(li1FnameElement);
      infoPreview.appendChild(li2EmailElement);
      infoPreview.appendChild(li3PhoneElement);
      infoPreview.appendChild(li4AddressElement);
      infoPreview.appendChild(li5CodeElement);


      classPreview.appendChild(infoPreview);

      //disable the button
      submitBTNInput.disabled = true;
      //reable the button
      editBTN.removeAttribute('disabled');
      editBTN.addEventListener('click', editText);

      continueBTN.removeAttribute('disabled');
      continueBTN.addEventListener('click', finalText);


      function editText() {
        const listItems = Array.from(infoPreview.childNodes);

        fnameInput.value = listItems[0].textContent.split(': ')[1];
        emailInput.value = listItems[1].textContent.split(': ')[1];
        phoneInput.value = listItems[2].textContent.split(': ')[1];
        addressInput.value = listItems[3].textContent.split(': ')[1];
        codeInput.value = listItems[4].textContent.split(': ')[1];
        listItems[0].remove();
        listItems[1].remove();
        listItems[2].remove();
        listItems[3].remove();
        listItems[4].remove();

        console.log(listItems[0]);

        continueBTN.disabled = true;
        editBTN.disabled = true;
        submitBTNInput.disabled = false;
      }
      emptyInputFields();
    }

  }

  function finalText() {
    finalEcran.innerHTML = '';

    const textReservation = document.createElement('h3');
    textReservation.textContent = 'Thank you for your reservation!';
 
    finalEcran.appendChild(textReservation);
  }


  function emptyInputFields() {
    fnameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    codeInput.value = '';
  }

}
