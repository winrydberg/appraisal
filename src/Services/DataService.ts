
import http from '../helpers/axios';
import { AppraiseeTrainingInfo, IAppraisalResponse, IAppraisalStatusresponse, IHODStatusResponse, ISaveInforResponse, ISectionAInfoResponse, ISectionBInfoResponse, ISectionCInfoResponse, ISectionDInfoResponse, ISectionEInfoResponse, ISectionFInfoResponse, ISectionGInfoResponse, ISectionHInfoResponse, ISectionIInfoResponse, IStaffInfoResponse, IStaffSearchResponse, IStaffTypeResponse, ISupervisorResponse, ISupervisorStatusResponse } from '../types/responses';
import { SectionAInfo, SectionBInfo, SectionDInfo, Target, TrainingArea } from '../types/types';



class DataService {


  getLoggedInStaff() {
    return http.get<IStaffInfoResponse>('/get-staff-info');
  }

  getStaffType() {
    return http.get<IStaffTypeResponse>('/get-staff-type');
  }

  searchStaff(name: string) {
    return http.post<IStaffSearchResponse>('/search-staff', {
      name: name,
    });
  }

  checkSupervisorStatus(staffid: string) {
    return http.post<ISupervisorStatusResponse>('/check-supervisor-status', {
      staffid: staffid,
    });
  }

  checkHODStatus(staffid: string) {
    return http.post<IHODStatusResponse>('/check-hod-status', {
      staffid: staffid,
    });
  }

  getStaffSupervisor() {
    return http.get<ISupervisorResponse>('/get-supervisor');
  }


  saveSectionAInformation (data: SectionAInfo){
    return http.post<ISaveInforResponse>('save-sectiona', data);
  }


  // getMyCurrentYearAppraisal() {
  //   return http.get<IAppraisalInfoResponse>('/get-current-year-appraisal');
  // }

  getMyCurrentYearAppraisalStatus() {
    return http.get<IAppraisalStatusresponse>('/get-current-appraisal-status');
  }
  

  loadSectionAInformation(){
    return http.get<ISectionAInfoResponse>('/get-sectiona-info');
  }

  loadSectionBInformation(){
    return http.get<ISectionBInfoResponse>('/get-sectionb-info');
  }

  saveSectionCInformation(data: Array<Target>, sectionc_complete: number, staffid: string) {
    return http.post<ISaveInforResponse>('/save-sectionc',{
      targets: data,
      staff_id: staffid,
      sectionc_complete: sectionc_complete
    });
  }

  loadSectionCInformation(){
    return http.get<ISectionCInfoResponse>('/get-sectionc-info');
  }


  saveSectionDInformation(data: SectionDInfo){
    return http.post<ISaveInforResponse>('/save-sectiond',data);
  }

  loadSectionDInformation(){
    return http.get<ISectionDInfoResponse>('/get-sectiond-info');
  }

  saveSectionEInformation(data: FormData) {
    return http.post<ISaveInforResponse>('/save-sectione',data,{headers: {
      'Content-Type' : "multipart/form-data"
    }});
  }

  loadSectionEInformation(){
    return http.get<ISectionEInfoResponse>('/get-sectione-info');
  }


  saveSectionBInformation(data: SectionBInfo){
    return http.post<ISaveInforResponse>('/save-sectionb',data);
  }

  saveSectionFInformation(data: Array<{description: string, type: string}>, submittype: string|number){
    return http.post<ISaveInforResponse>('/save-sectionf',{data: data, sectionf_complete: submittype});
  }

  loadSectionFInformation(){
    return http.get<ISectionFInfoResponse>('/get-sectionf-info');
  }

  saveSectionGInformation(data: Array<Target>, sectiong_complete: number, staffid: string) {
    return http.post<ISaveInforResponse>('/save-sectiong',{
      targets: data,
      staff_id: staffid,
      sectiong_complete: sectiong_complete
    });
  }

  loadSectionGInformation(){
    return http.get<ISectionGInfoResponse>('/get-sectiong-info');
  }
  


  saveSectionHInformation(data: Array<TrainingArea>, sectionh_complete: number, staffid: string) {
    return http.post<ISaveInforResponse>('/save-sectionh',{
      training: data,
      staff_id: staffid,
      sectionh_complete: sectionh_complete
    });
  }

  loadSectionHInformation(){
    return http.get<ISectionHInfoResponse>('/get-sectionh-info');
  }


  loadSectionIInformation(){
    return http.get<ISectionIInfoResponse>('/get-sectioni-info');
  }

  appraiseeSign(data: {rcv_job_dec: string, rvcd_resource: string, appraisee_agree: string, comments: string}){
    return http.post<ISaveInforResponse>('/appraisee-signed',{
      rcv_job_dec: data.rcv_job_dec,
      rvcd_resource: data.rvcd_resource,
      appraisee_agree: data.appraisee_agree,
      comments: data.comments 
    });
  }

  supervisorSigning(data: {staffid: string, staffname: string, signature: string}) {
    return http.post<ISaveInforResponse>('/supervisor-signed',{
      staffid: data.staffid,
      staffname: data.staffname,
      signature: data.signature,
    });
  }

  HODSigning(data: {staffid: string, staffname: string, signature: string}) {
    return http.post<ISaveInforResponse>('/hod-signed',{
      staffid: data.staffid,
      staffname: data.staffname,
      signature: data.signature,
    });
  }


  getAppraisal(staffid: string) {
    return http.post<IAppraisalResponse>('/get-current-year-appraisal',{
      staffid: staffid,
    });
  }


  saveAppraiseeTrainings(data: Array<string>) {
    return http.post<IAppraisalResponse>('/save-past-year-training',{
      data: data,
    });
  }


  saveAppraiseeTrainingResponse(hadtraining: string, trainings: Array<string>){
    return http.post<AppraiseeTrainingInfo>('/save-appraisee-training-info',{
      hadtraining: hadtraining,
      trainings: trainings
    });
  }

  getAppraiseeTrainingInfo(){
    return http.get<AppraiseeTrainingInfo>('/get-appraisee-training-info');
  }



}

export default new DataService();
