var size = 0;
var placement = 'point';
function categories_Vlastnckevzahy_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'cirkevné':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(96,244,242,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'obecné a mestské':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,231,0,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'spoločenstvá':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,127,0,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'súkromné a bez LV':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(99,110,250,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'štátne':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,204,150,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'zmiešané':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,26,28,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Vlastnckevzahy_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("druh_vlastnictva");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Vlastnckevzahy_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
