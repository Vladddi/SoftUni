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
   content.addEventListener('click', reveal);

   for (let word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      content.appendChild(div);
   }

   function reveal(e) {
      if(e.target.tagName == 'DIV' && e.target.id != 'content')
      e.currentTarget.children[0].style.display = '';
   }
}
