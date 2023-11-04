/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let KeyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let KeyPair2: KeyPair<number, string> = {
  key: 2,
  value: "he",
};

/**
 * 인덱스 시그니쳐
 */

interface NumbberMap {
  [key: string]: number;
}

let nubmerMap1: NumbberMap = {
  key: 123,
  key2: -135,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developter";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 타입 좁히기 필요없음.
  //   if (user.profile.type !== "student") {
  //     console.log("잘못 오셨습니다.");
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}
// goToSchool(developerUser);

const developerUser: User<Developer> = {
  name: "조진형",
  profile: {
    type: "developter",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "성결대학교",
  },
};
