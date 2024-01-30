import React, { useEffect, useState } from "react";
import Button from "../../../../components/common/Button";
import { deleteCustomer } from "../services";
import Swal from "sweetalert2";
import {
  CustomerContext,
  useCustomerContext,
} from "../../../../contexts/Customer/CustomerProvider";

export default function DeleteCustomerButton({ id }) {
  const { userData, setUserData } = useCustomerContext(CustomerContext);
  const [deleteData, setDeleteData] = useState([]);

  const handleButtonClick = () => {
    Swal.fire({
      text: "Are you sure you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        // const userToDelete = userData.find((item) => item.id === id);
        if (deleteData) {
          const updatedUserData = userData.filter((user) => user.id !== id);
          setUserData(updatedUserData);
          Swal.fire({
            text: "Deleted",
            icon: "success",
          });
        }
      }
    });
  };

  const fetchDeleteCustomer = async () => {
    try {
      const res = await deleteCustomer(id);
      setDeleteData(res?.data);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    fetchDeleteCustomer();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          handleButtonClick();
        }}
        text={"Delete"}
        className="rounded-md bg-red-500 text-white"
      />
    </>
  );
}
