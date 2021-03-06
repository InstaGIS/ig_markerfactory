/** global: google */
import { IconObject } from "./icon_object.js";

import { getColors } from "./parsers.js";
const generateTransparentCanvas = function(options) {
    let text_x,
        canvas = options.canvas || document.createElement("canvas"),
        context = canvas.getContext("2d"),
        font = options.font || "fontello",
        fontsize = options.fontsize || 26;

    canvas.width = 54;
    canvas.height = 48;
    context.clearRect(0, 0, canvas.width, canvas.height);

    let colors = getColors(options),
        color0 = colors[0],
        color1 = colors[1];
    context.beginPath();

    context.font = "normal normal normal " + (fontsize - 3) + "px " + font;

    context.textBaseline = "top";
    let textmetric = context.measureText(options.unicodelabel);
    text_x = Math.floor(canvas.width / 2 - textmetric.width / 2);

    //console.debug('textmetric', textmetric);

    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 0;
    context.shadowColor = "#FFFFFF";
    context.fillStyle = color0;
    context.fillText(options.unicodelabel, text_x + 1, 6);

    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 1;
    context.shadowColor = "#FFFFFF";
    context.strokeStyle = color1;
    context.strokeText(options.unicodelabel, text_x + 1, 6);

    canvas.fillColor = color0;

    return canvas;
};

export function createTransparentMarkerIcon(theoptions) {
    theoptions.scale = theoptions.scale || 1;
    theoptions.fontsize = theoptions.fontsize || 26;

    let markerCanvas = generateTransparentCanvas(theoptions),
        markerOpts = {};

    let scale = theoptions.scale;

    theoptions.type = "transparent";

    Object.assign(markerOpts, theoptions);

    Object.assign(markerOpts, {
        origin: { x: 0, y: 0 },
        anchor: { x: 27 * scale, y: 24 * scale },
        size: { width: 54, height: 48 },
        scaledSize: { width: 54 * scale, height: 48 * scale }
    });

    let url = markerCanvas.toDataURL(),
        fillColor = markerCanvas.fillColor,
        iconObj = new IconObject(url, fillColor, markerOpts);

    return iconObj;
}
