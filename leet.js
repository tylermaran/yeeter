// const fetch = require('node-fetch');

let yeet = 'http://pegasus.noise:5000/?text=yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20yeet%20wait'

const yeeter = async () => {
    fetch(yeet)
        .then(function(response) {
        return response.json();
    })
        .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
}

for (let i = 0; i < 2; i++) {
    yeeter();
    console.log('YEET ' + i);
}
