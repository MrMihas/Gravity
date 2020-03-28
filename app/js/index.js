//эффект для кнопки

const buttons = document.querySelectorAll('.hero__button a');

buttons.forEach(function(btn){
btn.addEventListener("click", function(e){

	let x = e.clientX - e.target.offsetLeft;
	let y = e.clientY - e.target.offsetTop;

	let ripples = document.createElement('span');

	ripples.style.left = x + 'px';
	ripples.style.top = y + 'px';
	this.appendChild(ripples);
	setTimeout(function(){
		ripples.remove();
	}, 1000);

})
})