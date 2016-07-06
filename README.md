# Google Maps MarkerFactory

This is a zero dependencies library that uses a canvas element to generate valid [google.maps.Marker](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker) Icons from graphic-fonts, such as [Font-Awesome](https://fontawesome.github.io/Font-Awesome/) and  [Fontello](http://fontello.com/).


[![Build Status](https://travis-ci.org/HuasoFoundries/ig_markerfactory.svg)](https://travis-ci.org/HuasoFoundries/ig_markerfactory) [![Code Climate](https://codeclimate.com/github/HuasoFoundries/ig_markerfactory/badges/gpa.svg)](https://codeclimate.com/github/HuasoFoundries/ig_markerfactory) [![Codacy Badge](https://api.codacy.com/project/badge/grade/44d15485b93e43cf86356e56a8bfb7d1)](https://www.codacy.com/app/amenadiel/ig_markerfactory)


## Why? 

Because some libraries, like google maps API, expect its Markers to have an valid [google.maps.Icon](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Icon) to be shown on the map:

```js
	var mymarker = new google.maps.Marker({
		position: myMap.getCenter(),
		map: myMap
	});

	mymarker.setIcon({
		url: '/img/some_image.png',
		size: new google.maps.Size(54 , 48 ),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(27 , 24 )
	});
```

(Actually, it would be enough to set) 

```js
    mymarker.setIcon('/img/some_image.png');

```

But still, you need an image. You'll need to host every icon and color combination thay might be.

With MarkerFactory, you generate those icons on the fly.


![screenshot from 2016-07-06 12-00-51](https://cloud.githubusercontent.com/assets/238439/16625228/7ac42b58-4371-11e6-9b44-6bdde4098958.png)



## Installation

Install it with jspm like so:

```js
jspm install npm:ig_markerfactory
```


Or, if for some reason NPM is down:

```js
jspm install github:huasofoundries/ig_markerfactory
```

If you don't use jspm, you can as well clone this repo and copy 
`dist/markerfactory.js` to your project. 



## Usage

This is a simple example using AMD loading:

```js
	define(['huasofoundries/ig_markerfactory'], function(MarkerFactory) {

		var myIcon = MarkerFactory.autoIcon({
			label: 'f1b9',
			font: 'fontawesome-webfont',
			color: '#CC0000',
			fontsize: 20
			});

		console.log(myIcon);

	});

```

The `myIcon` object is a valid [google.maps.Icon](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Icon) object,
but of course you might want the image for other purposes so you can just use `myIcon.url` which is a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs)



## Example

run 

```sh
npm install
jspm install
serve .
```

and open your browser at http://localhost:3000/example.html

