const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const clearBtn = document.querySelector('.clear');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


function checkBill() {
	if (price.value === '' || people.value === '' || tip.value === 0) {
		error.textContent = 'Zapomniałeś uzupełnić wszystkie pola!';
		costInfo.style.display = 'none';
	} else {
		error.textContent = '';
		showBill();
	}
}
function showBill() {
	const sum =
		(parseFloat(price.value) + parseInt(price.value) * parseFloat(tip.value)) /
		parseInt(people.value);

	costInfo.style.display = 'block';
	cost.textContent = sum.toFixed(2);
}

const clear  = () => {
    price.value = '';
    tip.value = 0;
    people.value = '';
}
countBtn.addEventListener('click', checkBill);
clearBtn.addEventListener('click', clear)
