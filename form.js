/*===== Form =====*/
export default function form(submit, handleSubmit) {
  const $form = document.querySelector("#form");

  $form.addEventListener("submit", handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      this.reset();
      alert(
        "Gracias por haberme contactado, pronto daremos respuesta a tu solicitud."
      );
    }
  }
}
