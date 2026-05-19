function pagination(posts, page, limit = 10) {
  const pageCount = Math.ceil(posts.length / limit);
  if (!page) page = 1;
  if (page > pageCount) page = pageCount;

  return {
    page,
    pageCount,
    posts: posts.slice(page * limit - limit, page * limit),
  };
}
module.exports = pagination;
