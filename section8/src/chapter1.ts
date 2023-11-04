/**
 * keyof 연산자
 */

//객체 타입에 적용하는 연산자

interface Person {
  name: string;
  age: number;
}

// 어떤 객체의 프로퍼티의 키들을 union타입으로 해준다. 예 "name"|"age"
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "조진형",
  age: 25,
};

getPropertyKey(person, "name");
