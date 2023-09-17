export const BASE_URL = 'https://dogsapi.origamid.dev/json'

type DataBody = {
    username: string
    password: string
    email?: string
}

export const TOKEN_POST = (bodyData: DataBody) => {
    const bodyJson = JSON.stringify(bodyData)
    const body = bodyJson.replace(/\\/g, '')

    return {
        url: BASE_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        }
    }
}

export const GET_USER = (token: string) => {
    return {
        url: BASE_URL + '/api/user',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            },        
        }
    }
}

export const TOKEN_VALIDATE_POST = (token: string) => {
    return {
        url: BASE_URL + '/jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            },
          
        }
    }
}

export const USER_POST = (bodyData: DataBody) => {
    const bodyJson = JSON.stringify(bodyData)
    const body = bodyJson.replace(/\\/g, '')
    return {
        url: BASE_URL + '/api/user',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body
        }
    }
}