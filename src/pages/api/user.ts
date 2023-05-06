import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  age: number;
}

const users = [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: 24 },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': return get(req, res);
    case 'POST': return post(req, res);
    default: return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const user = JSON.parse(req.body);
  users.push(user);
  res.status(201).json(user);
}
