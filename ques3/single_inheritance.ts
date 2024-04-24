class Dog{
    bark() :void{
        console.log("Barking");
    }
}

class BabyDog extends Dog{
    eat() : void{
        console.log("Moving");
    }
}

class Cat extends Dog{
    meow() : void{
        console.log("Sleeping")
    }
}

let baby = new BabyDog();
baby.bark();
baby.eat();

let babycat = new Cat();
babycat.bark();
babycat.meow();


