const remembermebox = document.querySelector('.checkbox')
const check = document.querySelector('.checked')
let remember = false

remembermebox.addEventListener('click', ()=>{
    if (!remember){
        check.classList.toggle('active')
        remembermebox.style.background = '#ffc632'
        remembermebox.style.border = '1px solid #ffc632'
        remember = true
    }
    else{
        check.classList.toggle('active')
        remembermebox.style.background = 'transparent'
        remembermebox.style.border = '1px solid #afb6c2'
        remember = false
    }
    
})