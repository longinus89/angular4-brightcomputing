export class Employee {

  id: number;
  firstName: string;
  lastName: string;
  managerId: number;
  managerName: string;
  reports: string;
  title: string;
  department: string;
  cellPhone: string;
  officePhone: string;
  email: string;
  city: string;
  picture: string;
  twitterId: string;
  blog: string;

  constructor(
    public currEl
  ) {
    this.id = currEl.id;
    this.firstName = currEl.firstName;
    this.lastName = currEl.lastName;
    this.managerId = currEl.managerId;
    this.managerName = currEl.managerName;
    this.reports = currEl.reports;
    this.title = currEl.title;
    this.department = currEl.department;
    this.cellPhone = currEl.cellPhone;
    this.officePhone = currEl.officePhone;
    this.email = currEl.email;
    this.city = currEl.city;
    this.picture = currEl.picture;
    this.twitterId = currEl.twitterId;
    this.blog = currEl.blog;
  }
}
