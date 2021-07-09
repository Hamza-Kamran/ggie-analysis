function ToggleCountry(element_name) {
element = document.getElementById(element_name)
  if (element_name == "ten-countries") {
    element.classList.remove("hidden");
    document.getElementById("all-countries").classList.add("hidden")
  }
  else if (element_name== "all-countries") {
    element.classList.remove("hidden");
    document.getElementById("ten-countries").classList.add("hidden");
  }
}


function ToggleState(element_name) {
  element = document.getElementById(element_name);
  if (element_name == "ten-states") {
    element.classList.remove("hidden");
    document.getElementById("all-states").classList.add("hidden");
  }
  else if (element_name == "all-states") {
    element.classList.remove("hidden");
    document.getElementById("ten-states").classList.add("hidden");
  }
}


function ToggleCounty(element_name) {
element = document.getElementById(element_name)
  if (element_name == "ten-counties") {
    element.classList.remove("hidden");
    document.getElementById("all-counties").classList.add("hidden");
  }
  else if (element_name== "all-counties") {
    element.classList.remove("hidden");
    document.getElementById("ten-counties").classList.add("hidden");
  }
}


//possible values:
//two_year_registrations
//six_month_registrations
//last_month_registrations

function ToggleRegistration(element_name) {
  element = document.getElementById(element_name);
  console.log("I am here")
  if (element_name == "two_year_registrations") {
    element.classList.remove("hidden");
    document.getElementById("six_month_registrations").classList.add("hidden");
    document.getElementById("last_month_registrations").classList.add("hidden");

  }
  else if (element_name == "six_month_registrations") {
    element.classList.remove("hidden");
    document.getElementById("two_year_registrations").classList.add("hidden");
    document.getElementById("last_month_registrations").classList.add("hidden");
  }
  else if (element_name == "last_month_registrations") {
    element.classList.remove("hidden");
    document.getElementById("two_year_registrations").classList.add("hidden");
    document.getElementById("six_month_registrations").classList.add("hidden");

  }
}
