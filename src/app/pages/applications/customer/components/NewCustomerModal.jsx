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
      <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-[#2c2c2d] p-3 rounded-lg shadow-lg ">
          <div className="pb-3">
            <Button
              className="h-2 w-2 bg-red-400"
              onClick={() => {
                handleNewCustomerModal();
              }}
            />
          </div>
          <div>
            <div>
              <AddCustomerForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
