export interface Patient {
    id: number;
    image: string;
    name: string;
    email: string;
    assignedDoctor: string;
    dob: Date;
    gender: string;
    phone: string;
    bloodGroup: string;
    balanceDue: number;
    injuryDepartment: string;
    // Add other properties as needed
  }