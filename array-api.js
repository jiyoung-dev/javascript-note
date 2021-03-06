// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.toString());  // apple,banana,orange
  console.log(fruits.join()); // apple,banana,orange
  console.log(fruits.join(' '));  // apple banana orange
}

// Q2. make an array out of a string
{
  const fruits = '๐, ๐ฅ, ๐, ๐';
  console.log(fruits.split(',')); // [ '๐', ' ๐ฅ', ' ๐', ' ๐' ]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));  // index 2 ๋ถํฐ ๋ง์ง๋ง๊น์ง ๋ฐํ 
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 ๐
{ 
  // score๊ฐ 90์ ์ธ์ง ํ์ธํ๋ ํจ์๊ฐ students์ ๋ชจ๋  ์์์์ ์คํ๋๋ฉฐ, boolean ๋ฐํ. 
  // array.find(): ์ฝ๋ฐฑํจ์ ์กฐ๊ฑด์ ๋ง์กฑํ๋(true์ด๋ฉด ์ข๋ฃ) array์ ์ฒซ๋ฒ์งธ ์์๋ฅผ ๋ฐํ. 
  const answer5 = students.find(element => element.score === 90); 
  console.log(answer5);  // Student { name: 'C', age: 30, enrolled: true, score: 90 }
}

// Q6. make an array of enrolled students
{
  const answer6 = students.filter(element => element.enrolled);
  console.log(answer6);
  /*
  [
    Student { name: 'A', age: 29, enrolled: true, score: 45 },
    Student { name: 'C', age: 30, enrolled: true, score: 90 },
    Student { name: 'E', age: 18, enrolled: true, score: 88 }
  ]
  */
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const answer7 = students.map(element => element.score);
  console.log(answer7);
}

// Q8. check if there is a student with the score lower than 50
{
  const answer8 = (elememt) => elememt.score < 50;
  console.log(students.some(answer8));  // true
}

// Q9. compute students' average score
{
  const score_list = students.map(element => element.score);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = score_list.reduce(reducer);
  console.log(sum / score_list.length);  // 73.8
}
// 9๋ฒ ๋ค๋ฅธํ์ด 
{
  const result9 = students.reduce((prev, curr) => prev + curr.score, 0);  // ์ด๊ธฐ๊ฐ์ 0์ผ๋ก ์ค์ 
  console.log(result9 / students.length);  // 73.8 
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const score_list = students.map(element => element.score);
  const answer10 = score_list.join();
  console.log(answer10);  
}
// 10๋ฒ ๋ค๋ฅธํ์ด (๊ฐ๋์ฑ up)
{
  const answer10 = students
    .map((student) => student.score)
    .join();
  console.log(answer10);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // ์ค๋ฆ์ฐจ์ ์ ๋ ฌ 
  // Array.prototype.sort ๋ ์ ๋์ฝ๋ ์ฆ, ๋ฌธ์์ด ๊ธฐ์ค์ผ๋ก ์ค๋ฆ์ฐจ์ ์ ๋ ฌ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ค.
  // ์ซ์์์๋ฅผ ์ ๋ ฌํ๋ ค๋ฉด sort ๋ฉ์๋์ ์ ๋ ฌ์์๋ฅผ ์ ์ํ๋ ๋น๊ตํจ์๋ฅผ ์ธ์๋ก ์ ๋ฌํด์ผํจ.
  // ๋น๊ตํจ์์ ๋ฐํ๊ฐ์ด 0๋ณด๋ค ์๋ค๋ฉด ์ฒซ๋ฒ์งธ ์ธ์๋ฅผ ์ ๋ ฌํ๊ณ , 0์ด๋ฉด ์ ๋ ฌํ์ง ์์ผ๋ฉฐ 0๋ณด๋ค ํฌ๋ฉด ๋๋ฒ์งธ ์ธ์๋ฅผ ์ ๋ ฌํ๋ค.
  const score_list = students.map(element => element.score);  // [45, 80, 90, 66, 88]
  const answer11 = score_list.sort((a,b) => a-b); // ์์์๋ถํฐ ์์ ๋๊ฐ์ฉ ๋น๊ตํ๋๊ฒ์ด๋ค. 45-80 < 0 ์ด๋ฏ๋ก ์ฒซ๋ฒ์งธ ์์์ธ 45๋ถํฐ ์ ๋ ฌํ๊ณ , ์ด๋ฅผ ๋ฐ๋ณตํ๋ฉด ์ค๋ฆ์ฐจ์ ์ ๋ ฌ์ด ๋๋ค.
  // ๋ด๋ฆผ์ฐจ์์ ๋ฐ๋๋ก, b-a ์ฐ์ฐ์ ์ํํ๋ ํจ์๋ฅผ ๋ง๋ค์ด์ฃผ๋ฉด ๋๋ค. 
  console.log(answer11.join());
}
// ๊ฐ๋์ฑ up!
{
  const answer11 = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(answer11);
}
