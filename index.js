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
    // Ensure #error-box is hidden,
    // show generated link and enable copy button
    document.getElementById("error-box").style.display = "none";
    document.getElementById("generatedLinkBox").value = generatedText;
    document.getElementById("generated-link").style.display = "block";
    document.getElementById("copyButton").removeAttribute("disabled");
  }
}

function copyLink() {
  var linkBox = document.getElementById("generatedLinkBox");

  linkBox.select();
  linkBox.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(linkBox.value);

  alert("Link copied!");
}
