/*===== Menu =====*/

((d) => {
	const $btnMenu = d.querySelector('.menu-btn'),
  $menu = d.querySelector('.menu');
	
  $btnMenu.addEventListener('click', (e) => {
		$btnMenu.firstElementChild.classList.toggle('none');
    $btnMenu.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });
	
  d.addEventListener('click', (e) => {
		if (!e.target.matches('.menu a')) return false;
		
    $btnMenu.firstElementChild.classList.remove('none');
    $btnMenu.lastElementChild.classList.add('none');
    $menu.classList.remove('is-active');
  });
})(document);

/*===== Form =====*/

const $form = document.querySelector('#form')

		$form.addEventListener('submit', handleSubmit)


		async function handleSubmit(event) {
			event.preventDefault()

			const form = new FormData(this)
			const response = await fetch(this.action, {
				method: this.method,
				body: form,
				headers: {
					'Accept': 'application/json'
				}
			})

			if (response.ok) {
				this.reset()
				alert('Gracias por haberme contactado, pronto daremos respuesta a tu solicitud.')
			}
		}