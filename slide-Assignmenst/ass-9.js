// #### Create Students Array

/*1. setup students array with 5 students
{
  id: 1,
  name: 'peter',
  score: 80,
  favoriteSubject: 'math',
},
*/
const students = [
    { id: 1, name: 'peter', score: 80, favoriteSubject: 'math' },
    { id: 2, name: 'john', score: 75, favoriteSubject: 'science' },
    { id: 3, name: 'mary', score: 90, favoriteSubject: 'english' },
    { id: 4, name: 'jane', score: 85, favoriteSubject: 'history' },
    { id: 5, name: 'tom', score: 60, favoriteSubject: 'art' },
  ];

// #### updatedStudents

// 1. add role: 'student' property to each object using MAP method
const updatedStudents = students.map(student => {
  return { ...student, role: 'student' };
});

// 2. assign to 'updatedStudents' variable and log
console.log(updatedStudents);

// #### highScores

// 1. filter array and return only scores >= 80
const highScores = updatedStudents.filter(student => student.score >= 80)

// 2. assign to 'highScores' variable and log
console.log("High Scoring Students:", highScores);

// #### specificId

// 1. find specific id in array
const specificId = updatedStudents.find(student => student.id === 3);

// 2. assign to 'specificId' variable and log
console.log("Student with ID 3:", specificId);