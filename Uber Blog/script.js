let abriu = false
function faqres(p){
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')
    let res3 = document.getElementById('res3')
    let res4 = document.getElementById('res4')
    let res5 = document.getElementById('res5')

    if (!abriu){
      if (p == 1 ){
        document.getElementById('faq1').style.borderBottom = 'none'
        document.getElementById('plus1').removeAttribute('class')
        document.getElementById('plus1').setAttribute('class', 'fa fa-times plus1')
        res1.style.borderBottom = '1px solid rgb(209, 209, 209) '
        res1.style.marginBottom = '15px'
        res1.style.paddingLeft = '15px'
        res1.style.paddingRight = '25px'
        res1.style.height = '100px'
        res1.innerHTML = ('No, your booking is made with a local cab operator and so your driver and vehicle will be provided by them. You’ll receive the driver and vehicle details via the Uber app when you confirm your booking, along with a driver ETA and the local operator’s number so you can contact them if needed.')
        abriu = true
      } 
      else  if (p == 2){
        document.getElementById('faq2').style.borderBottom = 'none'
        document.getElementById('plus2').removeAttribute('class')
        document.getElementById('plus2').setAttribute('class', 'fa fa-times plus2')
        res2.style.borderBottom = '1px solid rgb(209, 209, 209) '
        res2.style.marginBottom = '15px'
        res2.style.paddingLeft = '15px'
        res2.style.paddingRight = '25px'
        res2.style.height = '50px'
        res2.innerHTML = ('The local cab operator sets the cost, and cashless payment is made via the app as usual.')
        abriu = true
      }  
      else if (p == 3){
        document.getElementById('faq3').style.borderBottom = 'none'
        document.getElementById('plus3').removeAttribute('class')
        document.getElementById('plus3').setAttribute('class', 'fa fa-times plus3')
        res3.style.borderBottom = '1px solid rgb(209, 209, 209) '
        res3.style.width = '100%'
        res3.style.marginBottom = '15px'
        res3.style.paddingLeft = '15px'
        res3.style.paddingRight = '25px'
        res3.style.height = '40px'
        res3.innerHTML = ('Uber will be taking a small service fee on each Local Cab trip. ')
        abriu = true
      }  
      else if (p == 4){
        document.getElementById('faq4').style.borderBottom = 'none'
        document.getElementById('plus4').removeAttribute('class')
        document.getElementById('plus4').setAttribute('class', 'fa fa-times plus4')
        res4.style.borderBottom = '1px solid rgb(209, 209, 209) '
        res4.style.marginBottom = '15px'
        res4.style.paddingLeft = '15px'
        res4.style.paddingRight = '25px'
        res4.style.height = '60px'
        res4.innerHTML = ('Yes, anyone who opens the Uber app in these cities will be able to book a trip via Uber’s Local Cab option.')
        abriu = true
      }  
      else{
        document.getElementById('faq5').style.borderBottom = 'none'
        document.getElementById('plus5').removeAttribute('class')
        document.getElementById('plus5').setAttribute('class', 'fa fa-times plus5')
        res5.style.borderBottom = '1px solid rgb(209, 209, 209) '
        res5.style.marginBottom = '15px'
        res5.style.paddingLeft = '15px'
        res5.style.paddingRight = '25px'
        res5.style.height = '60px'
        res5.innerHTML = ('The local cab operator sets the cost, and cashless payment is made via the app as usual.')
        abriu = true
      }   
    }
    else{
        document.getElementById('faq1').style.borderBottom = '1px solid rgb(209, 209, 209) '
        res1.innerHTML = ('')
        res1.style.height = '0px'
        res1.style.borderBottom = 'none'
        document.getElementById('plus1').removeAttribute('class')
        document.getElementById('plus1').setAttribute('class', 'fa fa-plus plus1')
        document.getElementById('faq2').style.borderBottom = '1px solid rgb(209, 209, 209) '
        res2.innerHTML = ('')
        res2.style.height = '0px'
        res2.style.borderBottom = 'none'
        document.getElementById('plus2').removeAttribute('class')
        document.getElementById('plus2').setAttribute('class', 'fa fa-plus plus2')
        document.getElementById('faq3').style.borderBottom = '1px solid rgb(209, 209, 209) '
        res3.innerHTML = ('')
        res3.style.height = '0px'
        res3.style.borderBottom = 'none'
        document.getElementById('plus3').removeAttribute('class')
        document.getElementById('plus3').setAttribute('class', 'fa fa-plus plus3')
        document.getElementById('faq4').style.borderBottom = '1px solid rgb(209, 209, 209) '
        res4.innerHTML = ('')
        res4.style.height = '0px'
        res4.style.borderBottom = 'none'
        document.getElementById('plus4').removeAttribute('class')
        document.getElementById('plus4').setAttribute('class', 'fa fa-plus plus4')
        document.getElementById('faq5').style.borderBottom = '1px solid rgb(209, 209, 209) '
        res5.innerHTML = ('')
        res5.style.height = '0px'
        res5.style.borderBottom = 'none'
        document.getElementById('plus5').removeAttribute('class')
        document.getElementById('plus5').setAttribute('class', 'fa fa-plus plus5')
        abriu = false
    }
}