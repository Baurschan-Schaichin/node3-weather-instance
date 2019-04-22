const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1b4ce081c038a57f446b2815c240c209/' + latitude + ',' +  longitude + '?units=si'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather server.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently: ' + body.currently.temperature + ' degree out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })

}

module.exports = forecast