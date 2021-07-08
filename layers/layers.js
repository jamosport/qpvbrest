var wms_layers = [];

var format_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0 = new ol.format.GeoJSON();
var features_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0 = format_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.readFeatures(json_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.addFeatures(features_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0);
var lyr_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0, 
                style: style_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0,
                interactive: true,
                title: '<img src="styles/legend/QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.png" /> QP_METROPOLEOUTREMER_WGS84_EPSG4326'
            });
var format_LIM_ADM_QuartiersVeille_1 = new ol.format.GeoJSON();
var features_LIM_ADM_QuartiersVeille_1 = format_LIM_ADM_QuartiersVeille_1.readFeatures(json_LIM_ADM_QuartiersVeille_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_ADM_QuartiersVeille_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_ADM_QuartiersVeille_1.addFeatures(features_LIM_ADM_QuartiersVeille_1);
var lyr_LIM_ADM_QuartiersVeille_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_ADM_QuartiersVeille_1, 
                style: style_LIM_ADM_QuartiersVeille_1,
                interactive: true,
                title: '<img src="styles/legend/LIM_ADM_QuartiersVeille_1.png" /> LIM_ADM_QuartiersVeille'
            });

lyr_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.setVisible(true);lyr_LIM_ADM_QuartiersVeille_1.setVisible(true);
var layersList = [lyr_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0,lyr_LIM_ADM_QuartiersVeille_1];
lyr_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.set('fieldAliases', {'CODE_QP': 'CODE_QP', 'NOM_QP': 'NOM_QP', 'COMMUNE_QP': 'COMMUNE_QP', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_LIM_ADM_QuartiersVeille_1.set('fieldAliases', {'NUM_QVEILL': 'NUM_QVEILL', 'NOM_QVEILL': 'NOM_QVEILL', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.set('fieldImages', {'CODE_QP': 'TextEdit', 'NOM_QP': 'TextEdit', 'COMMUNE_QP': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_LIM_ADM_QuartiersVeille_1.set('fieldImages', {'NUM_QVEILL': 'Range', 'NOM_QVEILL': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_QP_METROPOLEOUTREMER_WGS84_EPSG4326_0.set('fieldLabels', {'CODE_QP': 'no label', 'NOM_QP': 'no label', 'COMMUNE_QP': 'no label', });
lyr_LIM_ADM_QuartiersVeille_1.set('fieldLabels', {'NUM_QVEILL': 'no label', 'NOM_QVEILL': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_LIM_ADM_QuartiersVeille_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});