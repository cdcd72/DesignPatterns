import { ResidentialBuilding, Bank, CoffeeShop, Buildings, InsurancePolicyExportVisitor } from '../Visitor';

describe('Insurance salesperson scenario...', () => {

  // 銷售保單(依據建築物而有不同)
  it('Sale insurance by building scenario ...', () => {

    // 3 種建築物 - Leaf
    const residentialBuilding = new ResidentialBuilding(1000, "XXXX residential building", "No. 999, Ln. 999, Jianxing Rd., Sanmin Dist., Kaohsiung City 999, Taiwan (R.O.C.)"); 
    const bank = new Bank(2000, "XXXX bank", "No. 777, Ln. 777, Jianxing Rd., Sanmin Dist., Kaohsiung City 777, Taiwan (R.O.C.)"); 
    const coffeeShop = new CoffeeShop(5000, "XXXX coffee shop", "No. 666, Ln. 666, Jianxing Rd., Sanmin Dist., Kaohsiung City 999, Taiwan (R.O.C.)");

    // 建築物們 - Composite
    const buildings = new Buildings(); 
    buildings.addBuilding(residentialBuilding);
    buildings.addBuilding(bank);
    buildings.addBuilding(coffeeShop);

    // 保單匯出訪問者
    const insurancePolicyExportVisitor = new InsurancePolicyExportVisitor();

    // 藉由訪問者來增加行為(希望能以它們個別有的資料來客製化保單內容)
    buildings.accept(insurancePolicyExportVisitor);
  });
});