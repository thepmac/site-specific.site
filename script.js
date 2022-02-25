// PARSONS COORDINATES
// 40.73528
// -73.99472

// MY HOME COORDINATES
// 40.65738493092836
// -73.9616219061852

var userLat;
var userLong;

var targetLat = 40.65738493092836;
var targetLong = -73.9616219061852;
var latMax;
var latMin;
var longMax;
var longMin;

var vicinity;

function setLocation(x, y) {
    lat = x;
    long = y;
}

var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};


`https://www.google.com/maps/dir/${userLat},${userLong}/${targetLat},${targetLong}`


function success(pos) {
    var crd = pos.coords;

    console.log('Current Position');
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    userLat = crd.latitude;
    userLong = crd.longitude;

    latMax = targetLat + 0.0009;
    latMin = targetLat - 0.0009;
    longMax = targetLong + 0.0012;
    longMin = targetLong - 0.0012;

    console.log(latMax);
    console.log(latMin);
    console.log(longMax);
    console.log(longMin);

    if (userLat > 0) {
        console.log('You are in the northern hemisphere.')
    } else {
        console.log('You are in the southern hemisphere.')
    }

    if (userLong > 0) {
        console.log('You are in the eastern hemisphere.')
    } else {
        console.log('You are in the western hemisphere.')
    }

    if (userLat <= latMax && userLat >= latMin && userLong <= longMax && userLong >= longMin) {
        vicinity = true;
        console.log(vicinity);
        console.log('You are in the vicinity of the site.')
    } else {
        vicinity = false;
        console.log(vicinity);
        console.log('You are not in the vicinity of the site. Try moving closer: ' + `https://www.google.com/maps/dir/${userLat},${userLong}/${targetLat},${targetLong}`)
    }

    if (vicinity == true) {
        document.getElementById('work').style.display = "block";
    } else {
        document.getElementById('sorry').style.display = "block";
        document.getElementById('sorry').innerHTML += `<a href="https://www.google.com/maps/dir/${userLat},${userLong}/${targetLat},${targetLong}" target="_blank">Try moving closer.</a>`;
    }
}


function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);