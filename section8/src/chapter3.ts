/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dot" | "cat" | "chicken";

type ColorAnimal = `${Color}-${Animal}`;

// const coloredAnimal : ColorAnimal=""
