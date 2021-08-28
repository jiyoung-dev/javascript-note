// 모던 자바스크립트 p748

/**
 * Element.prototype.classList 프로퍼티는 class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다. 
 * add(className): 인수로 전달한 문자열을 class 어트리뷰트로 추가한다. 
 * remove(className): 인수로 전달한 문자열과 일치하는 클래스를 class 어트리뷰트에서 제거한다. 만약, 없다면 무시된다. 
*/

const box = document.querySelector('.box');
console.log(box.classList);  // DOMTokenList ["box", value: "box"]

// add(className)
box.classList.add('red-box');
box.classList.add('yellow-box');
/*
add 메서드를 사용하면 인수로 전달하는 클래스이름이 토큰 리스트에 추가되는것이다. 
따라서 기존에 있던 클래스 위에 새로운 클래스가 추가됨. 
DOMTokenList ["box", value: "box"] 는 같지만, 마지막 yellow-box 클래스를 추가할때 value는 value: "box red-box yellow-box" 이다. 
*/

// remove(className)
box.classList.remove('yellow-box');
box.classList.remove('red-box');

/**
 * item(index): 인수로 전달한 index에 해당하는 클래스를 class 어트리뷰트에서 반환한다. 
 * contains(className): 인수로 전달한 문자열과 일치하는 클래스가 있는지 확인한다. 
 * replace(oldClassName, newClassName): class 어트리뷰트에서 첫번째 인수로 전달한 문자열을 두번째 인수로 전달한 문자열로 반환한다. 
 * toggle(className): class 어트리뷰트에 인수로 전달한 문자열과 일치하는 클래스가 존재하면 제거하고, 존재하지 않으면 추가한다. 
 * 
*/

box.classList.add('text-white');
console.log(box.classList);  // DOMTokenList(2) ["box", "text-white", value: "box text-white"]

console.log(box.classList.item(1));  // text-white
console.log(box.classList.contains('box'));  // true
console.log(box.classList.replace('box', 'red-box'));  // true (변경됨)
console.log(box.classList.toggle('red-box'));  // 존재하는 클래스이므로 제거 
console.log(box.classList.toggle('box'));  // 존재하지 않는 클래스이므로 추가 
console.log(box.classList);
