const express = require('express');
const axios = require('axios');
const weather = require("./weather");




const app = express();


/* realtime to hab hub */
const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});


const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)

    socket.on('get-weather', function(data) {
        weather(data.zip).then((result) => {
            io.emit('weather-update', result);
        }).catch(err =>  console.log(err));

    });

    socket.on('command', function(data) {
        console.log("message receive", data);
        io.emit('MESSAGE', data);

        var value = data.message.light;
        var id = data.message.id;

        axios.post('http://10.0.0.181:8080/rest/items/' + id, value,
            {
                headers: {
                    'Content-Type': 'text/plain',
                    'Accept': 'application/json'
                }
            }
            ).then(function (response) {
                // handle success

            })
            .catch(function (error) {
                // handle error

            })
            .finally(function () {
                // always executed
            });


    });
});
/* END realtime to hab hub */
