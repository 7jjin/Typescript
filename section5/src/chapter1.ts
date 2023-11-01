/**
 * 인터페이스의 확장
 */

type Animal = {
  name: string;
  color: string;
};

// extends 확장개념
// interface는 객체 타입이면 다 확장 가능하다.
interface Dog extends Animal {
  //   name: "Hello"; // 재정의 가능하나 원본 프로퍼티 타입의 서브타입이어야 함.
  isBark: boolean;
}

const dog: Dog = {
  name: "Hello",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장도 가능함.
interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

/// 객체 타입을 다룰때는 타입 별칭 보다는 인터페이스를 사용하는 것이 더 좋음.
