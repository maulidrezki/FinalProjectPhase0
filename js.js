//https://www.w3schools.com/jsref/met_element_queryselector.asp//

const buttons = document.querySelectorAll(".card-buttons button")
const sections = document.querySelectorAll(".card-section")
const card = document.querySelector(".card")

const handleButtonClick = (e) =>
{
    const targetSection = e.target.getAttribute("data-section")
    const section = document.querySelector(targetSection)
    targetSection !== "#about"
    
//https://www.w3schools.com/jsref/prop_element_classlist.asp//

    ? card.classList.add("is-active")
    : card.classList.remove("is-active")
    card.setAttribute("data-state", targetSection)
    sections.forEach((s) => s.classList.remove("is-active"))
    buttons.forEach((b) => b.classList.remove("is-active"))
    e.target.classList.add("is-active")
    section.classList.add("is-active")
};

buttons.forEach((object) => 
{
  object.addEventListener("click", handleButtonClick)
});
