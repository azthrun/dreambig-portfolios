export interface PostList {
    id: string,
    profileId: string,
    posts: { postId: string, postTitle: string, }[],
}

export interface Post {
    id: string,
    profileId: string,
    title: string,
    htmlContents: string,
}