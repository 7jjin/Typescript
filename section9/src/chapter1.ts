/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 조건부 타입이 유니온 타입이면 각각 한번씩 조건에 들어간다.
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number>  |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

/**
 * 실용적인 예제
 */

// U에 해당하는 타입을 제외한 다른 타입만 추출
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number,string> |
// Exclude<string,string> |
// Exclude<boolean,string>

// 2단계
// number |
// never |
// boolean

// 결과에 never가 포함되 있으면 never는 사라진다.

// 결과
// number | boolean

// U에 해당하는 타입만 골라서 추출하기
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
