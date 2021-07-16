export default async function getImageById(req, res) {
  if (req.method === 'GET') {
    const images = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    ).then((data) => data.json());
    return res.status(200).json({ images });
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `${req.method} is not allowed` });
  }
}
