const toggleSubmit = () => {
  const checkbox = document.getElementById("agree-check");

  const getCheckboxValue = () => checkbox.checked;

  const submit = document.getElementById("submit");

  checkbox.addEventListener("click", () => {
    let isChecked = getCheckboxValue();
    submit.disabled = !isChecked;
  });
};

const validateEmail = () => {
  const submit = document.getElementById("submit");
  const email = document.getElementById("email");

  submit.addEventListener("click", (e) => {
    const input = email.value;
    if (input.length === 0) {
      alert('Please enter an email address');
      e.preventDefault();
    }
  });
};

toggleSubmit();
validateEmail();