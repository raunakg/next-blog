// localhost:3000/api/revalidate?path=/&MY_SECET_TOKEN=2999c9f7f1eab1d23fcec1aa007aac58

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({ revalidated: true })
}
