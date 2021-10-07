const answer = document.getElementById("answer")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener('submit', (e) => {
let messages = []
if (answer.value === 'yes') {
    location.href = 'https://www.youtube.com/watch?v=iik25wqIuFo';
}
if (answer.value === 'no') {
    messages.push('PHẢI LÀ CÓ!')
}
if (answer.value !== 'yes' || answer.value != 'no') {
    messages.push('Nhập Có/Không')
}
})