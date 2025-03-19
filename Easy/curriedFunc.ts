function taskChain(task1, task2, task3) {
  console.log(task1, task2, task3);
}

const curriedTaskChain = curry(taskChain);

function curry(func) {
  let taskArr = [];
  return function a(...arg) {
    taskArr = [...taskArr, ...arg];

    if (taskArr.length === func.length) {
      return func(...taskArr);
    }

    return a;
  };
}

curriedTaskChain()()()(1, 2, 3);
curriedTaskChain(1, 2, 3);
curriedTaskChain(1)()(2, 3);
