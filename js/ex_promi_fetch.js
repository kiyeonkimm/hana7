//특정 유저의 정보와 게시글 목록을 리턴하는 함수를 작성하시오.
// - 예) 1번 유저의 정보: https://jsonplaceholder.typicode.com/users/1
// - 예) 1번 유저의 글목록: https://jsonplaceholder.typicode.com/posts?userId=1

const URL = "https://jsonplaceholder.typicode.com";

const jpfetch = (url) => fetch(url).then((res) => res.json());

const getUserInfo = (userId) => jpfetch(`${URL}/users/${userId}`);

const getPostsByUserid = (userId) => jpfetch(`${URL}/posts?userId=${userId}`);

const getUserPosts = async (userId) => {
  const { id, name } = await getUserInfo(userId);
  const posts = await getPostsByUserid(userId);
  //console.log("🚀 ~ userInfo:", userId);

  return {
    id,
    name,
    posts: posts.map(({ id, title, body }) => ({ id, title, body })),
  };
};

(async () => {
  try {
    const result = await getUserPosts(1);
    console.log(result);
  } catch (err) {
    console.log("🚀 ~ Error:", err);
  }
})();

//console.log(await getUserPosts(1));
//   ⇒ 다음 형식으로 리턴 (format 준수!)
//   {
//     id: 유저ID,
//     name: 유저명,
//     posts: [
//        {id: 글ID, title: 글제목, body: 글내용}, {...
//     ]
//   }
