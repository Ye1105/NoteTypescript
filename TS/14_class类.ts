
type gender = '男' | '女' | '中性'

class Person {
    readonly age: number
    name: string

    constructor(age: number, name: string) {
        this.name = name
        this.age = age
    }

    private _run_ = () => {
        console.log('Person 内部辅助函数')
    }

    protected write = (gender: gender) => {

        console.log(`welcome ${this.name},age ${this.age},gender ${gender}`)
    }
}

let p = new Person(12, 'ye')

//p.write('中性')


class Student extends Person {

    school: string

    constructor(age: number, name: string, school: string) {
        super(age, name)
        this.school = school
    }

    writeSchool = (gender: gender) => {
        this.write(gender)
        console.log("school:", this.school)
    }

}

const stu = new Student(28, 'yejiancong', 'xiaoshunxiaoxue')
stu.writeSchool('男')


/* -------------------------------------------- */

interface Singable {
    sing(): void
}

class Human implements Singable {
    sing(): void {
        console.log("nihao")
    }
}

let man = new Human()
man.sing()



interface IPerson {
    readonly name: string
}


let obj: IPerson = {
    name: 'jack'
}

//obj.name='daming'


let ob: { readonly name?: string } = {}

//ob.name='daming'