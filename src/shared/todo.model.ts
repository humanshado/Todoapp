export class Todo {
    todoItems;

    constructor(){
        this.todoItems = [
            new todoItem("Take out the trash", true),
            new todoItem("Clean the backyard", false),
            new todoItem("Book appointment with dentist", false),
            new todoItem("Go out for jogging to the park", true)]
    }
}

export class todoItem{
    task :string;
    status :boolean;
    
    constructor(task, status){
        this.task = task;
        this.status =status;
    }
}