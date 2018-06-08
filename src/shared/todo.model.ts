//defining Todo class
export class Todo {
    todoItems;

    constructor(){
        this.todoItems = [
            new todoItem("Take out the trash", true),
            new todoItem("Clean the backyard", true),
            new todoItem("Book appointment with dentist", false),
            new todoItem("Go out for jogging to the park", true)]
    }
}

//defining todoItem class
export class todoItem{
    constructor(private task :string, private status? :boolean){}
}

