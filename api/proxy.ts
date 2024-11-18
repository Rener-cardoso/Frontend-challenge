export default async function handler(req, res) {
  try {
    const apiUrl = process.env.VITE_API_URL + req.url;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': req.headers['authorization'] || '',
        'Content-Type': req.headers['content-type'] || 'application/json',
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Erro ao fazer proxy da requisição:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
}
