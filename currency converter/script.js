// // Replace 'YOUR_API_KEY' with your actual API key from the exchange rate provider.
// const API_KEY = 'YOUR_API_KEY';
// const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

// async function convert() {
//   const amount = document.getElementById('amount').value;
//   const fromCurrency = document.getElementById('fromCurrency').value;
//   const toCurrency = document.getElementById('toCurrency').value;

//   if (!amount) {
//     alert("Please enter an amount.");
//     return;
//   }

//   try {
//     const response = await fetch(`${API_URL}${fromCurrency}`);
//     const data = await response.json();

//     if (data.result === "success") {
//       const rate = data.conversion_rates[toCurrency];
//       const convertedAmount = (amount * rate).toFixed(2);
//       document.getElementById('result').textContent = 
//         `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
//     } else {
//       document.getElementById('result').textContent = "Error fetching exchange rate.";
//     }
//   } catch (error) {
//     document.getElementById('result').textContent = "Error: Unable to fetch data.";
//     console.error("Error fetching exchange rate data:", error);
//   }
// }



const BASE_URL =
"https://2024-03-06.currency-api.pages.dev/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  let finalAmount = (data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]*parseInt(amount.value)).toFixed(2);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
