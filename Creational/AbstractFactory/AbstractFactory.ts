// 動物
abstract class Animal {

    appearance: IPetAppearance;
    clothes: IClothes;
    shoes: IShoes;

    constructor(appearance: IPetAppearance) {
        this.appearance = appearance;
        this.clothes = this.appearance.createClothes();
        this.shoes = this.appearance.createShoes();
    }

    /**
     * 取得類型
     * @returns animals
     */
    abstract getType(): animals;

    /**
     * 取得衣服尺寸
     * @returns size
     */
    getClothesSize() {
        return this.clothes.getSize();
    }
    
    /**
     * 取得鞋子尺寸
     * @returns size
     */
    getShoesSize() {
        return this.shoes.getSize();
    }
}

// 貓
class Cat extends Animal {   

    type: animals;

    constructor(appearance: IPetAppearance) {
        super(appearance);
        this.type = animals.cat;
    }

    getType() {
        return this.type;
    }
}

// 狗
class Dog extends Animal {

    type: animals;

    constructor(appearance: IPetAppearance) {
        super(appearance);
        this.type = animals.dog;
    }

    getType() {
        return this.type;
    }
}

// 寵物外觀(抽象工廠之2)
interface IPetAppearance {

    /**
     * 創建衣服
     * @returns IClothes
     */
    createClothes(): IClothes;

    /**
     * 創建鞋子
     * @returns IShoes
     */
    createShoes(): IShoes;
}

// 貓外觀
class CatAppearance implements IPetAppearance {

    createClothes(): IClothes {
        return new CatClothes();
    }

    createShoes(): IShoes {
        return new CatShoes();
    }
}

// 狗外觀
class DogAppearance implements IPetAppearance {
    
    createClothes(): IClothes {
        return new DogClothes();
    }

    createShoes(): IShoes {
        return new DogShoes();
    }
}

// 普遍方法
interface ICommon {

    /**
     * 取得尺寸
     * @returns size
     */
    getSize(): size;
}

// 衣服(抽象化)
interface IClothes extends ICommon {
}

// 貓衣服
class CatClothes implements IClothes {

    size: size;

    constructor() {
        this.size = size.XS;
    }

    getSize() {
        return this.size;
    }
}

// 狗衣服
class DogClothes implements IClothes {

    size: size;

    constructor() {
        this.size = size.XL;
    }

    getSize() {
        return this.size;
    }
}

// 鞋子(抽象化)
interface IShoes extends ICommon {
}

// 貓鞋子
class CatShoes implements IShoes {

    size: size;

    constructor() {
        this.size = size.XXS;
    }

    getSize() {
        return this.size;
    }
}

// 狗鞋子
class DogShoes implements IShoes {

    size: size;

    constructor() {
        this.size = size.XL;
    }

    getSize() {
        return this.size;
    }
}

// 動物收容所概念(抽象工廠之1)
abstract class AbstractAnimalShelter {   

    /**
     * 取得動物
     * @returns Animal
     */
    abstract getAnimal(): Animal;

    /**
     * 領養動物
     * @returns Animal
     */
    adoptAnimal(): Animal {
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
     * @returns AnimalShelter
     */
    getRealAnimalShelter(): AbstractAnimalShelter {
        return this.animalShelter;
    }
}

// 貓收容所
export class CatShelter extends AbstractAnimalShelter {

    getAnimal(): Animal {
        return new Cat(new CatAppearance());
    }
}

// 狗收容所
export class DogShelter extends AbstractAnimalShelter {

    getAnimal(): Animal {
        return new Dog(new DogAppearance());
    }
}

// 動物枚舉
export enum animals { 
    cat,
    dog
}

// 尺寸大小
export enum size {
    XXS,
    XS,
    S,
    M,
    L,
    XL,
    XXL
}