import { Developer, Manager, CompanyMember } from '../Composite';

describe('Company scenario...', () => {

  // 樹狀顯示員工描述
  it('Display members description in tree structure..', () => {

    // 兩名程式設計師 - Leaf
    const dev1 = new Developer(100, "Neil", "Pro Developer"); 
    const dev2 = new Developer(101, "Stock", "Developer"); 

    // 都是公司成員 - Composite
    const devMembers = new CompanyMember(); 
    devMembers.addMember(dev1);
    devMembers.addMember(dev2);
       
    // 兩名經理 - Leaf
    const man1 = new Manager(200, "Amy", "SEO Manager"); 
    const man2 = new Manager(201, "Cindy", "Project Manager"); 
       
    // 也都是公司成員 - Composite
    const manMembers = new CompanyMember();
    manMembers.addMember(man1); 
    manMembers.addMember(man2); 
   
    // 既然都是公司成員就放一起吧 - Composite
    const members = new CompanyMember();
    members.addMember(devMembers);
    members.addMember(manMembers);

    // 樹狀顯示公司成員描述
    members.showDetails();
  });
});