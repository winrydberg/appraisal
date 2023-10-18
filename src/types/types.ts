export interface StaffData {
    id?: any|undefined;
    surname?: string | undefined;
    othernames?: string |undefined;
    department?: string | undefined;
    email?: string | undefined;
    age?: string | undefined;
    gender?: string | undefined;
    staffid?: string | undefined;
    presentgrade?: string | undefined;
    school?: string | undefined;
    first_appointment_date?: any;
    employment_type?: string ;
    last_promotion_date?: any ;
    evaluation_period?: string ;
    previous_unit?: string ;
    last_transfer_date?: any ;
    last_relieve_duty_date?: any ;
  }


  export interface StaffSearch {
    name: string;
    staff_id: string;
  }

  export interface StaffInfo {
    staff_id: any,
    title: any,
    surname: any,
    othernames: any,
    position: any,
    department: any,
    app_type: any,
    email: any,
    pin: any
  }

  export interface Supervisor {
    title : string;
    fullname:  string;
    staffid: string 
  }

  export interface Hod {
    title : string;
    fullname:  string;
    staffid: string 
  }


  //data to save
  export interface SectionAInfo {
    staff_id?: string | undefined;
    surname?: string | undefined;
    othernames?: string | undefined;
    department?: string | undefined;
    school?: string | undefined;
    app_type?: string | undefined;
    gender?: string | undefined;
    present_grade?: string | undefined;
    first_appointment_date?: any;
    employment_type?: string ;
    last_promotion_date?: any ;
    evaluation_period?: string ;
    previous_unit?: string ;
    last_transfer_date?: any ;
    last_relieve_duty_date?: any ;
    age?: any,
    sectiona_complete?:number
  }

  export interface AppraisalInformation {
    sectiona: SectionAInfo
  }

  export interface Target {
    description: string|number;
    projected_weight: string|number;
    obtained_weight?: string|number;
    resource?: string;
 }

 export interface SectionCInfo {
  data: Target;
 }


 export interface SectionDInfo {
    work_attendance: string|number;
    teamwork: string | number;
    commitment: string | number;
    customer_service: string | number;
    capacity_building: string | number;
    dependability: string | number;
    communication: string | number;
    innovation: string | number;
    sectiond_complete?: string|number;
 }

 export interface SectionEInfo {
  workevaluation: string;
  conductevaluation: string;
  commendation_letter?: any;
  caution_letter?: any;
  specific_details?: string;
  overall_work_val?: string;
  overall_conduct_val?: string;
 }


 export interface SectionBInfo {
    curr_supervisorid: string;
    curr_supervisorname: string;
    curr_hodname: string;
    curr_hodid: string;
    prev_supervisorid: string;
    prev_supervisorname: string;
    prev_hodname: string;
    prev_hodid: string;
    sectionb_complete?: string|number
 }


 export interface SectionFInfo {
    sectionf_complete: boolean;
    data: Array<{description: string, type: string}>
 }

 export interface SectionGInfo {
  sectionf_complete: boolean;
  data: Array<Target>
}

 export interface TrainingArea {
   description: string;
 }

 export interface SectionHInfo {
  sectionh_complete?: boolean;
  data: Array<TrainingArea>
}

export interface SectionIInfo {
  appraisee_rcvd_job_desc: string,
  appraisee_rcvd_resources: string,
  appraisee_agree: string,
  appraisee_signdate: string,
  supervisor_signdate: string,
  supervisor_signed: string,
  hod_signdate: string,
  hod_signed: string,
  appraisee_comment?: string
}



export interface Appraisal {
  sectiona: StaffData,
  sectionb: SectionBInfo,
  sectionc: Array<Target>,
  sectiond: SectionDInfo,
  sectione: SectionEInfo,
  sectionf: Array<{description: string, type: string}>,
  sectiong: Array<Target>,
  sectionh: Array<TrainingArea>,
  sectioni: SectionIInfo,
  state? : string,
  appraisee_training?: Array<string>
  hadtraining?: number
}