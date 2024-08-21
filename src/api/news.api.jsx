const NewsApi = {
    all: '/news',
    byId: '/news/show/:id',
    bySlug: '/news/slug/:slug',
    categories: '/news/category',
    random: '/news/random',
    comments: '/news/:id/comments',
    commentPost: '/news/:id/comment',
    commentDestroy: '/news/:newsId/comment/:commentId',
}

export default NewsApi;