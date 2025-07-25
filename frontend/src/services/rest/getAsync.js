export async function getAsync(url, params = {}) {
    const query = new URLSearchParams(params).toString();

    const response = await fetch(`${url}?${query}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Ошибка при запросе к серверу');
    }

    return await response.json();
}
