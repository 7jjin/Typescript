/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // 함수 오버로딩을 하려면 호출 시그니쳐를 사용해야 한다. 호출 시그니쳐??
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// 인터페이스는 그 자체에 union이나 intersection 타입을 붙일 수 없기 때문에 타입별칭에 추가하거나 타입 주석에 추가해야 한다.
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person | number = {
  name: "조진형",
  sayHi: function () {
    console.log("hi");
  },
};

// person.name = "홍길동";

// 함수 오버로딩
person.sayHi();
person.sayHi(1, 2);
