// import { AnyAction } from "@reduxjs/toolkit";
import { SET_APPRAISAL, SET_APPRAISEE_ID, SET_CURRENT_YEAR_APPRAISAL, SET_FORM_COMPLETED, SET_HOD, SET_IS_HOD, SET_IS_SUPERVISOR, SET_LOGGED_IN_USER, SET_SECTIONA, SET_SECTIONC_INFO, SET_SECTIOND_INFO, SET_SECTION_STATUS, SET_STAFF_AGE, SET_STAFF_DEPARTMENT, SET_STAFF_EMPTYPE, SET_STAFF_EVALUATION_PERIOD, SET_STAFF_FIRST_APPOINTMENT, SET_STAFF_GRADE, SET_STAFF_LAST_PROMOTION, SET_STAFF_LAST_RELEIEVE, SET_STAFF_LAST_TRANSFER, SET_STAFF_NO, SET_STAFF_OTHERNAMES, SET_STAFF_PREVIOUS_UNIT, SET_STAFF_SCHOOL, SET_STAFF_SEX, SET_STAFF_SURNAME, SET_STAFF_TYPE, SET_SUPERVISOR } from "../types";
import { Appraisal, AppraisalInformation, Hod, SectionAInfo, SectionDInfo, StaffData, Supervisor, Target } from "../../types/types";
import { AnyAction } from "@reduxjs/toolkit";


// type Action = {
//     type: string;
//     payload: any;
// }
type SectionStatus = {
  completed: boolean;
  name: string
}

  
type State = {
    staff: StaffData | null | undefined;
    appraisee_id: string;
    isSupervisor: boolean;
    stafftype: string;
    isHod: boolean;
    sectiona: SectionStatus;
    sectionainfo: SectionAInfo | null | undefined;
    sectionb: SectionStatus;
    sectionc: SectionStatus;
    sectiond: SectionStatus;
    sectione: SectionStatus;
    sectionf: SectionStatus;
    sectiong: SectionStatus;
    sectionh: SectionStatus;
    sectioni: SectionStatus;
    form_completed: boolean;
    supervisor: Supervisor | null ;
    hod: Hod | null ;
    current_year_appraisal : AppraisalInformation | null | undefined,
    sectiondinfo: SectionDInfo | null;
    sectioncinfo: Array<Target> | null;
    appraisal: Appraisal | null
};
  
const initialState: State = {
    appraisal: null,
    staff: null,
    stafftype: '',
    appraisee_id: '',
    isSupervisor: true,
    isHod: false,
    form_completed: false,
    supervisor: null,
    hod: null,
    current_year_appraisal: null,
    sectionainfo: null,
    sectiondinfo: null,
    sectioncinfo: null,
    sectiona: {
      name: 'Section A',
      completed: false
    },
    sectionb: {
      name: 'Section B',
      completed: false
    },
    sectionc: {
      name: 'Section C',
      completed: false
    },
    sectiond: {
      name: 'Section D',
      completed: false
    },
    sectione: {
      name: 'Section E',
      completed: false
    },
    sectionf: {
      name: 'Section F',
      completed: false
    },
    sectiong: {
      name: 'Section G',
      completed: false
    },
    sectionh: {
      name: 'SH',
      completed: false
    },
    sectioni: {
      name: 'Section I',
      completed: false
    },
};

const dataReducer = (state: State = initialState, action: AnyAction) => {
    switch (action.type) {
      case SET_LOGGED_IN_USER:
        return {
          ...state,
          staff: action.payload,
        };
  
      case SET_IS_SUPERVISOR:
        return {
          ...state,
          isSupervisor: action.payload,
        };
      case SET_IS_HOD:
        return {
          ...state,
          isHod: action.payload,
        };

      case SET_FORM_COMPLETED:
        return {
          ...state,
          form_completed: action.payload,
        };
      
      case SET_STAFF_SURNAME:
          return {
            ...state,
            staff: {...state.staff, surname: action.payload},
            sectionainfo: {...state.sectionainfo, surname: action.payload}
          };
      case SET_STAFF_OTHERNAMES:
            return {
              ...state,
              staff: {...state.staff, othernames: action.payload},
              sectionainfo: {...state.sectionainfo, othername: action.payload}
            };
      case SET_STAFF_DEPARTMENT:
          return {
            ...state,
            staff: {...state.staff, department: action.payload},
            sectionainfo: {...state.sectionainfo, department: action.payload}
          };

      case SET_STAFF_SCHOOL:
          return {
            ...state,
            staff: {...state.staff, school: action.payload},
            sectionainfo: {...state.sectionainfo, school: action.payload}
          };

      case SET_STAFF_GRADE:
          return {
            ...state,
            staff: {...state.staff, presentgrade: action.payload},
            sectionainfo: {...state.sectionainfo, present_grade: action.payload}
          };
      case SET_STAFF_SEX:
          return {
            ...state,
            staff: {...state.staff, gender: action.payload},
            sectionainfo: {...state.sectionainfo, gender: action.payload}
          };
      case SET_STAFF_NO:
          return {
            ...state,
            staff: {...state.staff, staffid: action.payload},
            sectionainfo: {...state.sectionainfo, staff_id: action.payload}
          };
      case SET_STAFF_AGE:
          return {
            ...state,
            staff: {...state.staff, age: action.payload},
            sectionainfo: {...state.sectionainfo, age: action.payload}
          };
      case SET_STAFF_FIRST_APPOINTMENT:
          return {
            ...state,
            staff: {...state.staff, first_appointment_date: action.payload},
            sectionainfo: {...state.sectionainfo, first_appointment_date: action.payload}
          };
      case SET_STAFF_EMPTYPE:
          return {
            ...state,
            staff: {...state.staff, employment_type: action.payload},
            sectionainfo: {...state.sectionainfo, employment_type: action.payload}
          };
      case SET_STAFF_LAST_PROMOTION:
          return {
            ...state,
            staff: {...state.staff, last_promotion_date: action.payload},
            sectionainfo: {...state.sectionainfo, last_promotion_date: action.payload}
          };

      case SET_STAFF_EVALUATION_PERIOD:
          return {
            ...state,
            staff: {...state.staff, evaluation_period: action.payload},
            sectionainfo: {...state.sectionainfo, evaluation_period: action.payload}
          };
      case SET_STAFF_PREVIOUS_UNIT:
          return {
            ...state,
            staff: {...state.staff, previous_unit: action.payload},
            sectionainfo: {...state.sectionainfo, previous_unit: action.payload}
          };
      case SET_STAFF_LAST_TRANSFER:
          return {
            ...state,
            staff: {...state.staff, last_transfer_date: action.payload},
            sectionainfo: {...state.sectionainfo, last_transfer_date: action.payload}
          };
      case SET_STAFF_LAST_RELEIEVE:
          return {
            ...state,
            staff: {...state.staff, last_relieve_duty_date: action.payload},
            sectionainfo: {...state.sectionainfo, last_relieve_duty_date: action.payload}
          };
      case SET_SUPERVISOR:
          return {
            ...state,
            supervisor: action.payload,
          };
      case SET_HOD:
          return {
            ...state,
            hod: action.payload,
          };
      case SET_CURRENT_YEAR_APPRAISAL:
          return {
            ...state,
            current_year_appraisal: action.payload,
          };
      case SET_SECTIONA:
          return {
            ...state,
            sectionainfo: action.payload,
          };
      case SET_SECTION_STATUS:
            let name = action.payload.name;
            if(name == 'SECTIONA'){
              return {
                ...state,
                sectiona: {...state.sectiona, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONB'){
              return {
                ...state,
                sectionb: {...state.sectionb, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONC'){
              return {
                ...state,
                sectionc: {...state.sectionc, completed: action.payload.completed},
              };
            }else if(name == 'SECTIOND'){
              return {
                ...state,
                sectiond: {...state.sectiond, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONE'){
              return {
                ...state,
                sectione: {...state.sectione, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONF'){
              return {
                ...state,
                sectionf: {...state.sectionf, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONG'){
              return {
                ...state,
                sectiong:{...state.sectiong, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONH'){
              return {
                ...state,
                sectionh: {...state.sectionh, completed: action.payload.completed},
              };
            }else if(name == 'SECTIONI'){
              return {
                ...state,
                sectioni: {...state.sectioni, completed: action.payload.completed},
              };
            }
            else{
              return state;
            }
  
      case SET_SECTIOND_INFO:
        return {
          ...state,
          sectiondinfo: action.payload,
        };
      case SET_SECTIONC_INFO:
          return {
            ...state,
            sectioncinfo: action.payload,
          };
      case SET_STAFF_TYPE:
            return {
              ...state,
              stafftype: action.payload,
            };
      case SET_APPRAISEE_ID:
          return {
            ...state,
            appraisee_id: action.payload,
          };
      case SET_APPRAISAL:
          return {
            ...state,
            appraisal: action.payload,
          }
      default:
        return state;
    }
};

export default dataReducer;
