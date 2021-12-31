import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Claiton'},
    { id: 2, name: 'Nicolas'},
    { id: 3, name: 'Ana Tieli'}
  ]

  return response.json(users);
}