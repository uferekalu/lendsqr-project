export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phone: string;
  email: string;
  relationship: string;
}

export interface User {
  id: number
  organization: string;
  name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  dateJoined: string;
  status: string;
  bvn: string;
  account: string;
  gender: string;
  bank: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  monthlyIncome: string;
  loanRepayment: string;
  socials: Socials;
  guarantor: Guarantor;
}
