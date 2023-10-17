import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type DataBody = {
    username: string
    password: string
    email?: string
}

type PhotoPostType = {
    formData: FormData
    token: string
}

type CommentPostType = {
    id: number
    body: {
        comment: string
    }
    token: string
}

type PhotoDeleteType = {
    id: number
    token: string
}

type PasswordLostType = {
    url: string
    login: string
}
 
type PasswordResetType = {
    login: string
    key: string
    password: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dogsapi.origamid.dev/json'
    }),
    endpoints: (builder) => ({
        getUser: builder.query<any, string>({
           query: (token) => ({
                url: '/api/user',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer' + token
                }
           })
        }),
        userPost: builder.mutation<any, DataBody>({
            query: (body) => ({
                url: '/api/user',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        }),
        photoPost: builder.mutation<any, PhotoPostType>({
            query: (data: PhotoPostType) => ({
                url: '/api/photo',
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + data.token
                    },
                    body: data.formData
            })
        }),
        photoGet: builder.query<any, number | string>({
            query: (id) => ({
                url: `/api/photo/${id}`,
                method: 'GET',
                cache: 'no-store'
            })
        }),
        commentPost: builder.mutation<any, CommentPostType>({
            query: (data) => ({
                url: `/api/comment/${data.id}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + data.token
                },
                body: data.body
            })
        }),
        photoDelete: builder.mutation<string, PhotoDeleteType>({
            query: (data) => ({
                url: `api/photo/${data.id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + data.token
                }
            })
        }),
        passwordLost: builder.mutation<any, PasswordLostType>({
            query: (body) => ({
                url: '/api/password/lost',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
        }),
        passwordReset: builder.mutation<any, PasswordResetType>({
            query: (body) => ({
                url: '/api/password/reset',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
        }),
        statisticsGet: builder.query<any, string>({
            query: (token) => ({
                url: '/api/stats',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        })
    }),
})

export default api
export const {
    useGetUserQuery,
    useUserPostMutation,
    useCommentPostMutation,
    usePasswordLostMutation,
    usePasswordResetMutation,
    usePhotoDeleteMutation,
    usePhotoGetQuery,
    usePhotoPostMutation,
    useStatisticsGetQuery
} = api