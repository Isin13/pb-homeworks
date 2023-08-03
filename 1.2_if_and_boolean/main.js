// 1
const userName = 'admin';
const balance = 11;

if (userName === 'admin'){
  console.log('administrator');
} else if (userName === '') {
  console.log('visitor');
}else if ((userName !== "admin" || userName === '') && balance > 5000) {
  console.log(`вип клиент ${userName}`);
}else if ((userName !== "admin" || userName === '') && balance > 1000) {
  console.log(`пакупальщик ${userName}`);
}else if ((userName !== "admin" || userName === '') && balance > 100) {
  console.log(`нищеброд ${userName}`);
}else{
  console.log('пшел вон отсель')
}







