// 모던 자바스크립트 p744

/**
 * 1. data 어트리뷰트의 값은 HTMLElement.dataset 프로퍼티로 취득이 가능하다. 
 * 2. dataset 프로퍼티는 HTML 요소의 모든 data 어트리뷰트의 정보를 제공하는 DOMStringMap 객체를 반환.
 * 3. DOMStringMap 객체는 data 어트리뷰트의 data-접두사 다음에 붙인 이름을 camelCase로 변환한 프로퍼티를 가진다.
*/

// user-id가 123인 사람의 role을 반환
const users = [...document.querySelector('.users').children];
const user = users.find(user => user.dataset.userId === '123');
console.log(user.dataset.role); // admin

// user-id가 123인 사람의 role을 변경 
user.dataset.role = 'subscriber';
console.log(user.dataset); // DOMStringMap {userId: "123", role: "subscriber"}
