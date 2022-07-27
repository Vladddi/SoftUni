function createElement(type, props, ...content) {
    const element = document.createElement(type);

    for (let prop in props) {
        element[prop] = props[prop];
    }
    for (let entry of content) {
        if (typeof entry == 'string' || typeof entry == 'number') {
            entry = document.createTextNode(entry);
            element.textContent = entry;
        }
        element.appendChild(entry);

    }
    return element;
}

function p(...content) {
    return createElement('p', {}, ...content);
}

function td(...content) {
    return createElement('td', {}, ...content);
}