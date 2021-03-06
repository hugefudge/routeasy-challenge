const axios = require('axios');
require('dotenv').config();

exports.googleGeocode = async (addressInput) => {
    const KEY = process.env.GOOGLE_API_KEY;
    const googleObject = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressInput}&key=${KEY}`);

    if (googleObject) {
        const dadosTratados = {
        placeId: googleObject.data.results[0].place_id,
        endereco: googleObject.data.results[0].formatted_address,
        rua: googleObject.data.results[0].address_components[0].long_name,
        bairro: googleObject.data.results[0].address_components[1].long_name,
        cidade: googleObject.data.results[0].address_components[2].long_name,
        estado: googleObject.data.results[0].address_components[3].long_name,
        pais: googleObject.data.results[0].address_components[4].long_name,
        cep: googleObject.data.results[0].address_components[5].long_name,
        latitude: googleObject.data.results[0].geometry.location.lat,
        longitude: googleObject.data.results[0].geometry.location.lng
    }
        return dadosTratados;
        
    } else {
        return error;
    } 
};