function create(words) {
   // steps TODO
   // ------------------------
   // create <div>
   // create <p>
   // set <p> content
   // configure <p> to be hidden (display: none)
   // add <p> to <div>
   // add <div> to page
   // configure <div> eventListener
   const content = document.getElementById('content');

   for (let word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', reveal.bind(para));

      content.appendChild(div);
   }

   function reveal() {
      this.style.display = '';
   }
}