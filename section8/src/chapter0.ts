/**
 * 인덱스드 엑세스 타입
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

// 원하는 객체의 프로퍼티 요소들만 뽑아올 수 있음.
// function printAuthorInfo(author: PostList["author"]) {
//   console.log(`${author.name} - ${author.id}`);
// }

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// const post: Post = {
// title: "게시글 제목",
// content: "게시글 본문",
// author: {
//     id: 1,
//     name: "조진형",
// },
// };

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "조진형",
  },
};
