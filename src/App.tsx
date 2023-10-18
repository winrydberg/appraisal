// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Provider} from 'react-redux';


import './assets/vendors.css';
import './assets/app.css';
import './assets/core/menu/menu-types/horizontal-menu.css';
import MainPage from "./MainPage";
import './App.css';
import WorkDetails from "./WorkDetails/WorkDetails";
import AppraiseeInformation from "./AppraiseeInformatoion/AppraiseeInformation";
import AppraiserInformation from "./AppraiserInformation/AppraiserInformation";
// import JobObjectives from "./JobObjectives/JobObjectives";
// import AppraiseeConduct from "./AppraiseeConduct/AppraiseeConduct";
import OverallEvaluation from "./OverallEvaluation/OverallEvaluation";
import AppraiseeConductMain from "./AppraiseeConduct/AppraiseeConductMain";
import StrengthAndDevelopment from "./StrengthAndDevelopment/StrengthAndDevelopment";
import NextTargets from "./NextTargets/NextTargets";
import TrainingAndDevelopment from "./TrainingAndDevelopment/TrainingAndDevelopment";
import Signature from "./Signature/Signature";
import store from "./store";
import JobObjectiveMain from "./JobObjectives/JobObjectiveMain";
import PreviewSubmission from "./PreviewSubmission/PreviewSubmission";

// import PreviewSubmission from "./PreviewSubmission/PreviewSubmission";
// import axios from "./helpers/axios";
// import DataService from "./Services/DataService";
// import { useDispatch } from "react-redux";

// let token = 'soemdnfudbdkdfsl;df'


const prodBaseURL = process.env.NODE_ENV =='development' ? '' : '/services/staff/new-appraisal';



const router = createBrowserRouter([
  {
    path: prodBaseURL+"/",
    element: <MainPage />,
  },
  {
    path: "/services/staff/new-supeervisor-appraisal",
    element: <MainPage />,
  },
  {
    path: prodBaseURL+"/hod",
    element: <MainPage />,
  },
  {
    path: prodBaseURL+"/supervisor",
    element: <MainPage />,
  },
  {
    path: prodBaseURL+"/rt-work-details",
    element: <WorkDetails />,
  },
  {
    path: prodBaseURL+"/personal-information",
    element: <AppraiseeInformation />,
  },
  {
    path: prodBaseURL+"/appraisers-information",
    element: <AppraiserInformation />,
  },

  {
    path: prodBaseURL+"/job-objectives",
    element: <JobObjectiveMain />,
  },
  {
    path: prodBaseURL+"/appraisee-conduct",
    element: <AppraiseeConductMain/>
  },
  {
    path: prodBaseURL+"/overall-evaluation-apraisee",
    element: <OverallEvaluation/>
  },
  {
    path: prodBaseURL+"/strength-area-development",
    element: <StrengthAndDevelopment/>
  },
  {
    path: prodBaseURL+"/next-year-targets",
    element: <NextTargets/>
  },
  {
    path: prodBaseURL+"/training-and-development",
    element: <TrainingAndDevelopment/>
  },
  {
    path: prodBaseURL+"/signature",
    element: <Signature/>
  },
  {
    path: prodBaseURL+"/preview-submissions",
    element: <PreviewSubmission/>
  }
]);

function App() {
  // const [count, setCount] = useState(0)


  // const getLoggedInUser = () => {
  //   DataService.getLoggedInStaff('27672', 'djsfldfsd').then((response) => {
  //       if(response.data.status == 'success'){
  //           useDispatch
  //       }
  //   })
  // }

  useEffect(() => {

  }, [])
  return (
    <>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
    </>
  )
}

export default App
