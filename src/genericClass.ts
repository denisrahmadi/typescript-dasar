/**
    -generic class gunanya buat supaya class nya ga bergantung dengan type data yang diberikan sehingga class nya lebih dinamis
 */

class List<T> {
    private data: T[]

    constructor(...elements: T[]){
        this.data = elements
    }

    add(element: T): void{
        this.data.push(element)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data
    }
}

let numbers = new List<number>(1, 2, 3)
numbers.add(4)
numbers.addMultiple(4, 5, 6)
console.log(numbers.getAll());

let random = new List<number | string>("a", "b", 2)
random.add("deeenn")
random.add(890)
random.addMultiple(123, "fsdfsdf")
console.log(random.getAll());
