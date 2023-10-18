

export class Staff {
    id?: any|undefined;
    surname: string | undefined;
    othernames: string |undefined;
    department?: string | undefined;
    email?: string | undefined;
    age?: string | undefined;
    gender?: string | undefined;
    staffid: string | undefined;
    presentgrade?: string | undefined;
    school?: string | undefined;
    first_appointment_date?: any;
    employment_type?: string ;
    last_promotion_date?: any ;
    evaluation_period?: string ;
    previous_unit?: string ;
    last_transfer_date?: any ;
    last_relieve_duty_date?: any ;
   
    // Normal signature with defaults
    constructor(surname: any,
        othernames: any,
        staffid: any,
        department?: any,
        email?: any,
        age?: any,
        gender?: any,
        presentgrade?: any,
        school?: any ,
        first_appointment_date?: any,
        employment_type?: string ,
        last_promotion_date?: any ,
        evaluation_period?: string ,
        previous_unit?: string ,
        last_transfer_date?: any ,
        last_relieve_duty_date?: any ) {
      this.surname = surname;
      this.othernames = othernames;
      this.department = department;
      this.email = email;
      this.age = age;
      this.gender = gender;
      this.staffid = staffid;
      this.presentgrade = presentgrade;
      this.school = school;
      this.first_appointment_date = first_appointment_date;
      this.employment_type = employment_type;
      this.last_promotion_date = last_promotion_date;
      this.evaluation_period = evaluation_period;
      this.previous_unit = previous_unit;
      this.last_transfer_date = last_transfer_date;
      this.last_relieve_duty_date = last_relieve_duty_date;
    }
  }