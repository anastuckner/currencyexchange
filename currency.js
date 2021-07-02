		
document.addEventListener('DOMContentLoaded', function(){
	let optionList = document.getElementById('base');
	let targetList = document.getElementById('target');
	fetch(`https://api.exchangerate.host/latest`)
		.then(response => response.json())
		.then(data =>{
			const rates = data.rates;
			const keys = [];
					
			for (key in rates){
				keys.push(`${key}`);
			}
					
			for (key in keys){
				optionList.options.add(new Option(keys[key], keys[key]));
				targetList.options.add(new Option(keys[key], keys[key]));
				}
					
		});


document.getElementById('convert').onclick = function() {
	const baseSelect = document.querySelector('#base').value;
	const targetSelect = document.querySelector('#target').value;
	const amount = document.querySelector('#amount').value;

	fetch(`https://api.exchangerate.host/convert?from=${baseSelect}&to=${targetSelect}`)
	.then(response => response.json())
	.then(data =>{
		const rate = data.info["rate"];
		if (rate!== null){
			const conversion = parseFloat(rate.toFixed(3))
			const answer = conversion*amount
			document.querySelector('#result').innerHTML = `${amount} ${baseSelect} is ${answer.toFixed(3)} ${targetSelect}`;
		}
		
		})
	.catch(error =>{
		console.log('Error', error);
		})
	};
});
						

	
			