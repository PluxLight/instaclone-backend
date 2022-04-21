import { gql } from "apollo-server";

export default gql`
  type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    hashtags: [Hashtag]
    createdAt: String!
    updatedAt: String!
  }
  type Hashtag {
    id: Int!
    hashtag: String!
    photos: [Photo]
    createdAt: String!
    updatedAt: String!
  }
`;

// 노마드코더는 보통 한 모듈에 모든 것을 포함시켰다가
// 이후 다른 모델에도 사용되는 것이 있음을 알게되면
// 그 후 독립적인 모듈로 분리