import { Appraisal, AppraisalInformation, Hod, SectionAInfo, SectionDInfo, StaffData, Supervisor, Target } from "../../types/types";
import { SET_APPRAISAL, SET_APPRAISEE_ID, SET_CURRENT_YEAR_APPRAISAL, SET_FORM_COMPLETED, SET_HOD, SET_IS_HOD, SET_IS_SUPERVISOR, SET_LOGGED_IN_USER, SET_SECTIONA, SET_SECTIONC_INFO, SET_SECTIOND_INFO, SET_SECTION_STATUS, SET_STAFF_AGE, SET_STAFF_EMPTYPE, SET_STAFF_EVALUATION_PERIOD, SET_STAFF_FIRST_APPOINTMENT, SET_STAFF_GRADE, SET_STAFF_LAST_PROMOTION, SET_STAFF_LAST_RELEIEVE, SET_STAFF_LAST_TRANSFER, SET_STAFF_NO, SET_STAFF_OTHERNAMES, SET_STAFF_PREVIOUS_UNIT, SET_STAFF_SCHOOL, SET_STAFF_SEX, SET_STAFF_SURNAME, SET_STAFF_TYPE, SET_SUPERVISOR } from "../types";


export function setStaffType(data: string) {
  return {
    type: SET_STAFF_TYPE,
    payload: data,
  };
}

export function setAppraiseeStaffID(data: string) {
  return {
    type: SET_APPRAISEE_ID,
    payload: data,
  };
}

export function setUser(user: StaffData) {
    return {
      type: SET_LOGGED_IN_USER,
      payload: user,
    };
}

export function setHODStatus(isHod: boolean) {
    return {
      type: SET_IS_HOD,
      payload: isHod,
    };
}

export function setSupervisorStatus(isSupervisor: boolean) {
    return {
      type: SET_IS_SUPERVISOR,
      payload: isSupervisor,
    };
}

export function setStaffSurname(surname: string) {
    return {
      type: SET_STAFF_SURNAME,
      payload: surname,
    };
}

export function setStaffOthername(othernames: string) {
    return {
      type: SET_STAFF_OTHERNAMES,
      payload: othernames,
    };
}

export function setStaffDepartment(unit: string) {
    return {
      type: SET_STAFF_OTHERNAMES,
      payload: unit,
    };
}

export function setStaffSchool(data: string) {
    return {
      type: SET_STAFF_SCHOOL,
      payload: data,
    };
}

export function setStaffPresentGrade(data: string) {
    return {
      type: SET_STAFF_GRADE,
      payload: data,
    };
}

export function setStaffId(data: string) {
    return {
      type: SET_STAFF_NO,
      payload: data,
    };
}

export function setSex(data: string) {
    return {
      type: SET_STAFF_SEX,
      payload: data,
    };
}

export function setStaffAge(data: string) {
    return {
      type: SET_STAFF_AGE,
      payload: data,
    };
}

export function setFirstAppointmentDate(data: string) {
    return {
      type: SET_STAFF_FIRST_APPOINTMENT,
      payload: data,
    };
}

export function setEmploymentType(data: string) {
    return {
      type: SET_STAFF_EMPTYPE,
      payload: data,
    };
}

export function setLastPromotionDate(data: string) {
    return {
      type: SET_STAFF_LAST_PROMOTION,
      payload: data,
    };
}

export function setEvaluationPeriod(data: string) {
    return {
      type: SET_STAFF_EVALUATION_PERIOD,
      payload: data,
    };
}

export function setPreviousUnit(data: string) {
    return {
      type: SET_STAFF_PREVIOUS_UNIT,
      payload: data,
    };
}

export function setLastTransferDate(data: string) {
    return {
      type: SET_STAFF_LAST_TRANSFER,
      payload: data,
    };
}

export function setLastReleivedDate(data: string) {
    return {
      type: SET_STAFF_LAST_RELEIEVE,
      payload: data,
    };
}

export function setSupervisor(data: Supervisor) {
    return {
      type: SET_SUPERVISOR,
      payload: data,
    };
}


export function setHod(data: Hod) {
    return {
      type: SET_HOD,
      payload: data,
    };
}

export function setCurrentYearAppraisal(data: AppraisalInformation) {
    return {
      type: SET_CURRENT_YEAR_APPRAISAL,
      payload: data,
    };
}
export function setFormCompleted(data: boolean) {
    return {
      type: SET_FORM_COMPLETED,
      payload: data,
    };
}


export function setSectionStatus(data: { name: string, completed: boolean}) {
    return {
      type: SET_SECTION_STATUS,
      payload: data,
    };
}

export function setSectionA(data: SectionAInfo) {
    return {
      type: SET_SECTIONA,
      payload: data,
    };
}

export function setSectionDInfo(data: SectionDInfo) {
  return {
    type: SET_SECTIOND_INFO,
    payload: data,
  };
}

export function setSectionCInfo(data: Array<Target>) {
  return {
    type: SET_SECTIONC_INFO,
    payload: data,
  };
}

export function setAppraisal(data: Appraisal) {
  return {
    type: SET_APPRAISAL,
    payload: data,
  };
}