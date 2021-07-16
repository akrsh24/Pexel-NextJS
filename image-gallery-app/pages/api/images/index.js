import { PEXEL_API_URL } from '@/config/index';

export default async function getImages(req, res) {
  let per_page = req?.query?.per_page || 10;
  let page = req?.query?.page || 1;

  if (req.method === 'GET') {
    const response = await fetch(
      `${PEXEL_API_URL}/?query=people&per_page=${per_page}&page=${page}`,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXEL_API_KEY,
        },
      }
    );
    if (!response.ok) {
      return res
        .status(500)
        .json({ message: 'An error occured while fetching' });
    }
    const images = await response.json();
    return res.status(200).json(images);
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `${req.method} is not allowed` });
  }
}
