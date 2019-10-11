export class Applicant {
  id: number;
  name?: string;
  userName: string;
  dob?: string;
  email: string;
  gender?: string;
  characteristics: {
    height?: number;
    weight?: number;
  };
  joined: string;
}
