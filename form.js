/*===== Form =====*/

const d = document;

export default function contactFormSubmit(){
  const $form = d.querySelector(".contact__form"),
  $response = d.querySelector(".form__response-text"),
  $spinner = d.querySelector(".contact__form-spinner"),
  $text = d.querySelector(".form__response-text");

$form.addEventListener("submit",(e) => {
  e.preventDefault();
  location.hash = "#thank";
  $spinner.classList.remove("none");
  $text.classList.add("none")

  fetch("https://formsubmit.co/ajax/9b84a8f87d2526fdc839483f1ab8409b",{
    method:"POST",
    body:new FormData(e.target),
  })
  .then(res=> res.ok ? res.json():Promise.reject(res))
  .then(json => {
    console.log(json);
    $form.reset();
  })
  .catch(err=> {
    console.log(err);
    let message = err.statusText || "Se origíno un error al enviar, intenta nuevamente :)"
    $response.querySelector("h3").innerHTML = `Error${err.status}: ${message}`;
  }).finally(()=> {
    $spinner.classList.add("none");
    $text.classList.remove("none");
    setTimeout(()=>{
      location.hash = "#close"
    },3000);
  })
});
}