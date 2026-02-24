import { Employee } from './employee.js';

class Manager extends Employee {
    constructor(idValue, name, department, phone) {
        super(idValue, name, department, phone);
    }

    showDepartment = () => {
        const message = `${this.name} is the manager of ${this.department} department`;
        console.log(message);
        return message;
    };
}

const runTask = () => {
    const employee = new Employee(1, 'maher', 'full-stack devleoper', '01205397285');

    const manager = new Manager(2, 'ahmed ehab', 'IT', '01112345678');

    console.log("Employee Info");
    console.log(employee.getInfo());

    console.log("\nManager Info");
    manager.showDepartment();

    console.log("\nManager Info");
    console.log(manager.getInfo());
};

runTask();
