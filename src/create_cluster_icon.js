/** global: google */
import { IconObject } from "./icon_object.js";

function createClusterIcon(theoptions) {
    const generateClusterCanvas = function(options) {
        let canvas = options.canvas || document.createElement("canvas"),
            anchorX = 27,
            anchorY = 53,
            radius = anchorX - 9,
            color1,
            font = options.font || "fontello",
            fontsize = options.fontsize || 14,
            context = canvas.getContext("2d");

        canvas.width = anchorX * 2;
        canvas.height = anchorY + 1;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.moveTo(anchorX, anchorY);

        let labelvalue = parseInt(options.label, 10);
        if (labelvalue < 10) {
            color1 = "orange";
            fontsize = 14;
        } else if (labelvalue < 30) {
            color1 = "red";
            fontsize = 15;
        } else {
            color1 = "purple";
            fontsize = 16;
        }
        if (labelvalue > 99) {
            radius = radius + 3;
            context.setLineDash([5, 5]);
            context.beginPath();
            context.arc(
                anchorX,
                2 + 0.5 * anchorY,
                radius + 7,
                0,
                2 * Math.PI,
                false
            );
            context.fillStyle = "transparent";
            context.strokeStyle = color1;
            context.lineWidth = 2;
            context.fill();
            context.stroke();
        }

        context.setLineDash([5, 5]);
        context.beginPath();
        context.arc(
            anchorX,
            2 + 0.5 * anchorY,
            radius + 2,
            0,
            2 * Math.PI,
            false
        );
        context.fillStyle = "transparent";
        context.strokeStyle = color1;
        context.lineWidth = 2;
        context.fill();
        context.stroke();

        // Círculo blanco
        context.setLineDash([5, 0]);
        context.beginPath();
        context.arc(
            anchorX,
            2 + 0.5 * anchorY,
            radius - 3,
            0,
            2 * Math.PI,
            false
        );
        context.fillStyle = "white";
        context.strokeStyle = color1;
        context.lineWidth = 4;
        context.fill();
        context.stroke();

        context.beginPath();

        context.font = "normal normal normal " + fontsize + "px " + font;
        console.log("context font", context.font);
        context.fillStyle = "#333";
        context.textBaseline = "top";

        let textWidth = context.measureText(options.label),
            text_x = options.label,
            label_x = Math.floor(canvas.width / 2 - textWidth.width / 2),
            label_y = 1 + Math.floor(canvas.height / 2 - fontsize / 2);

        // centre the text.
        context.fillText(text_x, label_x, label_y);

        return canvas;
    };
    theoptions.scale = theoptions.scale || 1;
    let markerCanvas = generateClusterCanvas(theoptions),
        markerOpts = {},
        scale = theoptions.scale;

    Object.assign(markerOpts, theoptions);

    if (window && window.google && window.google.maps) {
        Object.assign(markerOpts, {
            size: new google.maps.Size(54, 48),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(27 * scale, 24 * scale),
            scaledSize: new google.maps.Size(54 * scale, 48 * scale)
        });
    }

    let iconObj = new IconObject(markerCanvas, markerOpts);

    return iconObj;
}

export { createClusterIcon };
