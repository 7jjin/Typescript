//enum 타입
// 여러가지 값들에 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUSET"] = 2] = "GUSET";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "조진형",
    role: Role.ADMIN,
    Language: Language.korean
};
const user2 = {
    name: "홍길동",
    role: Role.GUSET
};
const user3 = {
    name: "아무개",
    role: Role.USER
};
console.log(user1, user2, user3);
export {};
