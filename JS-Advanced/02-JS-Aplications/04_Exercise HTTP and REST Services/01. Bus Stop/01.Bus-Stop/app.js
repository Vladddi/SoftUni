async function getInfo() {
    const stopIdRef = document.getElementById('stopId');
    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');
    const stopId = stopIdRef.value;

    stopIdRef.textContent = '';
    busesRef.innerHTML = '';

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        stopNameRef.textContent = data.name;
        appendChild(Object.entries(data.buses));
    } catch (error) {
        stopNameRef.textContent = 'Error';
    }

    function appendChild(data) {
        for ([bus, time] of data) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesRef.appendChild(li);
        }
    }
}
