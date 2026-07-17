const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = [];

function menu() {
  console.log("\n--- To-Do App ---");
  console.log("1. Add Todo");
  console.log("2. View Todos");
  console.log("3. Mark Todo As Done");
  console.log("4. Delete Todo");
  console.log("5. Exit");
  rl.question("Choose an option (1-5): ", action);
}

function action(op) {
  op = Number(op); 

  switch (op) {
    case 1:
      addTodo();
      break;
    case 2:
      viewTodos();
      break;
    case 3:
      markDone();
      break;
    case 4:
      deleteTodo();
      break;
    case 5:
      console.log("Exiting the App...");
      rl.close();
      break;
    default:
      console.log("Enter a valid choice");
      menu();
  }
}

function addTodo() {
  rl.question("Enter Todo: ", function (todoText) {
    if (todoText.trim() === "") {
      console.log("Todo can't be empty.");
    } else {
      todos.push({ task: todoText.trim(), done: false });
      console.log("Todo Added!");
    }
    menu();
  });
}

function viewTodos() {
  if (todos.length === 0) {
    console.log("Todo list is empty!");
  } else {
    console.log("\nYour Todos:");
    todos.forEach((todo, index) => {
      const status = todo.done ? "✅ Done" : "❌ Undone";
      console.log(`${index + 1}. ${todo.task} - ${status}`);
    });
  }
  menu();
}

function markDone() {
  if (todos.length === 0) {
    console.log("No tasks to mark done.");
    return menu();
  }

  rl.question("Enter the number of the task to mark as done: ", function (num) {
    let index = Number(num) - 1;

    if (index >= 0 && index < todos.length) {
      if (todos[index].done) {
        console.log("Task is already marked as done!");
      } else {
        todos[index].done = true;
        console.log("Task marked as done!");
      }
    } else {
      console.log("Invalid task number.");
    }
    menu();
  });
}

function deleteTodo() {
  if (todos.length === 0) {
    console.log("No tasks to delete.");
    return menu();
  }

  rl.question("Enter the number of the task to delete: ", function (num) {
    let index = Number(num) - 1;

    if (index >= 0 && index < todos.length) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted: ${deleted[0].task}`);
    } else {
      console.log("Invalid task number.");
    }
    menu();
  });
}

// Start the app
menu();
