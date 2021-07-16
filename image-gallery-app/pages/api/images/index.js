import { PAGE_SIZE, PEXEL_API_URL } from '@/config/index';

export default async function getImages(req, res) {
  if (req.method === 'GET') {
    const images = await fetch(
      `${PEXEL_API_URL}/?query=people&per_page=${PAGE_SIZE}`,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXEL_API_KEY,
        },
      }
    ).then((data) => data.json());
    console.log('images', images);
    const photos = images?.photos;
    return res.status(200).json([...photos]);
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `${req.method} is not allowed` });
  }
}
