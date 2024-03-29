import SVG from "../../../assets/svg/SVG";
import Button from "../../../components/common/Button";
import Table from "../../../components/common/Table/Table";
import {
  CustomerContext,
  useCustomerContext,
} from "../../../contexts/Customer/CustomerProvider";
import {
  AppOpenCloseContext,
  useAppOpenCloseContext,
} from "../../../contexts/trashContexts/AppOpenClose";
import DeleteCustomerButton from "./components/DeleteCustomerButton";
import NewCustomerModal from "./components/NewCustomerModal";

export default function Customer() {
  const { handleButtonCustomer, newCustomerModal, handleNewCustomerModal } =
    useAppOpenCloseContext(AppOpenCloseContext);
  const { userData } = useCustomerContext(CustomerContext);

  const tableColumns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Process",
      dataIndex: "process",
      render: (item) => {
        return (
          <span className="d-flex gap-1 ">
           <DeleteCustomerButton 
           id={item.id}
           />
          </span>
        );
      },
    },
  ];
  return (
    <div className="border-2 border-[#585857b3] text-gray-400 mt-[100px] rounded-md mx-10  max-h-[700px]  overflow-y-auto ">
      <div className="p-2 bg-darky">
        <div className="p-2">
          <Button
            className="h-2 w-2 bg-red-400"
            onClick={() => {
              handleButtonCustomer();
            }}
          />
        </div>
        <div className="text-start pb-2 pl-11 text-[26px] bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent w-[300px]">
          Customer Table
        </div>
        <div className="flex gap-2 justify-center">
          <p className="text-white "> {'You can contact me for a more professional-comprehensive table (exp: pagination, customer profile, update, filter etc.) '} </p>
          <a
          className="text-yellow-200"
            href="https://www.linkedin.com/in/ozanbalci98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>

        <div className="pb-3 flex justify-end pr-5">
          <Button
            text={"Add New Customer"}
            icon={<SVG icon="people" className="rounded-md mr-2" size={20} />}
            className="text-white hover:text-gray-400 "
            onClick={() => {
              handleNewCustomerModal();
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-10">
          <Table columns={tableColumns} data={userData} />
        </div>
        {newCustomerModal && (
          <>
            <div className="">
              <NewCustomerModal />
            </div>
          </>
        )}

        {/* <div className="grid grid-cols-12 gap-4 pt-5 ">
          <div className="col-span-6">
            <div className="text-white">{notice && <Notice />} </div> 
          </div>
          <div className="col-span-6">
            <div className="">{infoWeb && <InfoWeb />} </div> 
          </div>
        </div> */}
        
      </div>
    </div>
  );
}
