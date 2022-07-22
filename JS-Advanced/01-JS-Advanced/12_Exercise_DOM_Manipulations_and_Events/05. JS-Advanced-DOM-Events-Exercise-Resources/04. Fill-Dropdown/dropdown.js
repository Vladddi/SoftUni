function addItem() {
    //take values from input newItemText and newItemValue
    const newText = document.getElementById('newItemText').value;
    const newValue = document.getElementById('newItemValue').value;
   
   const option = document.createElement('option');
   option.value = newValue;
   option.textContent = newText;

   const menu = document.getElementById('menu');
   menu.appendChild(option);

   document.getElementById('newItemText').value = '';
   document.getElementById('newItemValue').value = '';
}