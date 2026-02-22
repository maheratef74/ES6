export class Employee {
    constructor(idValue, name, department, phone) {
        this.ID = Symbol(idValue);
        this.name = name;
        this.department = department;
        this.phone = phone;
    }

    getInfo = () => {
        return `${this.name} is in ${this.department} department and his phone number is ${this.phone}`;
    };
}

