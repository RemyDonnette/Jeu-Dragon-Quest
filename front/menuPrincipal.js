
fetch('http://localhost:3000/sauvegarde', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify()

}).then((response) => {
    return response.json();

}).then((data) => {

    




})