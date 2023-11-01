/**
 * 접근 제어자
 * => public private protected
 */

// public -> 어디서든 사용가능
// private -> 오직 클래스 내에서만 사용가능
// protected -> 파생 클래스까진 사용할 수 있음.
class Employee {
  //필드
  private name: string;
  protected age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const empolyee = new Employee("조진형", 25, "개발자");
// empolyee.name = "홍길동";
// empolyee.age = 30;
empolyee.position = "디자이너";
