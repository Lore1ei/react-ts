class Todo {
    id: string;
    text: string;
    //ss
    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;