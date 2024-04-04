// function 함수명(매개변수,.....){}
function testType(){
    var box1 = document.querySelector('.box1')
    
    // 문자열
    let name = '미선';
    // 숫자
    let age = 25;
    let height = 165.6;
    // 논리값
    let check = false;
    // 배열
    let hobbies = ['축구', '농구', '야구'];
    // 객체
    let user = {
        name:'미선',
        age:25,
        height:165.5,
        id:'ismoon',
        hobbies:['피아노','독서']
    }
    // 함수
    // 두개의 수를 입력 받아서 두수의 합을 반환하는 함수
    // 익명함수(이름이 없는 함수)
    let fnTest = function(num1, num2){
        return num1+num2;
    }

    // 박스에 변수의 타입을 출력 해봅시다
    box1.innerHTML = "<h3>타입테스트</h3>";
    // 변수의 값을 출력 하고 싶을때는 변수이름을 사용 합니다.
    // 문자열과 변수를 연결할때에는 + 연산자가 이용 됩니다.
    // box1.innerHTML += "name : " + name + ", type : " + typeof(name);

    // ``(백팃)기호를 이용하여 변수를 출력 하는 방법 ${변수명, 표현식}
    // 템플릿리터럴 : 문자열 내에서 변수나 표현식을 쉽게 삽입 하는 방법
    
    var text = `name : ${name}, type : ${typeof(name)} <br>`;
    text += `age: ${age}, type : ${typeof(age)} <br>`;
    text += `height: ${height}, type : ${typeof(height)} <br>`;
    text += `check: ${check}, type : ${typeof(check)} <br>`;
    text += `hobbies: ${hobbies}, type : ${typeof(hobbies)} <br>`;
    text += `user: ${user}, type : ${typeof(user)} <br>`;
    text += `fnTest: ${fnTest}, type : ${typeof(fnTest)} <br>`;
    

    box1.innerHTML += text;

}
