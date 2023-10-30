// object
let user: {
  id?: number; // ?표의 의미: 있을 수도 있고 없을 수도있다.(선택적 프로퍼티)
  name: string;
} = {
  id: 1,
  name: "조진형",
};

// 객체 리터럴 타입
let dog: {
  name: "돌돌이";
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apikey: string; // readonly = 값이 절때 바뀌면 안되는 프로퍼티에 추가
} = {
  apikey: "MY API KEY",
};
