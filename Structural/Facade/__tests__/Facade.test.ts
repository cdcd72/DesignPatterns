import { Employee, OriginalApplication, FacadeApplication } from '../Facade';

describe('Get Year-End Bonus...', () => {
  // 原始情況
  it('Original', () => {
    let employee = new Employee();
    let originalApplication = new OriginalApplication(employee);
    expect(originalApplication.getYearEndBonus()).toBe(40560);
  });
  // 使用 Facade Pattern 情況
  it('UseFacade', () => {
    let employee = new Employee();
    let originalApplication = new FacadeApplication(employee);
    expect(originalApplication.getYearEndBonus()).toBe(40560);
  });
});