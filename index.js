//
// WaMe-Generator: Generate wa.me link for WhatsApp contact
//

// Wa.Me prefix
const linkPrefix = "https://wa.me/";

// Generate link
function genLink(number) {
  return linkPrefix + number;
}

// A function that will be executed
// when user clicks the button, to start a new world
// Ehm, I mean, to start all processes
function startGen() {
  inputVal = document.getElementById("phoneInput").value;
  var generatedText = genLink(inputVal);

  if (document.getElementById("phoneInput").value == "") {
    // Ensure #generated-link is hidden
    // and show error if #phone-input is empty.
    document.getElementById("generated-link").style.display = "none";
    document.getElementById("alert-box").innerHTML = "Error: No phone number inputted!";
    document.getElementById("error-box").style.display = "block";
  } else {
    // Ensure #error-box is hidden
    // and show generated link
    document.getElementById("error-box").style.display = "none";
    document.getElementById("generatedLinkBox").value = generatedText;
    document.getElementById("generated-link").style.display = "block";
  }
}
