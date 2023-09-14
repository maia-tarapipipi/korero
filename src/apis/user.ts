import { UserDraft, User } from '../../models/user_models'

const rootUrl = '/api/v1/user'

export async function insertProfile(userDraft: UserDraft, token: string) {
  try {
    const response = await fetch(`${rootUrl}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDraft),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export async function getUser(token: string): Promise<User> {
  try {
    const response = await fetch(`${rootUrl}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

// -------- REQUEST STRUCTURE USING SUPERAGENT
// import request from 'superagent'
// import { UserDraft, User } from '../../models/user_models'

// const rootUrl = '/api/v1/user'

// export async function insertProfile(userDraft: UserDraft, token: string) {
//   return await request
//     .post(rootUrl)
//     .set('Authorization', `Bearer ${token}`)
//     .set('Content-Type', 'application/json')
//     .send(userDraft)
// }

// export async function getUser(token: string): Promise<User> {
//   const res = await request
//     .get(rootUrl)
//     .set('Authorization', `Bearer ${token}`)
//     .set('Content-Type', 'application/json')
//   return res.body as User
// }
