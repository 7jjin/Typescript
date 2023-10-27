// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar:any = 10;
anyVar = "hello";
anyVar = false;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();
// 런타임 때 오류가 발생함. anyVar는 마지막에 함수로 정의 되었지만 검사를 다 통과하고 런타임에 오류가 발생함. 따라서 typescript의 이점을 다 포기하는 것임

let num: number = 10;
num= anyVar;


// unknow
let unKnownVar: unknown;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () =>{};

//unKnownVar.toUpperCase(); // 실해되지 않음

// 정제해서 넣을 수 있음
if(typeof unKnownVar === "number"){
    num = unKnownVar;
}
