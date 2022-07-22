function lockedProfile() {
    // add toggle event listener to all profile buttons

    // find associated profile details
    // if it's visivle -> hide it and display label 'Show more'
    // otherwise -> show it and display label 'Hide it'


    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;


        if (isActive) {
            const infoDiv = profile.querySelector('div');
            //     const infoDiv = Array
            //         .from(e.target.parentElement.querySelectorAll('div'))
            //         .find(d => d.id.includes('HiddenFields'));

            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}