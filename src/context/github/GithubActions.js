import axios from 'axios'

const github = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL,
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
})

export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    /**
     * with axios dont need to await the response, this is built in, the repsonse 
     * will return in a data object.
     */
    const response = await github.get(`search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos: repos.data}
}

/* 

   // Get a single user!
  export const getUser = async (login) => {
    const response = await fetch (`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    if(response.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await response.json()

        return data
    }

}

// Get user repos
export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    console.log(login)

    const response = await fetch (`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const data = await response.json()

    return data
} */