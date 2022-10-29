// import L from 'leaflet'

const mapa = (latitud, longitud) => {
    var map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map)
        .bindPopup('Lugar de votacion')
        .openPopup();
}

export default{
    mapa
}



