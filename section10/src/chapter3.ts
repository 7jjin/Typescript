/**
 * Exclude<T,U>
 * -> 제외하다. 추방하다.
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T,U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
