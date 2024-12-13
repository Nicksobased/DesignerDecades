// use variables to make your code shorter
var BalenciagaClicked = false;
var PradaClicked = false;
var RickClicked = false;

// declare your functions
function balenciaga() {
  BalenciagaClicked = true;
  PradaClicked = false;
  RickClicked = false;
  // Set the image source for Balenciaga
  document.getElementById("okay").src = "images/faces/Balenciaga.png";

  // Add CSS classes to adjust styling
  document.getElementById("maintext").classList.add("light-grey");
  document.getElementById("sidetext").classList.add("dark-grey");

  // Add text in the sidebar
  document.getElementById("sidetext").innerHTML =
    "In the year 2000, Balenciaga, under the creative direction of Nicolas Ghesqui\u00E8re, was entering a period of dramatic transformation that would soon redefine the fashion house. Ghesqui\u00E8re, who took the reins in 1997, was instrumental in modernizing Balenciaga's heritage while infusing it with a fresh, edgy sensibility. For the Spring/Summer 2000 collection, he introduced a mix of minimalist yet innovative designs, blending architectural shapes with futuristic elements. The collection featured sleek, structured outerwear, exaggerated silhouettes, and sculptural tailoring, setting the tone for what would become Ghesqui\u00E8res signature style. He combined luxurious fabrics with bold, high-tech detailing, showcasing an evolving narrative of high fashion that was both forward-thinking and distinctly Balenciaga. This period marked a shift away from the house's classic, more formal styles, embracing youth culture and a more casual, urban aesthetic that resonated with a new generation of fashion-forward consumers. By 2000, Balenciaga was well on its way to becoming one of the most influential and relevant fashion houses of the 21st century.";
}

function prada() {
  BalenciagaClicked = false;
  PradaClicked = true;
  RickClicked = false;
  // Set the image source for Prada
  document.getElementById("okay").src = "images/faces/prada.png"; // Ensure you include the correct image extension

  // Add CSS classes for Prada
  document.getElementById("maintext").classList.add("light-grey");
  document.getElementById("sidetext").classList.add("dark-grey");
  // Add text in the sidebar
  document.getElementById("sidetext").innerHTML =
    "In 2010, Prada, under the creative direction of Miuccia Prada, continued to cement its reputation as a brand that effortlessly balanced intellectualism with high fashion. The collections during this year were characterized by a refined mix of classic elegance and modern experimentation. For the Spring/Summer 2010 collection, Miuccia embraced bold prints, bright colors, and a playful, retro-futuristic vibe, combining sophisticated cuts with quirky elements like graphic florals and stripes. This collection, with its emphasis on youthful femininity, drew inspiration from the 1950s and 1960s, featuring full skirts, clean lines, and polished looks, but with a contemporary twist. Prada also made a statement with its footwear, introducing towering platforms and metallic finishes, which became instantly iconic. The Fall/Winter 2010 collection, on the other hand, took a darker turn, focusing on the juxtaposition of luxury and utilitarianism with heavy use of fur, military-inspired tailoring, and bold textures like tweed and brocade. Throughout 2010, Prada’s designs remained cerebral yet highly wearable, merging cutting-edge fashion with intellectual rigor, reaffirming the brand’s status as both a cultural force and a symbol of modern luxury.";
}

function rick() {
  BalenciagaClicked = false;
  PradaClicked = false;
  RickClicked = true;
  // Set the image source for Rick Owens 2020
  document.getElementById("okay").src = "images/faces/rickowens.png"; // Ensure the correct image

  // Add CSS classes for Rick Owens 2020
  document.getElementById("maintext").classList.add("light-grey");
  document.getElementById("sidetext").classList.add("dark-grey");

  // Make sure the text is set properly in the sidetext div
  document.getElementById("sidetext").innerHTML =
    "In 2020, Rick Owens continued to push the boundaries of fashion with his signature dark, avant-garde aesthetic. Known for his unconventional and often provocative designs, Owens embraced a blend of punk, goth, and grunge influences while reimagining traditional silhouettes. His collections featured sculptural shapes, exaggerated proportions, and a raw, deconstructed feel. For example, his Spring/Summer 2020 collection showcased large, flowing garments with sharp cuts, asymmetry, and oversized outerwear, reflecting his penchant for challenging conventional notions of beauty and form. Owens also explored gender fluidity and body positivity, creating pieces that defied traditional gender norms and embraced diverse body types. His use of neutral tones like black, gray, and white, paired with bold statement pieces, reinforced his distinct style that is both dystopian and futuristic, while maintaining an air of elegance. The 2020 collections underscored Owens' status as a fashion provocateur, unafraid to confront societal norms through clothing.";

  // Optional: Log the content to the console to ensure it's being added correctly
  console.log(document.getElementById("sidetext").innerHTML);
}
// Function to play the click sound
function playClickSound() {
  const clickSound = document.getElementById("click-sound");
  clickSound.play(); // Plays the click sound
  clickSound.volume = 3100.0;
}

// Attach the playClickSound function to clickable elements
const clickableElements = document.querySelectorAll(".clickable1");

clickableElements.forEach((element) => {
  element.addEventListener("click", playClickSound);
});

// Existing checkPassword function
function checkPassword() {
  const enteredPassword = document.getElementById("passwordInput").value;
  const correctPassword = "design2024"; // This is the correct password

  if (enteredPassword === correctPassword) {
    // Hide the Start Menu
    playStartupSound(); // Play the sound when password is correct
    document.getElementById("startMenu").style.display = "none";

    // Show the main content
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Add event listener for the Enter key in the password input field
document
  .getElementById("passwordInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkPassword(); // Call checkPassword when Enter is pressed
    }
  });

function windowsbutton() {
  // Clear image and text
  document.getElementById("maintext").classList.remove("light-grey");
  document.getElementById("sidetext").classList.remove("dark-grey");
  document.getElementById("okay").src = ""; // Remove image source
  document.getElementById("sidetext").innerHTML = ""; // Clear text
}

function resetStyles() {
  // Reset all grey and translucent styles
  document.getElementById("maintext").classList.remove("light-grey");
  document.getElementById("sidetext").classList.remove("dark-grey");
  document.getElementById("folder-balenciaga").classList.remove("translucent");

  document.getElementById("maintext").classList.remove("light-grey");
  document.getElementById("sidetext").classList.remove("dark-grey");
  document.getElementById("folder-prada").classList.remove("translucent");

  document.getElementById("maintext").classList.remove("light-grey");
  document.getElementById("sidetext").classList.remove("dark-grey");
  document.getElementById("folder-rick").classList.remove("translucent");

  // Reset the image and text
  document.getElementById("okay").src = ""; // Reset image
  document.getElementById("sidetext").innerHTML = ""; // Reset text
}
// Function to play the Windows startup sound
function playStartupSound() {
  var sound = document.getElementById("startup-sound");
  sound.play();
}

// Function to check password and move to main conte

function playRunwayMusic() {
  if (BalenciagaClicked == true) {
    console.log("Balenciaga");
    var sound = document.getElementById("Balenci");
    sound.play();
  } else if (PradaClicked == true) {
    console.log("Prada");
    var sound = document.getElementById("pradaa");
    sound.play();
  } else if (RickClicked == true) {
    console.log("Rick");
    var sound = document.getElementById("Rickk");
    sound.play();
  } else {
    console.log("NothingHasBeenSelected");
  }
}
