function createList(dropdownMenu, cityList) {
    for (let i = 0; i < cityList.length; i++) {
        let list = `<a class="dropdown-item city" href="#">${cityList[i]['name']}, ${cityList[i]['country']}</a>`;
        dropdownMenu.innerHTML += list;
    }
}

function windDirection(deg) {
    if (deg >= 0 && deg <= 15) {
        deg = 'N';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 16 && deg <= 35) {
        deg = 'N/NE';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 36 && deg <= 55) {
        deg = 'NE';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 56 && deg <= 75) {
        deg = 'E/NE';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 76 && deg <= 105) {
        deg = 'E';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 106 && deg <= 125) {
        deg = 'E/SE';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 126 && deg <= 145) {
        deg = 'SE';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 146 && deg <= 165) {
        deg = 'S/SE';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 166 && deg <= 195) {
        deg = 'S';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 196 && deg <= 215) {
        deg = 'S/SW';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 216 && deg <= 235) {
        deg = 'SW';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 236 && deg <= 255) {
        deg = 'W/SW';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 256 && deg <= 285) {
        deg = 'W';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 286 && deg <= 305) {
        deg = 'W/NW';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 306 && deg <= 325) {
        deg = 'NW';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 326 && deg <= 345) {
        deg = 'N/NW';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    } else if (deg >= 346 && deg <= 365) {
        deg = 'N';
        document.querySelector('.wind-direction').innerHTML = `Wind direction <b>${deg}</b>`
    }
}


function timeWest(timeZone) {
    if (timeZone < 0) {
        function localTimeWest() {
            let hour = new Date().getHours();
            let minutes = new Date().getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            } else if (minutes == 0) {
                minutes = '00'
            } else if (minutes >= 10) {
                minutes = new Date().getMinutes();
            }
            let currentTimeZone = new Date().getTimezoneOffset() / 60;
            let localTimeZone = (timeZone) / 3600;
            let localTime = 0;
            if (currentTimeZone > 0) {
                localTime = (hour + Math.abs(currentTimeZone)) - Math.abs(localTimeZone);
                if (localTime >= 24) {
                    localTime = 24 - localTime
                } else if (localTime < 0) {
                    localTime = 24 - Math.abs(localTime)
                }
            } else {
                localTime = (hour - Math.abs(currentTimeZone)) - Math.abs(localTimeZone);
                if (localTime < -24) {
                    localTime = 24 - Math.abs(24 - Math.abs(localTime))
                } else if (localTime >= -24 && localTime < 0) {
                    localTime = 24 - Math.abs(localTime)
                } else {
                    localTime = localTime
                }
            }
            document.querySelector('.local-time').textContent = `local time ${Math.abs(localTime)}:${minutes}, GMT(${(timeZone) / 3600})`
        }

        localTimeWest();
    }
}


function timeEast(timeZone) {
    if (timeZone >= 0) {
        function localTimeEast() {
            let hour = new Date().getHours();
            let minutes = new Date().getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            } else if (minutes == 0) {
                minutes = '00'
            } else if (minutes >= 10) {
                minutes = new Date().getMinutes();
            }
            let currentTimeZone = new Date().getTimezoneOffset() / 60;
            let localTimeZone = (timeZone) / 3600;
            let localTime = 0;
            if (currentTimeZone > 0) {
                localTime = (hour + Math.abs(currentTimeZone)) + localTimeZone;
                if (localTime >= 48) {
                    localTime = (localTime - 24) - 24
                } else if (localTime >= 24) {
                    localTime = 24 - localTime
                } else {
                    localTime = localTime
                }
                document.querySelector('.local-time').textContent = `local time ${Math.abs(localTime)}:${minutes}, GMT(+${(timeZone) / 3600})`;
            } else {
                let localTime = (hour - Math.abs(currentTimeZone)) + localTimeZone;
                if (localTime >= 24) {
                    localTime = 24 - localTime
                } else if (localTime < 0) {
                    localTime = 24 - Math.abs(localTime)
                }
                document.querySelector('.local-time').textContent = `local time ${Math.abs(localTime)}:${minutes}, GMT(+${(timeZone) / 3600})`;
            }
        }

        localTimeEast();
    }
}

function converterSunriseEast(timeZone, timeSunrise) {
    if (timeZone >= 0) {
        function timeConverterSunriseEast(UnixTime = timeSunrise) {
            //переводим Unix time в обычный формат времени
            let sunrise = new Date(UnixTime * 1000);
            //получаем час рассвета, но только относительно текущего положения пользователя
            let hourSunrise = sunrise.getHours();
            //получаем минуты рассвета
            let minSunrise = sunrise.getMinutes();
            if (minSunrise < 10) {
                minSunrise = '0' + minSunrise;
            } else if (minSunrise == 0) {
                minSunrise = '00'
            } else if (minSunrise >= 10) {
                minSunrise = sunrise.getMinutes()
            }
            //получаем текущий часовой пояс пользователя при условии, что настройки часов его рабочей машины соответствуют его настоящему положению в часов поясе
            let currentTimeZone = new Date().getTimezoneOffset() / 60;
            //получаем часовой пояс выбранного в приложении города, часовой пояс из API
            timeZone = (timeZone) / 3600;
            //вводим переменную, которая станет часом во времени рассвета
            let timeSunrise = 0;
            //условие, если часовой пояс пользователя находится восточнее Гринвича
            if (currentTimeZone <= 0) {
                timeSunrise = hourSunrise + (timeZone - Math.abs(currentTimeZone));
                //условие, если часовой пояс пользователя находится западнее Гринвича
            } else if (currentTimeZone > 0) {
                timeSunrise = hourSunrise + Math.abs(timeZone) + currentTimeZone;
            }
            //если в переменную мы получили число больше 24, то будеи правильно вычесть из переменной 24 часа
            if (timeSunrise > 24) {
                timeSunrise = timeSunrise - 24;
            }
            document.querySelector('.sunrise').innerHTML = `Sunrise <b>${timeSunrise}:${minSunrise}</b>`
        }

        timeConverterSunriseEast();
    }
}

function converterSunriseWest(timeZone, timeSunrise) {
    if (timeZone < 0) {
        function timeConverterSunriseWest(UnixTime = timeSunrise) {
            let sunrise = new Date(UnixTime * 1000);
            let hourSunrise = sunrise.getHours();
            let minSunrise = sunrise.getMinutes();
            if (minSunrise < 10) {
                minSunrise = '0' + minSunrise;
            } else if (minSunrise == 0) {
                minSunrise = '00'
            } else if (minSunrise >= 10) {
                minSunrise = sunrise.getMinutes()
            }
            let currentTimeZone = new Date().getTimezoneOffset() / 60;
            timeZone = (timeZone) / 3600;
            let timeSunrise = 0;
            if (currentTimeZone <= 0) {
                timeSunrise = hourSunrise - (Math.abs(timeZone) + Math.abs(currentTimeZone));
                if (timeSunrise < 0) {
                    timeSunrise = 24 - Math.abs(timeSunrise)
                }
            } else if (currentTimeZone > 0) {
                if ((timeZone + currentTimeZone) > 0) {
                    timeSunrise = hourSunrise + Math.abs(timeZone + currentTimeZone);
                    if (timeSunrise > 24) {
                        timeSunrise = Math.abs(timeSunrise) - 24
                    }
                } else timeSunrise = hourSunrise - Math.abs(timeZone + currentTimeZone);
            }

            document.querySelector('.sunrise').innerHTML = `Sunrise <b>${timeSunrise}:${minSunrise}</b>`
        }

        timeConverterSunriseWest();
    }
}

function converterSunsetEast(timeZone, timeSunset) {
    if (timeZone >= 0) {
        function timeConverterSunsetEast(UnixTime = timeSunset) {
            let sunset = new Date(UnixTime * 1000);
            let hourSunset = sunset.getHours();
            let minSunset = sunset.getMinutes();
            if (minSunset < 10) {
                minSunset = '0' + minSunset;
            } else if (minSunset == 0) {
                minSunset = '00'
            } else if (minSunset >= 10) {
                minSunset = sunset.getMinutes()
            }
            let currentTimeZone = (new Date().getTimezoneOffset()) / 60;
            timeZone = (timeZone) / 3600;
            let timeSunset = 0;
            if (currentTimeZone <= 0) {
                timeSunset = hourSunset + (timeZone - Math.abs(currentTimeZone));
                if (timeSunset < 0) {
                    timeSunset = 24 - Math.abs(timeSunset)
                }
            } else if (currentTimeZone > 0) {
                timeSunset = hourSunset + Math.abs(timeZone) + currentTimeZone;
            }
            if (timeSunset > 24) {
                timeSunset = timeSunset - 24;
            }
            document.querySelector('.sunset').innerHTML = `Sunset <b>${timeSunset}:${minSunset}</b>`
        }

        timeConverterSunsetEast();
    }
}

function converterSunsetWest(timeZone, timeSunset) {
    if (timeZone < 0) {
        function timeConverterSunsetWest(UnixTime = timeSunset) {
            let sunset = new Date(UnixTime * 1000);
            let hourSunset = sunset.getHours();
            let minSunset = sunset.getMinutes();
            if (minSunset < 10) {
                minSunset = '0' + minSunset;
            } else if (minSunset == 0) {
                minSunset = '00'
            } else if (minSunset >= 10) {
                minSunset = sunset.getMinutes()
            }
            let currentTimeZone = (new Date().getTimezoneOffset()) / 60;
            timeZone = (timeZone) / 3600;
            let timeSunset = 0;
            if (currentTimeZone <= 0) {
                timeSunset = hourSunset + (timeZone - Math.abs(currentTimeZone));
                if (timeSunset < 0) {
                    timeSunset = 24 - Math.abs(timeSunset)
                }
            } else if (currentTimeZone > 0) {
                timeSunset = hourSunset - Math.abs(timeZone) + currentTimeZone;
            }
            if (timeSunset < 0) {
                timeSunset = 24 - Math.abs(timeSunset)
            }
        }

        document.querySelector('.sunset').innerHTML = `Sunset <b>${timeSunset}:${minSunset}</b>`
    }

    timeConverterSunsetWest();
}

function visibilityRange(visibility) {
    if (visibility === undefined) {
        document.querySelector('.visibility').innerHTML = `Visibility <b>there is no data</b>`;
    } else {
        document.querySelector('.visibility').innerHTML = `Visibility <b>${Math.round(visibility / 1000)} km</b>`;
    }
}







































