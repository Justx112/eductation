/* Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref ? Почему ?

    function makeUser() {
        return {
            name: "John",
            ref: this
        };
    }

let user = makeUser();

alert(user.ref.name);

Ответ: Ошибка
*/

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt('Введите первое число')
        this.b = +prompt('Введите второе число')
    },
    sum() {
        return (this.a + this.b)
    },
    mul() {
        return (this.a * this.b)
    },
}

/* У нас есть объект ladder(лестница), который позволяет подниматься и спускаться:

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
};
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

*/

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this
    }
};