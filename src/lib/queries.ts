export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    "image": image.asset->url,
    direction,
    description,
    content,
    "createdAt": _createdAt
  }
`;

export const allDoctorsQuery = `*[_type == "doctor"] | order(order asc) {
 "id":_id,
  name,
  photo {
    asset->{
      _id,
      url
    },
    crop,
    hotspot
  },
  position,
  startYear,
  direction,
  description,
  order
}`;
