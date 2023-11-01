/**
 * 선언 합침
 */

// 중복 선언할 수 있다.
interface Person {
  name: string;
}

interface Person {
  // name:"Hello"; // 재선언 할때는 반드시 같은 타입으로 선언해줘야 한다. (확장과 다름!!)
  age: number;
}

const person: Person = {
  name: "",
  age: 25,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
