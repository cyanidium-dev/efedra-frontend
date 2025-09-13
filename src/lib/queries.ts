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

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
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

export const allServicesQuery = `
  *[_type == "service"] | order(order asc) {
    title,
    "slug": slug.current,
    category,
    order,
    "categoryImage": categoryImage.asset->url,
    "mainImage": mainImage.asset->url,
    shortDescription,
    procedureDescription {
      text,
      "images": images[].asset->url,
      info
    },
    recommended[]{
      "image": image.asset->url,
      text
    },
    howItGoes {
      "image": image.asset->url,
      steps {
        title,
        description
      }
    },
    advantages[]{
      "icon": icon.asset->url,
      title,
      text
    },
    contraindications {
      "image": image.asset->url,
      items
    },
    types {
      title,
      list[]{
        "image": image.asset->url,
        title,
        text,
        details
      }
    },
    pricing {
      link
    }
  }
`;
