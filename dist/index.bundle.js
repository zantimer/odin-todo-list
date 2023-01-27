/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//this is a controller all else to be moved

//main maker logic - todos

const todo = (title, description, deadline, priority) => {
    
    const proto = {
        type: 'Todo',
        // title: '',
        // description: '',
        // deadline: undefined,
        // priority: undefined,
    }

    const object =  Object.assign(Object.create(proto),
        {title: title,
        description: description,
        deadline: deadline,
        priority: priority}
        );

    return {object, proto};
};

const test = todo('ay', 'bay', 'today', '0');
const test1 = todo('nay', 'jay', 'not today', '1');
const test2 = todo('say', 'hay', 'yestertoday', '2');



console.log(Object.keys(test));

console.log(test.object);
console.log(test1.object.title);
console.log(test2.priority);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoaXMgaXMgYSBjb250cm9sbGVyIGFsbCBlbHNlIHRvIGJlIG1vdmVkXG5cbi8vbWFpbiBtYWtlciBsb2dpYyAtIHRvZG9zXG5cbmNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHkpID0+IHtcbiAgICBcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZTogJ1RvZG8nLFxuICAgICAgICAvLyB0aXRsZTogJycsXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgLy8gZGVhZGxpbmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gcHJpb3JpdHk6IHVuZGVmaW5lZCxcbiAgICB9XG5cbiAgICBjb25zdCBvYmplY3QgPSAgT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSxcbiAgICAgICAge3RpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eX1cbiAgICAgICAgKTtcblxuICAgIHJldHVybiB7b2JqZWN0LCBwcm90b307XG59O1xuXG5jb25zdCB0ZXN0ID0gdG9kbygnYXknLCAnYmF5JywgJ3RvZGF5JywgJzAnKTtcbmNvbnN0IHRlc3QxID0gdG9kbygnbmF5JywgJ2pheScsICdub3QgdG9kYXknLCAnMScpO1xuY29uc3QgdGVzdDIgPSB0b2RvKCdzYXknLCAnaGF5JywgJ3llc3RlcnRvZGF5JywgJzInKTtcblxuXG5cbmNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHRlc3QpKTtcblxuY29uc29sZS5sb2codGVzdC5vYmplY3QpO1xuY29uc29sZS5sb2codGVzdDEub2JqZWN0LnRpdGxlKTtcbmNvbnNvbGUubG9nKHRlc3QyLnByaW9yaXR5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=