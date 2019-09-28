
const weather = function (zip) {
    return new Promise((resolve, reject) => {
        const DarkSky = require('dark-sky');
        const darksky = new DarkSky("b39388a672bbc3074a07647fd79c272f");

        darksky
            .latitude('47.7148')
            .longitude('-122.2031')
            .language('en')
            .exclude('minutely,hourly')
            .get()
            .then((result) => {
                resolve(result);
            })
            .catch(err =>  reject(err))
    })

}

module.exports = weather;