const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let anchors = Object.values(siteContent.nav)
let allAnchors = document.querySelectorAll('a')

for (let i = 0; i < allAnchors.length; i++) {
  allAnchors[i].textContent = anchors[i]
}


const title = document.querySelector('h1')
title.textContent = siteContent.cta['h1']

let button = document.querySelector('button')
button.textContent = siteContent.cta['button']

let ctaImage = document.getElementById('cta-img')
ctaImage.setAttribute('src', siteContent.cta['img-src'])

let featuresHeader = document.querySelector('.top-content .text-content h4')
featuresHeader.textContent = siteContent["main-content"]["features-h4"]

let featuresP = document.querySelector('.top-content .text-content p')
featuresP.textContent = siteContent["main-content"]["features-content"]

let aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
aboutHeader.textContent = siteContent["main-content"]["about-h4"]

let aboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p')
aboutP.textContent = siteContent["main-content"]["features-content"]

let midImage = document.getElementById('middle-img')
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let servicesHeader = document.querySelector('.bottom-content .text-content h4')
servicesHeader.textContent = siteContent["main-content"]["services-h4"]

let servicesP = document.querySelector('.bottom-content .text-content p')
servicesP.textContent = siteContent["main-content"]["services-content"]

let productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productHeader.textContent = siteContent["main-content"]["product-h4"]

let productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productP.textContent = siteContent["main-content"]["product-content"]

let visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionHeader.textContent = siteContent["main-content"]["vision-h4"]

let visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionP.textContent = siteContent["main-content"]["vision-content"]

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent.contact["contact-h4"]

let address = document.querySelector('.contact p:nth-of-type(1)')
address.textContent = siteContent.contact.address

let phone = document.querySelector('.contact p:nth-of-type(2)')
phone.textContent = siteContent.contact.phone

let email = document.querySelector('.contact p:nth-of-type(3)')
email.textContent = siteContent.contact.email

let footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright

allAnchors.forEach(anchor => {
  anchor.style.color = 'green'
})

const nav = document.querySelector('nav')


const newLinkOne = {
  href: '#',
  textContent: 'Location',
}

const newlink = document.createElement('a')

newlink.href = newLinkOne.href
newlink.textContent = newLinkOne.textContent

nav.appendChild(newlink)

const newLinkTwo = {
  href: '#',
  textContent: 'Home'
}

const newlinktwo = document.createElement('a')

newlinktwo.href = newLinkTwo.href
newlinktwo.textContent = newLinkTwo.textContent

nav.prepend(newlinktwo)

newlinktwo.style.color = 'green'
newlink.style.color = 'green'