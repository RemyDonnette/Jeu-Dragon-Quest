const apiUrl = 'http://localhost:3000';

export async function fetchData({ route, method = 'GET', body = JSON.stringify()}) {
    const options = {
        method: method,
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body, 
    }
    const result = await fetch(`${apiUrl}${route}`, options);
    if (result.ok) {
        return result.json();
    }
    throw new Error('Erreur serveur', { cause: result });
}
