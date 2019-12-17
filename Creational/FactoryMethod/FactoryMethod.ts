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

// 動物收容所概念(抽象化)
abstract class AbstractAnimalShelter {   

    /**
     * 取得動物
     * @returns IAnimal
     */
    abstract getAnimal(): IAnimal;

    /**
     * 領養動物
     * @returns IAnimal
     */
    adoptAnimal(): IAnimal {
        return this.getAnimal();
    }
}

// 動物收容所
export class AnimalShelter {

    animalShelter: AbstractAnimalShelter;

    /**
     * 動物收容所建構子
     * @param  {AbstractAnimalShelter} animalShelter
     */
    constructor(animalShelter: AbstractAnimalShelter) {
        this.animalShelter = animalShelter;
    }

    /**
     * 取得實際動物收容所
     * @returns IAnimalShelter
     */
    getRealAnimalShelter(): AbstractAnimalShelter {
        return this.animalShelter;
    }
}

// 貓收容所
export class CatShelter extends AbstractAnimalShelter {
    getAnimal(): IAnimal {
        return new Cat();
    }
}

// 狗收容所
export class DogShelter extends AbstractAnimalShelter {
    getAnimal(): IAnimal {
        return new Dog();
    }
}

// 動物枚舉
export enum animals { 
    cat,
    dog
}