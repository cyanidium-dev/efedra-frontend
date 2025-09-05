export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    "image": image.asset->url,
    direction,
    description,
    content
  }
`;
