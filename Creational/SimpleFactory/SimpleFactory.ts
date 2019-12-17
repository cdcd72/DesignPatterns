// 動物
interface IAnimal {
    /**
     * 取得類型
     * @returns animals
     */
    getType(): animals;
}

// 貓
class Cat implements IAnimal {   

    type: animals;   

    constructor() {
        this.type = animals.cat;
    }

    getType() {
        return this.type;
    }
}

// 狗
class Dog implements IAnimal {

    type: animals;  

    constructor() {
        this.type = animals.dog;
    }

    getType() {
        return this.type;
    }
}

// 動物枚舉
export enum animals { 
    cat,
    dog
}

// 動物收容所
export class AnimalShelter {
    /**
     * 領養動物
     * @param  {animals} animalType
     * @returns Animal
     */
     adoptAnimals(animalType: animals): IAnimal {
        switch (animalType) {
            case animals.cat:
                return new Cat();    
            case animals.dog:
                return new Dog();
        }
    }
}