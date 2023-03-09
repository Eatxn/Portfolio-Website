//Sticky Navigation bar
const header = document.querySelector('.header')
const nav = document.querySelector('nav')
const navHeight = nav.getBoundingClientRect().height

let navObserverCallback = function(entries,navObserver) {
    entries.forEach(entry => 
        {if(!entry.isIntersecting) {nav.classList.add('sticky')} 
        else {nav.classList.remove('sticky')}})
}

let navObserverOptions = {
    root:null,
    threshold: 0.1,
    rootmargin:`-${navHeight}px`
}

let navObserver = new IntersectionObserver(navObserverCallback,navObserverOptions);

navObserver.observe(header)










//Disappearing links on hover
//Makes the other links disappear when one is hovered over
const navLinks = document.querySelector('.nav__links')
const navLink = document.querySelector('.nav__link')

// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const navLink = e.target;
      const navSiblings = navLink.closest('nav').querySelectorAll('.nav__link');
  
      navSiblings.forEach(el => {
        if (el !== navLink) el.style.opacity = this;
      });
    }
  };
  
  // Passing "argument" into handler
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));
