
export interface ITask {
    title: string;
    completed: boolean;
}

export class Task implements ITask {
    title;
    completed = false;

    constructor(title: string) {
        this.title = title;
    }
}
