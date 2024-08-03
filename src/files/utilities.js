import Swal from "sweetalert2";

const key = "items";
export const initialData = JSON.parse(localStorage.getItem(key));
export function saveData(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadData() {
  return JSON.parse(localStorage.getItem(key)) || initialData;
}

export const SwalMessage = async (title, data, type, timer = 0) => {
  if (timer !== 0) {
    return Swal.fire({
      position: "top-end",
      icon: type,
      title: title,
      showConfirmButton: false,
      timer: timer,
    });
  } else {
    return Swal.fire({
      title: data,
      showDenyButton: true,

      confirmButtonText: title,
      denyButtonText: "cancel",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
      return result.isConfirmed;
    });
  }
};
