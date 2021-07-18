import { PEXEL_API_URL } from '@/config/index';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function getImageByID(req, res) {
  await runMiddleware(req, res, cors);

  const { imageId } = req.query;
  if (req.method === 'GET') {
    const response = await fetch(`${PEXEL_API_URL}/photos/${imageId}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXEL_API_KEY,
      },
    });
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
