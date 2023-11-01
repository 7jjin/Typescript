/**
 * 클래스
 */

import { stderr } from "process";

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 25,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    // super : 부모 클래스의 생성자들이 호출됨
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  //메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("조진형", "A+", 25, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("홍길동", "A+", 25);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
