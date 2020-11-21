const btn = document.getElementById('btn')
const input = document.getElementById('password')
const alertBox = document.querySelector('.alertBox')
const copyBtn = document.querySelector('.copy')

btn.addEventListener('click', getPassword)
copyBtn.addEventListener('click', copyPassword)

function getPassword () {
	const chars = '0123456789abcdefhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]'
	const passwordLength = 16
	let password = ''

	for (let i = 0; i < passwordLength; i++) {
		const randomNumber = Math.floor(Math.random() * chars.length)
		password += chars.substring(randomNumber, randomNumber + 1)
	}

	input.value = password
	
	alertBox.innerHTML = `Password copied to the clipboard:<br><span class="password">${password}</span>`
}

function copyPassword () {
	const copyPassText = document.getElementById('password')

	copyPassText.select()

	document.execCommand('copy')
	
	copyPassText.setSelectionRange(0, 0)
	// document.getSelection().removeAllRanges()

	alertBox.classList.toggle('active')
	setTimeout(() => {
		alertBox.classList.toggle('active')
	}, 2000)
}