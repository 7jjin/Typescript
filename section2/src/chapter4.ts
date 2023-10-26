// 타입 별칭
type User = {
    id:number
    name:string
    nickname:string,
    birth:string,
    bio:string,
    location:string,
}

function func(){
    // 타입은 해당 스코프 내에서만 사용할 수 있다.
    // 이 함수 내에서는 아래의 User가 사용된다.
    type User={}
}

let user:User = {
    id: 1,
    name:"조진형",
    nickname:"jin",
    birth:"1999.06.12",
    bio:"안녕하세요",
    location:"수원시"
}

let user2:User = {
    id: 1,
    name:"조진형",
    nickname:"jin",
    birth:"1999.06.12",
    bio:"안녕하세요",
    location:"수원시"
}

// 인덱스 시그니쳐
type CountryCodes = {
    [key : string] : string;
}

let countryCodes: CountryCodes = {
    korea:"ko",
    UnitedState:"us",
    UnitedKingdom:"uk"
}

type CountryNumberCodes = {
    [key:string] : number;
    // 반드시 넣어줘야 하는 객체가 있으면 따로 추가해 줘도 된다. 단 반드시 인덱스 시그니쳐의 타입과 같아야 한다.
    Korea : number;     
}

let countryNumberCodes:CountryNumberCodes = {
    Korea:410,
}