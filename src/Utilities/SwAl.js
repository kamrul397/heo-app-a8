// src/utils/swal.js
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const swalSuccess = (title = "Success!", text = "", timer = 2000) => {
  return Swal.fire({
    icon: "success",
    title,
    text,
    timer,
    showConfirmButton: false,
  });
};

export const swalError = (title = "Error!", text = "") => {
  return Swal.fire({
    icon: "error",
    title,
    text,
  });
};

export const swalConfirm = async (title = "Are you sure?", text = "") => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });
  return result.isConfirmed;
};

// ✅ Already installed alert (fixed message, no template literals)
export const swalAlreadyInstalled = () => {
  return Swal.fire({
    icon: "info",
    title: "Already Installed",
    text: "This app is already installed on your device.",
    confirmButtonText: "Okay",
    timer: 2000,
  });
};
