/*===== Form =====*/

const d = document;

export default function contactFormSubmit(){
  const $form = d.querySelector(".contact__form"),
  $spinner = d.querySelector(".contact__form-spinner"),
  $response = d.querySelector(".contact__form-response");


$form.addEventListener("submit",(e) => {
  e.preventDefault();
  $spinner.classList.remove("none");
  fetch("https://formsubmit.co/ajax/9b84a8f87d2526fdc839483f1ab8409b",{
    method:"POST",
    body:new FormData(e.target),
  })
  .then(res=> res.ok ? res.json():Promise.reject(res))
  .then(json => {
    console.log(json);
    location.hash = "#thank";
    $form.reset();
  })
  .catch(err=> {
    console.log(err);
    let message = err.statusText || "Se origíno un error al enviar, intenta nuevamente :)"
    $response.querySelector("h3").innerHTML = `Error${err.status}: ${message}`;
  }).finally(()=> {
    $spinner.classList.add("none");
    setTimeout(()=>{
      location.hash = "#close"
    },3000);
  })
});
}