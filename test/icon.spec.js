var icons_number = {
		'one': {
			label: '1',
			color: '#CC0000',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAeM0lEQVRYCQEoHtfhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wLMzMwq/e3tQ//r6zUCAAAY/wAAFQAAAAABAADr/gAA6AEVFcsDExO9NDQ01gEBAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA39/fCOnX11r+6uppAdraFv/IyBsC4uIDAPHxAADy8gAAAAAAAA4OAAAPDwD+Hh79ATg45f8mJuoEGBiWFScnpyEhIfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8Byb+/Sf/g4H4AtrYq/7q6DQDy8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4AAUZG8wBKStYBICCCN0FBtwEBAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqqqoGHQUFev/Dw2j+oaEX/+3tAAAAAAAAAAAAA'
		},
		'two': {
			label: '2',
			color: '#0C0',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAeM0lEQVRYCQEoHtfhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wLMzMwq7f3tQ+v/6zUAAgAYAP8AFQAAAAAAAQDrAP4A6BUBFcsTAxO9NDQ01gEBAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA39/fCNfp11rq/upp2gHaFsj/yBviAuID8QDxAPIA8gAAAAAADgAOAA8ADwAe/h79OAE45Sb/JuoYBBiWJxUnpyEhIfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8Bv8m/SeD/4H62ALYquv+6DfIA8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ARgFG80oAStYgASCCQTdBtwEBAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqqqoGBR0FesP/w2ih/qEX7f/tAAAAAAAAAAAAA'
		},
		'three': {
			label: '3',
			color: '#00C',
			fontsize: 32,
			scale: 0.8,
			url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAoCAYAAAC4h3lxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAeM0lEQVRYCQEoHtfhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wLMzMwq7e39Q+vr/zUAAAIYAAD/FQAAAAAAAAHrAAD+6BUVAcsTEwO9NDQ01gEBAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA39/fCNfX6Vrq6v5p2toBFsjI/xvi4gID8fEAAPLyAAAAAAAADg4AAA8PAAAeHv79ODgB5SYm/+oYGASWJycVpyEhIfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8Bv7/JSeDg/362tgAqurr/DfLyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODgAARkYB80pKANYgIAGCQUE3twEBAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqqqoGBQUdesPD/2ihof4X7e3/AAAAAAAAAAAAA'
		}
	},



	icons_fontello = {
		camera: {
			label: 'e810',
			font: 'fontello',
			color: '#CC0000',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,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'
		},
		retail: {
			label: 'e896',
			font: 'fontello',
			color: '#33CCCC',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAYAAABaHInAAAAEkUlEQVRoQ+2YbWibVRTHfzdN1jXtNrf1g9VKWyxjtnuJuBEsYx26tlDsmH7oqA7ZBqlpjHTd6tIPvuFExQ+dxTrmkIGjMNjAfpgKA2UqYyK00KIOu9c64gLt1rVZZ5/kSXLlZk9RRiUvTfBZyf3yhNzznJzf/Z977rkRLNAhFigXObAHTdmcYjnFTLICuVTMphDFe/YssRUUdFms1jqk/NXf09MKSCAmhFDPlIcpFHvE6x2Sur4+Hr0Qev/+/Q5nZeUUcBMIpwOXEbASl6sBm227yMubsgiRks9YNFosdX03Fkukcd26NzuamlZUl5aWA78AXwABIUQkVclSCuK/nJe4XC4slqMrNmxgkcGVSv7kWSyMDQ5q13t7vwKeBzRgAHADV4UQ4f8FrLS1dS12+/lGt7told2OLiURKeObJJkR0TT6Dh+OXOnpGTfsDwE/A8PAHSFELBk//7bJiGJSSsujbW13W7zexVtLSrg8M8NUJEKy0YQ0jVNHjjBySPHEYbzAb0BQCBFNFSq+VdN56f53pJSivKPjpyfr6pwvbtzId7dvcyMUiiuXzIhqGtdOnODSPbBzgAe4KIQIJfP+XDYZAVOOyzye9x52OHzebdus309OxlXTYjFkEnDRUIjJU6e4fA/sRwPsUjp7axYyY2DlXm+DbeXKk3tdrqVXNI3h6WmCSaajArvzD9gPwKuAOcCe8vmWBYLBsdYDBxbZhODc1BQTkUi8iCQapgZTBaSsvf1qbXNzWU1FBWcmJgiEwwsCTJTt23f8cadz564tWzhz6xajmkboQVdMpVt5W9vucCx2rKK8PBKW0joTiyUs+VFdj1dPEQyas3gosE1dXcsDd++e1nT9aQGWRHtrdl6dd0UFBYx0d6uvzgOvGOU+5Y4j41VROYwf1G53ECEKk6GaLSuqNL+0eXP4w5YW9fF3YKd6mqLcG2Ci7uDBNRf8/uEnKivF2Pg4WjjMMbd72lhJxSIvBQJ5b508WbjV4eDboSEa1q/XP3e7Z4B8YERxmkoxFfyq9vZN0m7/pqezc0l1fj61Ph/XentVtiko1aXHjp09ax30+21v7NjBxdFRPurv52ufT9kouKPAx8CNdLr6rKSiclrt8RRNCTFa5XAsXxYOi8Ugjns8KugLQJ8K+PTAQPHevr4PapzO/Jt+v3xm9WrxelOT2k/9wCfAEPBXOvewrIGpvvGF7u51M7re+WxV1XNt9fUPFearDGMQeA24ppR7ube3PhyLNdetXdu4q7bWpq4uwAngbeCP+eyvjDXBczTFi1VWAu8ATcb96jPgU+BPQHXshYADeB+oAdSV5V3gS2As3a4+a4rNVkdgKbAGqARUl65S8fJsikkprcBKQP0l8Bgwadyaryv7+aRh1hQz4PKAAsBurOIdI+D4NU2lLKBslHJKYaWisknrP477syZj3f1ch7ER/OxvyLlUUGefcS+MHwXzVSqrqZhsx5FNu6wqls3AE/nOgSVaIbPN5xQzmyKJ4skplmiFzDafU8xsiiSKJ6dYohUy23xOMbMpkiienGKJVshs8wtWsb8BCZ7PQNBnO5IAAAAASUVORK5CYII='
		},
		plane: {
			label: 'e892',
			font: 'fontello',
			color: '#CC00FF',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAYAAABaHInAAAAFU0lEQVRoQ+2Yf0yUdRzHX89zP+C4gzvuOISDREgQxDQjBH+kpmGaij9S5w9UMknTgaVt2aaAK01burmmrZpuab+2nG0O568GnT/SisqpK0XbilxO5If8OBEOeNoXD8dc/XHw3FHunu3Zs909z+f5vr7v7/f9ed9JPKSH9JByEQD7vykbUCyg2H9kBvy2FHPZkKhHfkaLvH+XUnQHUCRJUnw1D34BG0+xdgj6P8xE2JuDGz7d3rxuLdAMtEqS1OELOL+AraAwK4aBX042zzd/0rzjzlt/FeSE2gxXgN8FoC+U8wtYPlveS9dOXJ2WMkIqce9zT3l3ZNtjUxM3A/uAG5Iktamtml/ACnjn7CTTnMykMfGcaTimPDLPLE1ck3kayAeEcnfVVs0vYPlsuzLdnpOUlO3g1E9OwmfB1I3j/gReAr4D6tXea/4Bk7ZVZEfnJCYvclB6yIl1IUwrHCec8UWgDKiWJKldzeXoU7C5zNWEM/hlCWnnogGr5EeX2nF+cZaT107waulSJWlsnAA7DtxUe5/5DCyP4lE6dB+HY4scb5wZFpvaD8ssaCyFS79e4lvXccLjQi9kLn88f8Lq9HLPPlPN+lUHy6U4yoh+p4w8bbRmiiE5fKikj4OQNDAkQ91X0Hod9CNa+aHG2f79qfI2a3zYrnl7Z2wePDK2EWhTw0hUAxNNeBDaVzSwKUV+UpdhelpniNJ3whiGgtIOzRfAVQ4dTaCLBtNIaLBUU3KoxF1dfasuNj2iYG3ZCyVCPaCjN4CqgC1nY5oB40EL9shxwdODI+126N+Ce0A9jUo91b/V079pEPqqUK7XVVLfXkuYzozZasaWYME0TOZq7S8cKTni1hn15Vkb0hZPyB913ZNMehS7VAHLo+hNDfKGWH2Cy6WtV1wdjUFt7W1aW/9wopJs0sVjFcy2LidSdnCutpTzymkSM+KpulZDQ00jRpMJS5gZQ2gIVy9XMHvHpPVZazIPAZWeZOL13lMFbKVm0yJtkGZiXLrj7uhlw9PjM2JTIgdajbJG7nTwzakfMdY2lZgoB9+UOoks6LR78ZXS4mqVqq7WcrOipvOsulLD5DfGVEUPth8AdgPXeqKcKmCKomgAOzADeB9oAuqA2+JalLj7iexnZ4bGDXdw+G0ntiX3wfYDbsDmed4ChAPiWgvkAD+Ket7uN7XAhDRiMJnAUA/QLaBGpIp1xu0Hs1MWDEie7+DoB05si++DvQ6cARqAYE+NCA+kHvgaqOhJUFYLTNQRqpmBEGHZYvmI8zXH9uFNN1xluYlr5LglZs59/jPnasoouryKEEvwCk+DrvKkDh0ggMQpagrF7/QkbqkC1hWFFEURynXVVPKkwtE69EefC1oYkpCSgHUuNJTCiYuHqbZWkndwznpHSudeErlRLElxiOe7avTY8lUFezDrraC4fYLmeTklZgjGDDCmdzVohQOuD7GkBleuPbl0GXBeqKNmXvQpWD5b9wRpgmeF2kJkvVVrkDpkfYeIvu1Q777Ngj2TW4ZlD/oM2OuBc3lrEv8WnH0KpiiKbv/KkqzUrIT1poiQp7oPol+SDXN0qPhI7MVCQDikCMOqpHxfg2mBKCAXmOcxGNFsRZroMhzhiFuBk57l6HUz/ifVfA0m6gcB0UAMYADude17h3BPASYSRq0kSV0G0uufZj4F64wWiiLeIZQTgKIldH+nUE7AtPQ29D44Ez4H69YKutt493H45P9Fv4H1em15WSAA5uWE9fntAcX6XAIvBxBQzMsJ6/PbA4r1uQReDiCgmJcT1ue3BxTrcwm8HEBAMS8nrM9vf2gV+xuMappApEr+wQAAAABJRU5ErkJggg=='
		},
		taxi: {
			label: 'e88c',
			font: 'fontello',
			color: '#33CC33',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,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'
		}
	},

	icons_fontawesome = {
		camera: {
			label: 'f030',
			font: 'FontAwesome',
			color: '#CC0000',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,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'
		},
		retail: {
			label: 'f07a',
			font: 'FontAwesome',
			color: '#33CCCC',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAYAAABaHInAAAAE/klEQVRoQ+2YaWxUVRTHf3cobWBKa2cK7bRAQTsjNTRWS1NKjEBjMC4f4AOLUUA2y1LSQoomlESiUZooCIXE1sSYwAeTyhJMMIi4YlQWRVEhuEAFQau2aTvMdJb33jW3vGlYkze2L4xkJnl58+HMued3/ufec+4IbtOPuE25SIL935RNKpZULEEykCzFBBHCchj9VsyzaNGDIi1tn9R1Z2xV4XB0lYwdW7RvzZp2QBNCSMsRDZBh/8GWLFma4nK9kllYmDpUCOHMzBz058mTkc6LF1OdQ4eeiOh6VJdSR1pjk1L2pDkcz59pbPwSMIQQxn9h7TeYlFLcW1c3L9/tnlqYkzNtz9Gjnlfr6virsxO/rvNDIEB7JIIOWEEL+/38fuhQW+uWLeVAN+AXQmjxwg0EmAO4A3gAaCqrr/csmDuXHLebwQ4HhpS0R6NELSoWDAZp2rYt8tPmzQ3AF8ARoCte5QYCTPkYDHiA+x7asOGFe0pLix+bMIEjfj/dmkZEyl5AK59IMMhn27dzauNGZf4OsBb4TQgRtfL7vn0ej/HNbFU5mnDp5fX1K1NGjVq7bMaM1MPd3ZwNhQjquqUyVP71nh7adu7k9GWwj4Bq4FchRCSeWPut2JWLSSkd4+vqJoXS0vZVL1uW8UckwnGlmq5bVswIhfDv3h0D+9gE++WWginIRxob006cOtU9d/Xq1MzUVD7v6uKfaBTNYikqsMCuXZzetEm5SxwwpVrBqlUnK6ZPv3uq18v7HR0o5aweHr1giaiYSnNBTc0bo8vLlyyurORARwetoRAh4+p2ZITD6IFA30MwSGowiPT78aWns7O2NrEU6wVbvvzJYWPGNM+orHR+fe4c59vbMQIBhALp6SHY1YVhGLgyMvBkZVHgcnFndjZ5LhcFw4czyedjkEN1ET4099iZW77HVDS+6upxQfiuuKRk8PfHjol5kyczyu0m3+UiLyur952TmYkQNzy7VDPuMp89wFbgQrxNekBPxdgJ6amqqhkyYsRLWU7nkLbWVkep19v3H4SU0lAjljTUS6oC1XXD0DRNi97l8fzcvHDh2w6HoxP4GzinehgQinfetAUsf8WKI7lTppQVZWdzf3p678HhSknpPR0v6Tphw6DHMAhLSUTXUZ1XNfBvDhwIPVpUtG7z/PkfAG2mauF4oVSCbQHLq6pqkPCsQ1xdbNfNHrEWECtJKeUn69e/VZib+y3wHnA+3r01oJPHtRNB3sqV+/PLyqbNLC8Xe1ta2Dh7NuVe7w0Hh6ebm9HcbsYXF/NuSwuvzZmjbC8A84Gj5hBsbR67YgVbFBtZU7N/5MSJ056qqBAtO3bIhlmzjAqf76IKEgiryovF8MTWrV6vz5fxcFkZ615/Xb48c6ayPW7OiF8BlxKmFL21tSWhaPRTQ9My1DDcvHix4lAqvAj8qIKN3WIa9u4d13Tw4JuapjkfLy2l6bLteUB9OayuLgkDJqVMMaf9KjPzqjLOAs8Aav/0gQHKNtcEec7c98p2AaCUU/exxChFNVYBw4AyYCkwGtgP7DCvIH2Tejy2t2y6v2bSHwRkANmmKgGzN13Xk6SUlm2twtlyeMQWN9VQQat11IGh36ys4rG1AmcrmJUA7LJJgtmVWbv8JhWzK7N2+U0qZldm7fKbVMyuzNrlN6mYXZm1y29SMbsya5ffpGJ2ZdYuv0nF7MqsXX7/BWNwD09iVBmeAAAAAElFTkSuQmCC'
		},
		plane: {
			label: 'f072',
			font: 'FontAwesome',
			color: '#CC00FF',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,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'
		},
		taxi: {
			label: 'f1ba',
			font: 'FontAwesome',
			color: '#33CC33',
			fontsize: 25,
			scale: 0.8,
			url: 'data:image/png;base64,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'
		}
	};

_.each(icons_number, function (obj, name) {
	describe('It should create a marker with the number ' + name, function () {

		var icon = MarkerFactory.autoIcon(obj);
		it('should generate the same dataurl as expected for icon with number ' + name, function () {
			expect(icon.url).toEqual(obj.url);
		});
	});
});

_.each(icons_fontello, function (obj, name) {
	describe('It should create a marker with the symbol ' + name + 'using fontello', function () {

		var icon = MarkerFactory.autoIcon(obj);
		it('should generate the same dataurl as expected for icon with symbol ' + name + ' using fontello', function () {
			expect(icon.url).toEqual(obj.url);
		});
	});
});

_.each(icons_fontawesome, function (obj, name) {
	describe('It should create a marker with the symbol ' + name + 'using font-awesome', function () {

		var icon = MarkerFactory.autoIcon(obj);
		it('should generate the same dataurl as expected for icon with symbol ' + name + ' using font-awesome', function () {
			expect(icon.url).toEqual(obj.url);
		});
	});
});