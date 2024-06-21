const apiUrl = 'http://localhost:3000';

export async function fetchData(route, method = 'GET', body = JSON.stringify()) {
    const options = {
        method: method,
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body, 
    }
    // Changer apiUrl par apiUrlD si utilisation de Docker
    const result = await fetch(`${apiUrl}${route}`, options)
    if (result.ok) {
        return result.json()
    }
    throw new Error('Erreur serveur', { cause: result })
}

export async function fetchAllData(id) {

    // Fetch Sauvegarde et Objets
    fetchData(`/sauvegarde${id}`).then((data) => {
        localStorage.setItem('sauvegarde', JSON.stringify(data))
    })
    fetchData(`/sauvegarde${id}`).then((data) => {
        localStorage.setItem('inventaire', JSON.stringify(data.inventaire))
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('magasins', JSON.stringify(data))
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.inventaire))
    })
    fetchData('/eglises').then((data) => {
        localStorage.setItem('eglises', JSON.stringify(data))
    })
    fetchData('/objets').then((data) => {
        localStorage.setItem('objets', JSON.stringify(data))
    })
    fetchData('/armes').then((data) => {
        localStorage.setItem('armes', JSON.stringify(data))
    })
    fetchData('/armures').then((data) => {
        localStorage.setItem('armures', JSON.stringify(data))
    })
    fetchData('/lieux').then((data) => {
        localStorage.setItem('lieux', JSON.stringify(data))
    })
    fetchData('/monstres').then((data) => {
        localStorage.setItem('monstres', JSON.stringify(data))
    })
    fetchData('/monstres').then((data) => {
        localStorage.setItem('heros', JSON.stringify(data[0]))
    })
}