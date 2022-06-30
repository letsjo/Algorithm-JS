// ## 2번. 자연수 뒤집어 더하기

// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "`5+4+3+2+1=15`" 라는 문자열을 리턴합니다.

// ### 제한 조건

// - N의 범위 : 100,000,000 이하의 자연수

// - 아래 답안 포맷을 참고하여 답안을 작성해주시기 바랍니다.


function solution(n){
    let answer = "";        // 문자열 담을 출력 변수
    let sum = 0;            // 합계 변수
    while(n>=1){            // n을 10으로 계속 나눌 것이기 떄문에 1보다 작아지면 멈춰!
        sum += n%10;            // sum에 n을 10으로 나눠서 1의 자리 숫자를 빼서 더해준다.
        answer += (n%10)+"+";       // answer에 n%10 결과값을 넣고 + 기호를 붙여준다.
        n = Math.floor(n/10);       // n을 10으로 나눈 후 소수점을 땐다.
    }
    answer = answer.slice(0,-1)+"="+sum;    
    // answer 마지막에 + 기호가 붙어있기때문에 + 기호를 때고, =과 합계변수 sum을 붙여준다.
    
    return answer
}
console.log(solution(718253))