var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaKlasifikasiTemperatureRokanHulu_1 = new ol.format.GeoJSON();
var features_PetaKlasifikasiTemperatureRokanHulu_1 = format_PetaKlasifikasiTemperatureRokanHulu_1.readFeatures(json_PetaKlasifikasiTemperatureRokanHulu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaKlasifikasiTemperatureRokanHulu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaKlasifikasiTemperatureRokanHulu_1.addFeatures(features_PetaKlasifikasiTemperatureRokanHulu_1);
var lyr_PetaKlasifikasiTemperatureRokanHulu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaKlasifikasiTemperatureRokanHulu_1, 
                style: style_PetaKlasifikasiTemperatureRokanHulu_1,
                popuplayertitle: 'Peta Klasifikasi Temperature Rokan Hulu',
                interactive: true,
    title: 'Peta Klasifikasi Temperature Rokan Hulu<br />\
    <img src="styles/legend/PetaKlasifikasiTemperatureRokanHulu_1_0.png" /> 22 - 23 (Celcius)<br />\
    <img src="styles/legend/PetaKlasifikasiTemperatureRokanHulu_1_1.png" /> 23 - 24 (Celcius)<br />\
    <img src="styles/legend/PetaKlasifikasiTemperatureRokanHulu_1_2.png" /> 24 - 25 (Celcius)<br />\
    <img src="styles/legend/PetaKlasifikasiTemperatureRokanHulu_1_3.png" /> 25 - 26 (Celcius)<br />\
    <img src="styles/legend/PetaKlasifikasiTemperatureRokanHulu_1_4.png" /> 26 - 27 (Celcius)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PetaKlasifikasiTemperatureRokanHulu_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PetaKlasifikasiTemperatureRokanHulu_1];
lyr_PetaKlasifikasiTemperatureRokanHulu_1.set('fieldAliases', {'DN': 'DN', });
lyr_PetaKlasifikasiTemperatureRokanHulu_1.set('fieldImages', {'DN': 'Range', });
lyr_PetaKlasifikasiTemperatureRokanHulu_1.set('fieldLabels', {'DN': 'inline label - always visible', });
lyr_PetaKlasifikasiTemperatureRokanHulu_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});