export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    "image": image.asset->url,
    direction,
    excerpt,
    content
  }
`;
