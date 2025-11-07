var wms_layers = [];

var lyr_DMR50Tieovanrelif_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_dmr_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DMR 5.0 - Tieňovaný reliéf',
                            popuplayertitle: 'DMR 5.0 - Tieňovaný reliéf',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DMR50Tieovanrelif_0, 0]);

        var lyr_PodkladovmapaCartoLight_1 = new ol.layer.Tile({
            'title': 'Podkladová mapa - Carto Light',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Vlastnckevzahy_2 = new ol.format.GeoJSON();
var features_Vlastnckevzahy_2 = format_Vlastnckevzahy_2.readFeatures(json_Vlastnckevzahy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vlastnckevzahy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vlastnckevzahy_2.addFeatures(features_Vlastnckevzahy_2);
var lyr_Vlastnckevzahy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vlastnckevzahy_2, 
                style: style_Vlastnckevzahy_2,
                popuplayertitle: 'Vlastnícke vzťahy',
                interactive: true,
    title: 'Vlastnícke vzťahy<br />\
    <img src="styles/legend/Vlastnckevzahy_2_0.png" /> cirkevné<br />\
    <img src="styles/legend/Vlastnckevzahy_2_1.png" /> obecné a mestské<br />\
    <img src="styles/legend/Vlastnckevzahy_2_2.png" /> spoločenstvá<br />\
    <img src="styles/legend/Vlastnckevzahy_2_3.png" /> súkromné a bez LV<br />\
    <img src="styles/legend/Vlastnckevzahy_2_4.png" /> štátne<br />\
    <img src="styles/legend/Vlastnckevzahy_2_5.png" /> zmiešané<br />' });
var lyr_ParceyregistraE_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_orto/MapServer/WmsServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Parcey registra E',
                            popuplayertitle: 'Parcey registra E',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ParceyregistraE_3, 0]);
var lyr_ParcelyregistraC_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_orto/MapServer/WmsServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "5",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Parcely registra C',
                            popuplayertitle: 'Parcely registra C',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ParcelyregistraC_4, 0]);
var format_HraniceK_5 = new ol.format.GeoJSON();
var features_HraniceK_5 = format_HraniceK_5.readFeatures(json_HraniceK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HraniceK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HraniceK_5.addFeatures(features_HraniceK_5);
var lyr_HraniceK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HraniceK_5, 
                style: style_HraniceK_5,
                popuplayertitle: 'Hranice KÚ',
                interactive: false,
                title: '<img src="styles/legend/HraniceK_5.png" /> Hranice KÚ'
            });
var format_HraniceCHKOKysuce_6 = new ol.format.GeoJSON();
var features_HraniceCHKOKysuce_6 = format_HraniceCHKOKysuce_6.readFeatures(json_HraniceCHKOKysuce_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HraniceCHKOKysuce_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HraniceCHKOKysuce_6.addFeatures(features_HraniceCHKOKysuce_6);
var lyr_HraniceCHKOKysuce_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HraniceCHKOKysuce_6, 
                style: style_HraniceCHKOKysuce_6,
                popuplayertitle: 'Hranice CHKO Kysuce',
                interactive: false,
                title: '<img src="styles/legend/HraniceCHKOKysuce_6.png" /> Hranice CHKO Kysuce'
            });
var group_ParcelyKN = new ol.layer.Group({
                                layers: [lyr_ParceyregistraE_3,lyr_ParcelyregistraC_4,],
                                fold: 'close',
                                title: 'Parcely KN'});

lyr_DMR50Tieovanrelif_0.setVisible(true);lyr_PodkladovmapaCartoLight_1.setVisible(true);lyr_Vlastnckevzahy_2.setVisible(true);lyr_ParceyregistraE_3.setVisible(true);lyr_ParcelyregistraC_4.setVisible(true);lyr_HraniceK_5.setVisible(true);lyr_HraniceCHKOKysuce_6.setVisible(true);
var layersList = [lyr_DMR50Tieovanrelif_0,lyr_PodkladovmapaCartoLight_1,lyr_Vlastnckevzahy_2,group_ParcelyKN,lyr_HraniceK_5,lyr_HraniceCHKOKysuce_6];
lyr_Vlastnckevzahy_2.set('fieldAliases', {'fid': 'fid', 'druh_vlastnictva': 'Druh vlastníctva', 'plocha_ha': 'Plocha v ha', 'sum': 'sum', });
lyr_HraniceK_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DOW': 'DOW', 'AUT': 'AUT', 'ACH': 'ACH', 'SOI': 'SOI', 'IDN5': 'IDN5', 'NM5': 'NM5', 'IDN4': 'IDN4', 'NM4': 'NM4', 'IDN3': 'IDN3', 'NM3': 'NM3', 'IDN2': 'IDN2', 'NM2': 'NM2', 'VYMERA': 'VYMERA', 'NUTS1': 'NUTS1', 'NUTS1_CODE': 'NUTS1_CODE', 'NUTS2': 'NUTS2', 'NUTS2_CODE': 'NUTS2_CODE', 'NUTS3': 'NUTS3', 'NUTS3_CODE': 'NUTS3_CODE', 'LAU1': 'LAU1', 'LAU1_CODE': 'LAU1_CODE', 'LAU2': 'LAU2', 'LAU2_CODE': 'LAU2_CODE', });
lyr_HraniceCHKOKysuce_6.set('fieldAliases', {'HECTARES': 'HECTARES', 'NAZOV': 'NAZOV', 'VYM_CHKO': 'VYM_CHKO', 'VYM_HA': 'VYM_HA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Vlastnckevzahy_2.set('fieldImages', {'fid': 'TextEdit', 'druh_vlastnictva': 'TextEdit', 'plocha_ha': 'TextEdit', 'sum': 'TextEdit', });
lyr_HraniceK_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DOW': 'DateTime', 'AUT': 'TextEdit', 'ACH': 'TextEdit', 'SOI': 'TextEdit', 'IDN5': 'Range', 'NM5': 'TextEdit', 'IDN4': 'Range', 'NM4': 'TextEdit', 'IDN3': 'Range', 'NM3': 'TextEdit', 'IDN2': 'Range', 'NM2': 'TextEdit', 'VYMERA': 'Range', 'NUTS1': 'TextEdit', 'NUTS1_CODE': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS2_CODE': 'TextEdit', 'NUTS3': 'TextEdit', 'NUTS3_CODE': 'TextEdit', 'LAU1': 'TextEdit', 'LAU1_CODE': 'TextEdit', 'LAU2': 'TextEdit', 'LAU2_CODE': 'TextEdit', });
lyr_HraniceCHKOKysuce_6.set('fieldImages', {'HECTARES': 'TextEdit', 'NAZOV': 'TextEdit', 'VYM_CHKO': 'TextEdit', 'VYM_HA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_Vlastnckevzahy_2.set('fieldLabels', {'fid': 'hidden field', 'druh_vlastnictva': 'header label - visible with data', 'plocha_ha': 'hidden field', 'sum': 'hidden field', });
lyr_HraniceK_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'DOW': 'no label', 'AUT': 'no label', 'ACH': 'no label', 'SOI': 'no label', 'IDN5': 'no label', 'NM5': 'no label', 'IDN4': 'no label', 'NM4': 'no label', 'IDN3': 'no label', 'NM3': 'no label', 'IDN2': 'no label', 'NM2': 'no label', 'VYMERA': 'no label', 'NUTS1': 'no label', 'NUTS1_CODE': 'no label', 'NUTS2': 'no label', 'NUTS2_CODE': 'no label', 'NUTS3': 'no label', 'NUTS3_CODE': 'no label', 'LAU1': 'no label', 'LAU1_CODE': 'no label', 'LAU2': 'no label', 'LAU2_CODE': 'no label', });
lyr_HraniceCHKOKysuce_6.set('fieldLabels', {'HECTARES': 'no label', 'NAZOV': 'no label', 'VYM_CHKO': 'no label', 'VYM_HA': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_HraniceCHKOKysuce_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});