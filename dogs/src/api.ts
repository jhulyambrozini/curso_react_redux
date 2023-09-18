export const BASE_URL = 'https://dogsapi.origamid.dev/json'

type DataBody = {
    username: string
    password: string
    email?: string
}

type TPhotosGet = {
    options: {
        method: string
        cache: RequestCache
    }
    url: string
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

export const PHOTO_POST = (formData: FormData, token: string) => {
    
    return {
        url: BASE_URL + '/api/photo',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            },
        body: formData
        }
    }
}

export const PHOTOS_GET = (page: number, total: number, user: number | string): TPhotosGet => {
    return {
        url: `${BASE_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}

export const PHOTO_GET = (id: number): TPhotosGet => {
    return {
        url: `${BASE_URL}/api/photo/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}

export const COMMENT_POST = (id: number, body: {comment: string } , token: string) => {
    return {
        url: `${BASE_URL}/api/comment/${id}`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(body)
        },
       
    }
}

export const PHOTO_DELETE = (id: number, token: string) => {
    return {
        url: `${BASE_URL}/api/photo/${id}`,
        options: {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    }
}