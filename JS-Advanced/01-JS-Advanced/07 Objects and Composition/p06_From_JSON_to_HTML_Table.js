function JSONToHTMLTable(jsonString) {
    let result = '<table>\n';

    const arr = JSON.parse(jsonString);
    const titleSet = new Set(arr.map(i => Object.keys(i)).flat());
    const titleArray = Array.from(titleSet);

    relust += '<tr><th>' + titleArray.join('</th><th>') + '</th></tr>';

    result = arr.reduce((acc, currItem) => {
        let innerResult = titleArray.reduce((titleAcc, currTitle) => {
            let value = currItem[currTitle];
            value = value === undefined ? '' :
                value.toString().replace(/&/g, "&amp")
                    .replace(/</g, "&lt;")
                    .replace(/</g, "&gt;")
                    .replace(/</g, "&quot;")
                    .replace(/</g, "&#39;");

            return titleAcc + '<td>' + value + '</td>';
        }, '');

        if (innerResult === '') { return acc; }
        return acc + '\n<tr>' + innerResult + '</tr>';
    }, result);

    return result + '\n</table>';
}

const res = JSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);

console.log(res);