import { NowRequest, NowResponse } from '@now/node';
import { Me } from './hasuraCustomTypes';
// import fetch from "node-fetch"

// In memory db
const users = [{
  name: 'owner',
  role: 'owner',
  token: 'owner_token'
}]

const handleMe = async (req: NowRequest, res: NowResponse) => {
  if (!req.body) throw Error('No body')

  const { action, input, session_variables } = req.body;
  const token = session_variables && session_variables['x-hasura-token']

  if (!token) throw Error("token not found")

  const user = users.find(usr => usr.token === token)
  const respJson: Me = {
    name: user.name,
    role: user.role
  }

  return res.json(respJson);
};

// Request Handler
const handler = async (req: NowRequest, res: NowResponse) => {
  try {
    const resp = await handleMe(req, res)
    return resp
  } catch (err) {
    return res.status(400).json({
      message: err.message
    });
  }
};

export default handler;
