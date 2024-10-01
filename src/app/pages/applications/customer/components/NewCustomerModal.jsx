import React from "react";
import Button from "../../../../components/common/Button";
import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../../../contexts/trashContexts/AppOpenClose";
import AddCustomerForm from "./AddCustomerForm";

export default function NewCustomerModal() {
  const { handleNewCustomerModal } =
    useAppOpenCloseContext(AppOpenCloseContext);
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-70"
        onClick={handleNewCustomerModal}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-[#161616fc]  p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-end pb-3">
            {/* Close Button */}
            <Button
              className="h-6 w-6 bg-red-600"
              onClick={handleNewCustomerModal}
            >
              &#x2715;
            </Button>
          </div>

          {/* Modal Content */}
          <div className="flex items-center justify-center">
            <AddCustomerForm />
          </div>
        </div>
      </div>
    </>
  );
}
