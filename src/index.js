(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

// Task 1
const form = document.querySelector(".modal__form");
const reportingText = document.querySelector(".changing-text");
const deletingButton = document.querySelector(".modal__button__delete");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formName = document.querySelector("#name").value;
  const formPhone = document.querySelector("#phone").value;
  const formEmail = document.querySelector("#email").value;
  const formLastName = document.querySelector("#last-name").value;
  const formAddress = document.querySelector("#address").value;
  const formDob = document.querySelector("#dob").value;

  if (
    !(
      formEmail.endsWith("@gmail.com") ||
      formEmail.endsWith("@yahoo.com") ||
      formEmail.endsWith("@icloud.com") ||
      formEmail.endsWith("@ukr.net") ||
      formEmail.endsWith("@meta.ua") ||
      formEmail.endsWith("@i.ua") ||
      formEmail.endsWith("@outlook.com") ||
      formEmail.endsWith("@hotmail.com")
    )
  ) {
    reportingText.textContent =
      "Пошта повинна закінчуватися на один з дозволених доменів: @gmail.com, @yahoo.com, @icloud.com, @ukr.net, @meta.ua, @i.ua, @outlook.com, @hotmail.com";
    return;
  }

  const savingData = {
    name: formName,
    lastname: formLastName,
    phone: formPhone,
    mail: formEmail,
    address: formAddress,
    dateofbirthday: formDob,
  };

  addUserToLocalStorage(savingData);
  form.reset();

  
});

function addUserToLocalStorage(userData, key = "userInformation") {
  //   const archiveData = JSON.stringify(userData);
  //   console.log(typeof archiveData);
  //   localStorage.setItem("userInfo", archiveData);
  localStorage.setItem(key, JSON.stringify(userData));
  reportingText.textContent = "Дані збережено🙌!";
}

function removeAllFromLocalStorage() {
  localStorage.clear();
  reportingText.textContent = "Дані успішно видалено😥!";
}

deletingButton.addEventListener("click", (event) => {
  event.preventDefault();
  removeAllFromLocalStorage();
  form.reset();
});
