async function fetchData() {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
    );
    const data = await response.json();
    console.log(data);
    const manufacturers = data.Results.filter(
      (manufacturer) => manufacturer.VehicleTypes.length >= 3
    );

    const modifiedManufacturers = manufacturers.map((manufacturer) => ({
      country: manufacturer.Country,
      name: manufacturer.Mfr_CommonName,
      fullName: manufacturer.Mfr_Name,
      amountVehicleTypes: manufacturer.VehicleTypes.length,
    }));
    displayAsTable(modifiedManufacturers);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
function displayAsTable(data) {
  const tbody = document.querySelector("tbody");
  data.forEach((item) => {
    const row = document.createElement("tr");
    const values = Object.values(item);
    values.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
}

fetchData();
