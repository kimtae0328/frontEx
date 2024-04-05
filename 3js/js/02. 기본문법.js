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
    
    // 자바스크립트는 변수의 리터럴(값 그 자체를 의미)을 확인후 타입이 결정됨
    var text = `name : ${name}, type : ${typeof(name)} <br>`;
    text += `age: ${age}, type : ${typeof(age)} <br>`;
    text += `height: ${height}, type : ${typeof(height)} <br>`;
    text += `check: ${check}, type : ${typeof(check)} <br>`;
    text += `hobbies: ${hobbies}, type : ${typeof(hobbies)} <br>`;
    text += `user: ${user}, type : ${typeof(user)} <br>`;
    text += `fnTest: ${fnTest}, type : ${typeof(fnTest)} <br>`;
    

    box1.innerHTML += text;

}

// 콘솔창에서 함수를 실행 하는 방법
// 함수의 이름을 불러줍니다!! 
// 함수를 실행 하기 위해서는 이름뒤에 ()를 붙여줘야 해요!!
function print(){
    // 변수선언및 초기화
    // 왼쪽의 값을 오른쪽 변수에 저장(대입)
    var a = '안녕';
    
    // 왼쪽의 값을 오른쪽 변수의 값에 연결해서 저장
    a += '하세요'

    // 변수에 값을 출력하는 방법
    //  alert(a) // 메세지창 출력
    //  console.log(a) // 콘솔창 출력

    var id = 'momo';
    
    // 콘솔창에 당신의 id는 (변수id의 값) 입니다
    // 문자열과 변수를 함께 출력 하는 방법
    var msg = '콘솔창에 당신의 id는 ' + id + ' 입니다';

    console.log(msg);
    // 더하기 연산자를 이용해서 출력하는 방법
    console.log('콘솔창에 당신의 id는 ' + id + ' 입니다');
    // 백팃기호와 ${}를 이용해서 출력하는 방법
    console.log(`콘솔창에 당신의 id는 ${id} 입니다`);

    // 클래스값이 box1인 요소를 선택해서 값을 입력 해봅시다
    // (id)님 환영 합니다.
    var box1 = document.querySelector('.box1');
    box1.innerHTML = `${id}님 환영합니다.`;

}

function print1(){
    var name = '미선';
    // id가 box2인 요소에  
    // (name)님 환영합니다. 
    // 라고 출력 하세요
    var box2 = document.querySelector('#box2');

    box2.innerHTML = name + '님 환영합니다.';
}

// 연산자
function plusTest(){
    // 연산자
    // 사칙연산 : +, -, *, /
    // 나머지연산자 : %
    console.log('10+2', 10+2);// 더하기
    console.log('10-2', 10-2);// 빼기
    console.log('10*2', 10*2);// 곱하기 *
    console.log('10/2', 10/2);// 나누기 /
    console.log('10%2', 10%2);// 10을 2로 나눈 나머지값
    if( 10%2 == 0 ){
        console.log('짝수!');
    } else {
        console.log('홀수!');
    }

    // 증감연산자 : ++, --
    // 값을 1씩 증가시켜주거나 감소 시켜 줍니다.
    // 변수의 앞에 위치하는지 뒤에 위치하는지에 따라 조금 달라요!!
    var age = 20;
    // 'age++' : 문자열 출력
    // age++ : 변수의 연산결과
    console.log('age++',age++); // 값이 출력되고 1증가됨 = 문장이 실행되고 값이 증가
    console.log('age', age);
    console.log('++age',++age); // 1증가되고 값이 출력됨 = 값이 증가되고 문장이 실행
    console.log('age',age);

    // ★ 문자열과 숫자의 연산
    // 더하기 연산자는 연산의 기능과 더불어 문자열을 연결해주는 기능
    
    // 문자와 숫자의 더하기 연산의 결과 문자열의 연결이 이뤄진다
    // ''로 감싸면 안에 숫자가 들어 있어도 문자!!
    let test1 = 7 + 7; // 14
    let test2 = '7' + 7; // '77' = 문자와 숫자의 더하기 연산으로 두 값이 연결되어 출력
    let test3 = 7 + '7'; // '77'
    let test4 = 7 + 7 + '7'; // '147'
    let test5 = 7 + '7' + 7; // '777'
    let test6 = '7' + (7 + 7); // '714'

    // 문자와 그외 연산자
    // 숫자로 형변환후 연산됨
    // 형변환 : 다른타입으로 변환 해주는 것
    //          문자를 숫자로 변환
    //          숫자를 문자로 변환
    // 연산전에 문자를 숫자로 형변환 후 연산을 실행
    let test7 = 7 * '7'; // 49
    let test8 = '7' - 3; // 4
    let test9 = '4' / 2; // 2
    let test10 = 4 % '2'; // 0
    let test11 = '3' * '7'; // 21
    // 연산을 하기 위해 숫자로 형변환 하려고 하는데 
    // 문자값이 들어 있는경우 NaN
    let test12 = '3' * 'a'; // NaN : Not a Number"의 약자 - 문자를 숫자로 형변환 하려고 할때 발행하는 오류

    let area = document.getElementById('box3');

    area.innerHTML = `test1 : ${test1} <br>`;
    area.innerHTML += `test2 : ${test2} <br>`;
    area.innerHTML += `test3 : ${test3} <br>`;
    area.innerHTML += `test4 : ${test4} <br>`;
    area.innerHTML += `test5 : ${test5} <br>`;
    area.innerHTML += `test6 : ${test6} <br>`;
    area.innerHTML += `test7 : ${test7} <br>`;
    area.innerHTML += `test8 : ${test8} <br>`;
    area.innerHTML += `test9 : ${test9} <br>`;
    area.innerHTML += `test10 : ${test10} <br>`;
    area.innerHTML += `test11 : ${test11} <br>`;
    area.innerHTML += `test12 : ${test12} <br>`;

}

function opTest(){
    var box4 = document.querySelector('#box4');
    box4.innerHTML = '연산자 테스트';
}