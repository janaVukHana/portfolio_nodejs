// set copyright year in footer
const copyrightYearUI = document.querySelector('.copyright-year')
const year = new Date().getFullYear()
copyrightYearUI.textContent = year

// 4 smooth scrolling
// THIS ONE IS COPY FROM W3 SCHOOL WEB SITE

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '' && this.hash !== '#home') {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash
      console.log(hash)
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        },
      )
    } // End if
    // smooth scrolling not working in chrome for this
    // probably one of the problems is fixed navbar
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })
})

// navigation links .active on scroll

const navigationLinks = document.querySelectorAll('nav a')
const sections = document.querySelectorAll('section')

window.onscroll = () => {
  var current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id')
      // console.log(current);
    }
  })

  navigationLinks.forEach((link) => {
    link.classList.remove('active')
    if (link.classList.contains(current)) {
      link.classList.add('active')
    } else if (current === '') {
      navigationLinks[0].classList.add('active')
    }
  })
}

// handling form
const form = document.querySelector('form')
const inputEmail = document.querySelector('#email')
const inputFName = document.querySelector('#fName')
const inputLName = document.querySelector('#lName')
const textMessage = document.querySelector('#message')
const button = document.querySelector('button')
const formSubmitMessage = document.querySelector('.form-submit-message')

form.addEventListener('submit', (e) => {
  if (
    inputEmail.value &&
    inputFName.value &&
    inputLName.value &&
    textMessage.value
  ) {
    formSubmitMessage.style.display = 'block'
    setTimeout(function () {
      formSubmitMessage.style.display = 'none'
      document.querySelector('form').reset()
    }, 2000)
  }

  // submit form and then reset form values
  document.querySelector('form').submit()

  console.log('all fields are there')
})

//                                        DOING SOME TESTS


// animation test
const projects = document.querySelectorAll('#work .col')
const work = document.getElementById('work')
window.addEventListener('scroll', (e) => {
  const elDistanceToTop = window.pageYOffset + work.getBoundingClientRect().top

  if (window.pageYOffset > elDistanceToTop - 150) {
    console.log('now add class')
    projects.forEach((project, index) => {
      setTimeout(() => {
        project.classList.add('animate')
      }, 500 * index)
    })
  }
})
