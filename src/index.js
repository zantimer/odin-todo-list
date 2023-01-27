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