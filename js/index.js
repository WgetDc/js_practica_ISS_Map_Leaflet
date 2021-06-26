
var myIcon = L.icon({
    iconUrl: 'assets/img/marcianito.gif',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

const iss_api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getIssData(){
    const response = await fetch(iss_api_url);
    const data = await response.json();
    const issLatitude = data.latitude;
    const issLongitude = data.longitude;
    console.log(data)
    console.log("La latitud es: " + issLatitude)

    var map = L.map('mapid').setView([51.505, -0.09], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([issLatitude, issLatitude], {icon: myIcon}).addTo(map)
    .bindPopup('Los estamos vigilando')
    .openPopup();
}

setInterval(() => {
    getIssData();
}, 2000);




   