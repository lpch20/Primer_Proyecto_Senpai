const exampleModal = document.getElementById("exampleModal");
const validationDefault01 = document.getElementById("validationDefault01");
const validationDefault02 = document.getElementById("validationDefault02");
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");
const logonForm = document.getElementById("logonForm");
const nameAndSurname = document.getElementById("nameAndSurname");
const repeatPassworLogOn = document.getElementById("repeatPassworLogOn");
const passworLogOn = document.getElementById("passworLogOn");
const regex = "Senpai2023";
const regex2 = /^[A-Z]+$/i;
const regex3 = /^[A-Z]{8,}$/i

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(e);
  if (!regex2.test(validationDefault02.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Contraseña incorrecta",
    });
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Ingreso Correcto",
    });
  }
});

logonForm.addEventListener("submit", (e) => {
  e.preventDefault(e);

  if (!regex2.test(nameAndSurname.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El usuario solo puede contener letras de la A - Z",
    });
  } else if (passworLogOn.value !== repeatPassworLogOn.value || (!regex3.test(passworLogOn.value && repeatPassworLogOn.value)) ){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La contraseña no coincide o contiene menos de 8 caracteres.",
    });
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Registro Correcto",
    });
  }
});

if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector(".modal-title");
    const modalBodyInput = exampleModal.querySelector(".modal-body input");

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });
}

