const select = document.querySelector("#select");
const addButton = document.getElementById("add");
const form = document.querySelector("form");
const fieldsetValues = [];
const addFieldSet = (date, nbPlaces) => {
  const id = fieldsetValues.length;
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("fieldset");
  fieldset.id = `fieldset-${id}`;
  fieldset.innerHTML = `
  <legend>Réservation</legend>

    <div class="form-group row">
        <div class="col-sm-4">
            <label> Date : ${date}</label>
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-4">
        <label> Nombres de places : ${nbPlaces}</label>
    </div>
`;
  fieldsetValues.push({
    date,
    nbPlaces,
    id,
    ref: fieldset,
  });
  form.insertBefore(fieldset, form[0]);
};

const datesToDisplay = [
  { value: "2024-01-06" },
  { value: "2024-01-13" },
  { value: "2024-01-20" },
  { value: "2024-01-27" },
];

datesToDisplay.forEach((date) => {
  const option = document.createElement("option");
  [option.value, option.text] = [date.value, date.value];
  select.appendChild(option);
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  const { date, nbPlaces } = Object.fromEntries(formdata);
  if (!(date && nbPlaces)) {
    alert("Veuillez remplir tous les champs");
    throw new Error("Veuillez remplir tous les champs");
  }
  addFieldSet(date, nbPlaces);
});

// fieldset element
// document.
