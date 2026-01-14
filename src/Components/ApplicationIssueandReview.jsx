import React, { useState } from "react";
import {
  MdPerson,
  MdCategory,
  MdDescription,
  MdAttachFile,
  MdSend,
} from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";

const ApplicationIssueandReview = () => {
  const userIdElement = useRef();
  const userNameElement = useRef();
  const userPhoneElement = useRef();
  const userAddressElement = useRef();
  const serviceCategoryElement = useRef();
  const problemTypeElement = useRef();
  const descriptionElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = userIdElement.current.value;
    const fullname = userNameElement.current.value;
    const phonenumber = userPhoneElement.current.value;
    const address = userAddressElement.current.value;
    const serviceCategory = serviceCategoryElement.current.value;
    const problemType = problemTypeElement.current.value;
    const description = descriptionElement.current.value;
    addApplication({
      id,
      fullname,
      phonenumber,
      address,
      serviceCategory,
      problemType,
      description,
    });
  };
  return (
    <form
      className="w-full min-h-screen bg-gray-50 p-10"
      onSubmit={handleSubmit}
    >
      <div className="w-full min-h-screen bg-gray-50 p-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <IoIosArrowBack className="text-2xl text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-emerald-900">
                  Issue New Application
                </h1>
                <p className="text-gray-600 text-sm">
                  Fill in the details to create a new service application
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <MdPerson className="text-2xl" />
                  Applicant Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Applicant ID
                    </label>
                    <input
                      type="text"
                      ref={userIdElement}
                      name="applicantId"
                      placeholder="Enter applicant ID"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      ref={userNameElement}
                      name="applicantName"
                      placeholder="Enter full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      ref={userPhoneElement}
                      name="phone"
                      placeholder="Enter phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className=" text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      ref={userAddressElement}
                      name="address"
                      placeholder="Enter address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Category
                    </label>
                    <select
                      name="serviceCategory"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                      ref={serviceCategoryElement}
                    >
                      <option value="">Select category</option>
                      <option value="certificates">Certificates</option>
                      <option value="property-tax">Property Tax</option>
                      <option value="water-connection">Water Connection</option>
                      <option value="building-permit">Building Permit</option>
                      <option value="trade-license">Trade License</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Problem Type
                    </label>
                    <select
                      name="problemType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                      ref={problemTypeElement}
                    >
                      <option value="">Select problem type</option>
                      <option value="new-application">New Application</option>
                      <option value="renewal">Renewal</option>
                      <option value="correction">Correction/Amendment</option>
                      <option value="duplicate">Duplicate Copy</option>
                      <option value="transfer">Transfer</option>
                      <option value="complaint">Complaint/Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MdDescription className="inline mr-1" />
                      Description
                    </label>
                    <textarea
                      name="description"
                      ref={descriptionElement}
                      placeholder="Provide detailed description of the application or issue"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors font-medium flex items-center gap-2"
              >
                <MdSend />
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ApplicationIssueandReview;
