var wms_layers = [];

var format_LondonBoroughs1_0 = new ol.format.GeoJSON();
var features_LondonBoroughs1_0 = format_LondonBoroughs1_0.readFeatures(json_LondonBoroughs1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LondonBoroughs1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LondonBoroughs1_0.addFeatures(features_LondonBoroughs1_0);
var lyr_LondonBoroughs1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LondonBoroughs1_0, 
                style: style_LondonBoroughs1_0,
                interactive: true,
                title: '<img src="styles/legend/LondonBoroughs1_0.png" /> London Boroughs1'
            });
var format_cycle_parking_1 = new ol.format.GeoJSON();
var features_cycle_parking_1 = format_cycle_parking_1.readFeatures(json_cycle_parking_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cycle_parking_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cycle_parking_1.addFeatures(features_cycle_parking_1);
var lyr_cycle_parking_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cycle_parking_1, 
                style: style_cycle_parking_1,
                interactive: true,
                title: '<img src="styles/legend/cycle_parking_1.png" /> cycle_parking'
            });

lyr_LondonBoroughs1_0.setVisible(true);lyr_cycle_parking_1.setVisible(true);
var layersList = [lyr_LondonBoroughs1_0,lyr_cycle_parking_1];
lyr_LondonBoroughs1_0.set('fieldAliases', {'name': 'name', });
lyr_cycle_parking_1.set('fieldAliases', {'FEATURE_ID': 'FEATURE_ID', 'SVDATE': 'SVDATE', 'PRK_CARR': 'PRK_CARR', 'PRK_COVER': 'PRK_COVER', 'PRK_SECURE': 'PRK_SECURE', 'PRK_LOCKER': 'PRK_LOCKER', 'PRK_SHEFF': 'PRK_SHEFF', 'PRK_MSTAND': 'PRK_MSTAND', 'PRK_PSTAND': 'PRK_PSTAND', 'PRK_HOOP': 'PRK_HOOP', 'PRK_POST': 'PRK_POST', 'PRK_BUTERF': 'PRK_BUTERF', 'PRK_WHEEL': 'PRK_WHEEL', 'PRK_HANGAR': 'PRK_HANGAR', 'PRK_TIER': 'PRK_TIER', 'PRK_OTHER': 'PRK_OTHER', 'PRK_PROVIS': 'PRK_PROVIS', 'PRK_CPT': 'PRK_CPT', 'BOROUGH': 'BOROUGH', 'PHOTO1_URL': 'PHOTO1_URL', 'PHOTO2_URL': 'PHOTO2_URL', });
lyr_LondonBoroughs1_0.set('fieldImages', {'name': '', });
lyr_cycle_parking_1.set('fieldImages', {'FEATURE_ID': '', 'SVDATE': '', 'PRK_CARR': '', 'PRK_COVER': '', 'PRK_SECURE': '', 'PRK_LOCKER': '', 'PRK_SHEFF': '', 'PRK_MSTAND': '', 'PRK_PSTAND': '', 'PRK_HOOP': '', 'PRK_POST': '', 'PRK_BUTERF': '', 'PRK_WHEEL': '', 'PRK_HANGAR': '', 'PRK_TIER': '', 'PRK_OTHER': '', 'PRK_PROVIS': '', 'PRK_CPT': '', 'BOROUGH': '', 'PHOTO1_URL': '', 'PHOTO2_URL': '', });
lyr_LondonBoroughs1_0.set('fieldLabels', {'name': 'inline label', });
lyr_cycle_parking_1.set('fieldLabels', {'FEATURE_ID': 'no label', 'SVDATE': 'no label', 'PRK_CARR': 'no label', 'PRK_COVER': 'no label', 'PRK_SECURE': 'no label', 'PRK_LOCKER': 'no label', 'PRK_SHEFF': 'no label', 'PRK_MSTAND': 'no label', 'PRK_PSTAND': 'no label', 'PRK_HOOP': 'no label', 'PRK_POST': 'no label', 'PRK_BUTERF': 'no label', 'PRK_WHEEL': 'no label', 'PRK_HANGAR': 'no label', 'PRK_TIER': 'no label', 'PRK_OTHER': 'no label', 'PRK_PROVIS': 'no label', 'PRK_CPT': 'no label', 'BOROUGH': 'no label', 'PHOTO1_URL': 'no label', 'PHOTO2_URL': 'no label', });
lyr_cycle_parking_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});