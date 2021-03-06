// Passar por um validador antes de mandar para o orders.createAddress
const getAddressInput = () => {
    let input = {
        nome: document.forms['addressInputForm']['name'].value,
        peso: document.forms['addressInputForm']['weight'].value,
        address: document.forms['addressInputForm']['address'].value,
        inputTime: Date.now()
    }
    if (!input) {
        return false

    } else {
        return input;
    }
};

const getVehicleInput = () => {
    let input = {
        nome: document.forms['vehicleInputForm']['vehicleName'].value,
        peso: document.forms['vehicleInputForm']['plaque'].value,
        address: document.forms['vehicleInputForm']['supportedWeight'].value,
    }
    if (!input) {
        return false

    } else {
        return input;
    }
}

// Mapa no escopo global, pesquisar alternativa
    var mymap = L.map('map').setView([-27.5935423, -48.6387116], 13);
    const token = 'pk.eyJ1IjoiaHVnZWZ1ZGdlIiwiYSI6ImNrYjVzdHFlNTB6dmoycG54MnFlY25sMXcifQ.QcmLmiVJ_ESauUJXk4Z0NA'
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);

const infoToPage = (delivery) => {
    document.getElementById('registerAddress').disabled = false;
    document.getElementById('resetAddress').disabled = false;
    document.getElementById('latitude').placeholder = delivery.latitude;
    document.getElementById('longitude').placeholder = delivery.longitude;
    document.getElementById('location').outerHTML = delivery.endereco;
    document.getElementById('tableName').outerHTML = delivery.nome;
    document.getElementById('tableWeight').outerHTML = delivery.peso;
   
    L.marker([delivery.latitude, delivery.longitude]).addTo(mymap);
};

const resetFields = () => {
    document.getElementById('registerAddress').disabled = true;
    document.getElementById('resetAddress').disabled = true;
    document.getElementById('longitude').placeholder = 'longitude';
    document.getElementById('latitude').placeholder = 'latitude';
};

document.getElementById('resetAddress').addEventListener('click', resetFields);