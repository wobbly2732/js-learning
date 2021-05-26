const task3Element = document.getElementById('task-3');

//functions
function myFunc1() {
    alert('This is myFunc1');
}

function myFunc2(name) {
    alert('My name is ' + name);
}

function myFunc3(s1, s2, s3) {
    myResult = s1 + s2 + s3
    return myResult
}

//main
task3Element.addEventListener('click', myFunc1)
myFunc2('Tim')
alert(myFunc3('stringOne', 'stringTwo', 'stringThree'))