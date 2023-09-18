declare type Data = {
    acessos: number
    author: string
    date: string
    id: number
    idade: string
    peso: string
    src: string
    title: string
    total_comments: string
}

declare type Comments = {
    comment_ID: string
    comment_agent: string
    comment_approved: string
    comment_author: string
    comment_author_IP: string
    comment_author_email: string
    comment_author_url:string
    comment_content: string
    comment_date: string
    comment_date_gmt: string
    comment_karma: string
    comment_parent: string
    comment_post_ID: string
    comment_type: string
    user_id: string
  }

declare type DataFeedPhoto = {
    comments: Comments[]
    photo: Data
}

declare type commentData = {
    comment_content: string
}