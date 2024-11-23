export interface PostList {
    id: string,
    profileId: string,
    posts: Post[],
}

interface Post {
    id: string,
    title: string,
    link: string,
    dateAdded: string,
}