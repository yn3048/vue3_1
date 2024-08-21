import { posts } from '.';
// axios

// 목록
export function getPosts(params) {
  return posts.get('/', { params });
}

// 글보기
export function getPostById(id) {
  //console.log(typeof id);
  return posts.get(`/${id}`);
}

// 글등록
export function createPost(data) {
  return posts.post('', data);
}

// 글수정
// put: 글 전체 수정할때 사용
// patch: 글 부분 수정할 때 사용
// 부분수정인데 put을 사용할 경우 데이터 누락 버그 발생**
// export function updatePost(id, data) {
//   return posts.put(`/${id}`, data);
// }

export function updatePost(id, data) {
  return posts.patch(`/${id}`, data);
}

// 글삭제
export function deletePost(id) {
  return posts.delete(`/${id}`);
}
