class Customer {
    id: number;
    name: string;
    sales: number;

    constructor(id: number = 0, name: string = " ", ) {
        this.id = id;
        this.name = name;
        this.sales = 0;
    }
    log( ){
        console.log(`${this.id} | ${this.name} | ${this.sales}`);
    }
}