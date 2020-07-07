//ключ coord из массива cityList в программе не участвует и служит лишь справочной информацией для программиста, решившего добавить в список населенные пункты с сайта openweathermap.org
let cityList = [
    {
        "id": 2643743,
        "name": "London",
        "country": "GB",
        "coord": {
            "lon": -0.12574,
            "lat": 51.50853
        }
    },
    {
        "id": 3169070,
        "name": "Roma",
        "country": "IT",
        "coord": {
            "lon": 12.4839,
            "lat": 41.894741
        }
    },
    {
        "id": 703448,
        "name": "Kiev",
        "country": "UA",
        "coord": {
            "lon": 30.516666,
            "lat": 50.433334
        }
    },
    {
        "id": 524901,
        "name": "Moscow",
        "country": "RU",
        "coord": {
            "lon": 37.615555,
            "lat": 55.75222
        }
    },
    {
        "id": 587084,
        "name": "Baku",
        "country": "AZ",
        "coord": {
            "lon": 49.89201,
            "lat": 40.37767
        }
    },
    {
        "id": 1486209,
        "name": "Yekaterinburg",
        "country": "RU",
        "coord": {
            "lon": 60.612499,
            "lat": 56.857498
        }
    },
    {
        "id": 1496153,
        "name": "Omsk",
        "country": "RU",
        "coord": {
            "lon": 73.400002,
            "lat": 55
        }
    },
    {
        "id": 1642911,
        "name": "Jakarta",
        "country": "ID",
        "coord": {
            "lon": 106.845131,
            "lat": -6.21462
        }
    },
    {
        "id": 2023469,
        "name": "Irkutsk",
        "country": "RU",
        "coord": {
            "lon": 104.296387,
            "lat": 52.297779
        }
    },
    {
        "id": 1850147,
        "name": "Tokyo",
        "country": "JP",
        "coord": {
            "lon": 139.691711,
            "lat": 35.689499
        }
    },
    {
        "id": 2013348,
        "name": "Vladivostok",
        "country": "RU",
        "coord": {
            "lon": 131.873535,
            "lat": 43.105621
        }
    },
    {
        "id": 2119441,
        "name": "Yuzhno-Sakhalinsk",
        "country": "RU",
        "coord": {
            "lon": 142.733658,
            "lat": 46.958118
        }
    },
    {
        "id": 2122104,
        "name": "Petropavlovsk-Kamchatskiy",
        "country": "RU",
        "coord": {
            "lon": 158.6483,
            "lat": 53.0452
        }
    },
    {
        "id": 4035118,
        "name": "Safotu",
        "country": "WS",
        "coord": {
            "lon": -172.401764,
            "lat": -13.45132
        }
    },
    {
        "id": 3374333,
        "name": "Praia",
        "country": "CV",
        "coord": {
            "lon": -23.50868,
            "lat": 14.92148
        }
    },
    {
        "id": 3426466,
        "name": "Grytviken",
        "country": "GS",
        "coord": {
            "lon": -36.509201,
            "lat": -54.281109
        }
    },
    {
        "id": 3435910,
        "name": "Buenos Aires",
        "country": "AR",
        "coord": {
            "lon": -58.377232,
            "lat": -34.613152
        }
    },
    {
        "id": 3492908,
        "name": "Santo Domingo",
        "country": "DO",
        "coord": {
            "lon": -69.988571,
            "lat": 18.50012
        }
    },
    {
        "id": 5128594,
        "name": "New York County",
        "country": "US",
        "coord": {
            "lon": -73.966248,
            "lat": 40.783428
        }
    },
    {
        "id": 3996063,
        "name": "Mexico",
        "country": "MX",
        "coord": {
            "lon": -102,
            "lat": 23
        }
    },
    {
        "id": 5308655,
        "name": "Phoenix",
        "country": "US",
        "coord": {
            "lon": -112.074043,
            "lat": 33.44838
        }
    },
    {
        "id": 5368381,
        "name": "Los Angeles County",
        "country": "US",
        "coord": {
            "lon": -118.200912,
            "lat": 34.366661
        }
    },
    {
        "id": 5879400,
        "name": "Anchorage",
        "country": "US",
        "coord": {
            "lon": -149.900284,
            "lat": 61.21806
        }
    },
    {
        "id": 5856195,
        "name": "Honolulu",
        "country": "US",
        "coord": {
            "lon": -157.858337,
            "lat": 21.30694
        }
    },
    {
        "id": 4036232,
        "name": "Niue",
        "country": "NU",
        "coord": {
            "lon": -169.866669,
            "lat": -19.033331
        }
    },
    {
        "id": 2110204,
        "name": "Eriko Village",
        "country": "KI",
        "coord": {
            "lon": 176.002243,
            "lat": -1.35925
        }
    },
];

let dropdownMenu = document.querySelector('.city-list');
createList(dropdownMenu, cityList);

let city = document.querySelectorAll('.city');

for (let i = 0; i < city.length; i++) {
    if (city[i]) {
        function chooseCity() {
            for (let k = 0; k < cityList.length; k++) {
                let id = cityList[i]['id'];
                document.querySelector('.city-name').textContent = `${cityList[i]['name']}, ${cityList[i]['country']}`;
                document.querySelector('.btn-refresh').onclick = () => {
                    fetch('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=64bae1f74855068d409c7247d430c150')
                        .then(function (resp) {
                            return resp.json()
                        })
                        .then(function (data) {
                            document.querySelector('.city-name-in-card').textContent = `${data['name']}, ${data.sys['country']}`;
                            document.querySelector('.temperature').innerHTML = `Now ${Math.round(data.main.temp - 273) + '&deg;'}`;
                            document.querySelector('.temperature-min').innerHTML = `Min today ${Math.round(data.main.temp_min - 273) + '&deg;'}`;
                            document.querySelector('.temperature-max').innerHTML = `Max today ${Math.round(data.main.temp_max - 273) + '&deg;'}`;
                            document.querySelector('.weather-icon').innerHTML = `<img class="img-thumbnail" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="weather">`;
                            document.querySelector('.weather').innerHTML = `<b>${data.weather[0]['description']}</b>`;
                            document.querySelector('.clouds').innerHTML = `Clouds <b>${data.clouds['all']}%</b>`;
                            document.querySelector('.humidity').innerHTML = `Humidity <b>${data.main['humidity']}%</b>`;
                            document.querySelector('.pressure').innerHTML = `Pressure <b>${Math.round(data.main['pressure'] / 1.333)} mm Hg</b>`;
                            document.querySelector('.wind-speed').innerHTML = `Wind speed <b>${Math.round(data.wind.speed)} m/s</b>`;

                            let visibility = data.visibility;
                            visibilityRange(visibility);
                            let deg = data.wind['deg'];
                            windDirection(deg);
                            let timeZone = data.timezone;
                            let timeSunrise = data.sys['sunrise'];
                            let timeSunset = data.sys['sunset'];
                            timeWest(timeZone);
                            timeEast(timeZone);
                            converterSunriseWest(timeZone, timeSunrise);
                            converterSunriseEast(timeZone, timeSunrise);
                            converterSunsetEast(timeZone, timeSunset);
                            converterSunsetWest(timeZone, timeSunset);

                        })
                        .catch(function () {
                            // catch any errors
                        });
                };
                break
            }
        }
    }
    city[i].onclick = chooseCity;
}




































