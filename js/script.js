const pageViews = document.getElementById('views-input')
const switchBillingPeriod = document.getElementById('switch-checkbox')
const viewsSpan = document.querySelector('.views')
const priceSpan = document.querySelector('.price')
const billingPeriodSpan = document.querySelector('.period')

pageViews.addEventListener('input', () => {
  updatePrices()
})

switchBillingPeriod.addEventListener('click', () => {
  const switchButton = document.querySelector('.switch-btn')

  if (switchBillingPeriod.checked === true) {
    billingPeriodSpan.innerHTML = 'year'

    updatePrices()

    switchButton.classList.add('green')
  } else {
    billingPeriodSpan.innerHTML = 'month'

    updatePrices()

    switchButton.classList.remove('green')
  }
})

function updatePrices() {
  if (pageViews.value === '1') {
    if (switchBillingPeriod.checked == true) {
      const price = (8 - 8 * 0.25) * 12

      priceSpan.innerHTML = `\$${price}.00`
    } else {
      priceSpan.innerHTML = '$8.00'
    }

    viewsSpan.innerHTML = '10k'
  }

  if (pageViews.value === '2') {
    if (switchBillingPeriod.checked == true) {
      const price = (12 - 12 * 0.25) * 12

      priceSpan.innerHTML = `\$${price}.00`
    } else {
      priceSpan.innerHTML = '$12.00'
    }

    viewsSpan.innerHTML = '50k'
  }

  if (pageViews.value === '3') {
    if (switchBillingPeriod.checked == true) {
      const price = (16 - 16 * 0.25) * 12

      priceSpan.innerHTML = `\$${price}.00`
    } else {
      priceSpan.innerHTML = '$16.00'
    }

    viewsSpan.innerHTML = '100k'
  }

  if (pageViews.value === '4') {
    if (switchBillingPeriod.checked == true) {
      const price = (24 - 24 * 0.25) * 12

      priceSpan.innerHTML = `\$${price}.00`
    } else {
      priceSpan.innerHTML = '$24.00'
    }

    viewsSpan.innerHTML = '500k'
  }

  if (pageViews.value === '5') {
    if (switchBillingPeriod.checked == true) {
      const price = (36 - 36 * 0.25) * 12

      priceSpan.innerHTML = `\$${price}.00`
    } else {
      priceSpan.innerHTML = '$36.00'
    }

    viewsSpan.innerHTML = '1M'
  }
}
