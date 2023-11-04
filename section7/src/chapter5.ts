/**
 * 프로미스
 */

import { resolve } from "path";

// 비동기 타입의 결과값의 타입을 지정해줄 수 있다.
// 값을 안 넣어주면 nuknown값으로 지정됨.
const promise = new Promise<number>((resove, reject) => {
  setTimeout(() => {
    // resove(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
