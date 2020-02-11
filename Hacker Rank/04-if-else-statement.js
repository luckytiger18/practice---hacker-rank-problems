// if 25 < score <= 30, then grade = a
// if 20 < score <= 25, then grade = b
// if 15 < score <= 20, then grade = c
// if 10 < score <= 15, then grade = d
// if 5 < score <= 10, then grade = e
// if 0 <= score <= 5, then grade = f


function getGrade(score) {
  let grade;
  // Write your code here
   if (score > 25 && score <= 30) {
    return 'A'
  } else if (score > 20 && score <= 25) {
    return 'B'
  } else if (score > 15 && score <= 20) {
    return 'C'
  } else if (score > 10 && score <= 15) {
    return 'D'
  } else if (score > 5 && score <= 10) {
    return 'E'
  } else if (score > 0 && score <= 5) {
    return 'F'
  }
  return grade;
}
