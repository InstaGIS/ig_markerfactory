export function hslaString(hslcolor) {
	if (hslcolor.a !== undefined) {
		return (
			"hsla(" +
			hslcolor.h +
			"," +
			hslcolor.s +
			"%," +
			hslcolor.l +
			"%," +
			parseFloat(hslcolor.a, 10) +
			")"
		);
	}
	return "hsl(" + hslcolor.h + "," + hslcolor.s + "%," + hslcolor.l + "%)";
}

export function rgbaString(hexcolor) {
	if (hexcolor.a !== undefined) {
		return (
			"rgba(" +
			hexcolor.r +
			"," +
			hexcolor.g +
			"," +
			hexcolor.b +
			"," +
			parseFloat(hexcolor.a, 10) +
			")"
		);
	}
	return "rgb(" + hexcolor.r + "," + hexcolor.g + "," + hexcolor.b + ")";
}

export function parseHalf(foo) {
	return parseInt(foo / 2, 10);
}

export function compact(array) {
	let index = -1,
		length = array ? array.length : 0,
		resIndex = 0,
		result = [];

	while (++index < length) {
		let value = array[index];
		if (value) {
			result[resIndex++] = value;
		}
	}
	return result;
}

export function omit(obj, fn) {
	var target = {};
	for (var i in obj) {
		if (fn(i)) {
			continue;
		}
		if (!Object.prototype.hasOwnProperty.call(obj, i)) {
			continue;
		}
		target[i] = obj[i];
	}
	return target;
}

export function serializeOptions(options) {
	if (typeof options !== "object") {
		return null;
	}
	var cleanOptions = omit(options, function(prop) {
			return prop.indexOf("gm_") === 0;
		}),
		sortedOpts = Object.entries(cleanOptions)
			.filter(function(item) {
				return (
					typeof item[1] !== "function" &&
					typeof item[1] !== "object" &&
					item[1] !== null &&
					typeof item[1] !== "undefined"
				);
			})
			.sort();
	return JSON.stringify(sortedOpts);
}
