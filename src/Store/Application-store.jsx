import { createContext, useReducer } from "react";

export const Applications = createContext({
  applications: [],
  addApplication: () => {},
  removeApplication: () => {},
});

const DEFAULT_APPLICATIONS = [
  {
    id: "1",
    fullname: "John Doe",
    phonenumber: "1234567890",
    address: "123 Main St, Cityville",
    serviceCategory: "property-tax",
    problemType: "new-application",
    description: "Requesting a new property tax application.",
  },
  {
    id: "2",
    fullname: "Jane Smith",
    phonenumber: "0987654321",
    address: "456 Elm St, Townsville",
    serviceCategory: "water-connection",
    problemType: "renewal",
    description: "Need to renew my water connection service.",
  },
  {
    id: "3",
    fullname: "Alice Johnson",
    phonenumber: "5551234567",
    address: "789 Oak St, Villageburg",
    serviceCategory: "building-permit",
    problemType: "correction",
    description: "Requesting correction on my building permit application.",
  },
  {
    id: "4",
    fullname: "Bob Brown",
    phonenumber: "4449876543",
    address: "321 Pine St, Hamletton",
    serviceCategory: "trade-license",
    problemType: "duplicate",
    description: "Need a duplicate copy of my trade license.",
  },
];

const applicationReducer = (currApplications, action) => {
  let newApplications = currApplications;
  if (action.type === "ADD") {
    const newApplication = {
      id: action.payload.applicationId,
      fullname: action.payload.fullname,
      phonenumber: action.payload.phonenumber,
      address: action.payload.address,
      serviceCategory: action.payload.serviceCategory,
      problemType: action.payload.problemType,
      description: action.payload.description,
    };
    newApplications = [...currApplications, newApplication];
  } else if (action.type === "REMOVE") {
    newApplications = currApplications.filter(
      (application) => application.id !== action.payload.applicationId
    );
  }
  return newApplications;
};

const ApplicationsProvider = ({ children }) => {
  const [applications, dispatchApplications] = useReducer(
    applicationReducer,
    DEFAULT_APPLICATIONS
  );

  const addApplication = (
    id,
    fullname,
    phonenumber,
    address,
    serviceCategory,
    problemType,
    description
  ) => {
    dispatchApplications({
      type: "ADD",
      payload: {
        id: Date.now(),
        fullname,
        phonenumber,
        address,
        serviceCategory,
        problemType,
        description,
      },
    });
  };

  const removeApplication = (applicationId) => {
    dispatchApplications({ type: "REMOVE", payload: { applicationId } });
  };

  return (
    <Applications.Provider
      value={{ applications, addApplication, removeApplication }}
    >
      {children}
    </Applications.Provider>
  );
};

export default ApplicationsProvider;
