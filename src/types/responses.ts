import { Appraisal, Hod, SectionAInfo, SectionBInfo, SectionDInfo, SectionEInfo, SectionFInfo, SectionGInfo, SectionHInfo, SectionIInfo, StaffData, StaffInfo, StaffSearch, Supervisor, Target } from "./types";

interface IResponse {
    status: string;
    message: string;
}  

export interface IStaffTypeResponse extends IResponse {
    stafftype: string;
    apparaiseeid: string;
}

export interface IStaffSearchResponse extends IResponse {
    data: Array<StaffSearch>;
}

export interface IStaffInfoResponse extends IResponse {
    staff: StaffInfo,
    appraisee: StaffInfo
}

export interface ILoggedInStaffResponse extends IResponse {
    staff?: StaffData;
}

export interface ISupervisorStatusResponse extends IResponse {
    isSupervisor: boolean
}

export interface IHODStatusResponse extends IResponse {
    isHod: boolean
}

export interface ISupervisorResponse extends IResponse {
    supervisor: Supervisor,
    hod: Hod
}

export interface ISaveInforResponse extends IResponse {

}

export interface IAppraisalInfoResponse extends IResponse {
    data: any
}

export interface ISectionAInfoResponse extends IResponse {
    data: SectionAInfo
}

export interface ISectionBInfoResponse extends IResponse {
    data: SectionBInfo
}

export interface IAppraisalStatusresponse extends IResponse {
    complete: number|string;
    sectiona_status: number|string;
    sectionb_status: number|string;
    sectionc_status: number|string;
    sectiond_status: number|string;
    sectione_status: number|string;
    sectionf_status: number|string;
    sectiong_status: number|string;
    sectionh_status: number|string;
    sectioni_status: number|string;

}

export interface ISectionCInfoResponse extends IResponse {
    data: Array<Target>;
}

export interface ISectionDInfoResponse extends IResponse {
    data: SectionDInfo;
}

export interface ISectionEInfoResponse extends IResponse {
    data: SectionEInfo;
}

export interface ISectionFInfoResponse extends IResponse {
    data: SectionFInfo;
}


export interface ISectionGInfoResponse extends IResponse {
    data: SectionGInfo;
}

export interface ISectionHInfoResponse extends IResponse {
    data: SectionHInfo;
}

export interface ISectionIInfoResponse extends IResponse {
    data: SectionIInfo;
}

export interface IAppraisalResponse extends IResponse {
    data: Appraisal;
}

export interface AppraiseeTrainingInfo extends IResponse {
    hadtraining?: string;
    trainings?: Array<string>;
}


