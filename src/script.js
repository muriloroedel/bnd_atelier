document.addEventListener("DOMContentLoaded", () => {
const toggle = document.getElementById("theme-toggle")
const menuToggle = document.getElementById("menu-toggle")
const nav = document.getElementById("site-nav")
const header = document.querySelector(".header")
const navOverlay = document.createElement("div")
const lightbox = document.createElement("div")

navOverlay.className = "nav-overlay"
document.body.appendChild(navOverlay)

lightbox.className = "lightbox"
lightbox.innerHTML = `
<div class="lightbox-backdrop" data-lightbox-close="true"></div>
<div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Visualizador de imagens">
    <button class="lightbox-close" type="button" data-lightbox-close="true" aria-label="Fechar imagem">&#10005;</button>
    <div class="lightbox-topbar">
        <strong id="lightbox-title">Galeria</strong>
        <span id="lightbox-counter">1 / 1</span>
    </div>
    <button class="lightbox-nav prev" type="button" data-lightbox-step="-1" aria-label="Imagem anterior">&#8249;</button>
    <div class="lightbox-stage">
        <img id="lightbox-image" src="" alt="">
    </div>
    <button class="lightbox-nav next" type="button" data-lightbox-step="1" aria-label="Proxima imagem">&#8250;</button>
</div>`
document.body.appendChild(lightbox)

const lightboxTitle = lightbox.querySelector("#lightbox-title")
const lightboxCounter = lightbox.querySelector("#lightbox-counter")
const lightboxImage = lightbox.querySelector("#lightbox-image")
const lightboxState = {
title: "Galeria",
items: [],
index: 0
}

const syncHeaderState = () => {
if(!header){
return
}

if(header.classList.contains("header-solid") || window.scrollY > 12){
header.classList.add("scrolled")
}else{
header.classList.remove("scrolled")
}
}

const closeMenu = () => {
if(!menuToggle || !nav){
return
}

nav.classList.remove("active")
navOverlay.classList.remove("active")
document.body.classList.remove("menu-open")
menuToggle.setAttribute("aria-expanded", "false")
menuToggle.setAttribute("aria-label", "Abrir menu")
menuToggle.innerHTML = "&#9776;"
}

const openMenu = () => {
if(!menuToggle || !nav){
return
}

nav.classList.add("active")
navOverlay.classList.add("active")
document.body.classList.add("menu-open")
menuToggle.setAttribute("aria-expanded", "true")
menuToggle.setAttribute("aria-label", "Fechar menu")
menuToggle.innerHTML = "&#10005;"
}

const renderLightbox = () => {
if(!lightboxState.items.length){
return
}

const activeItem = lightboxState.items[lightboxState.index]
lightboxTitle.textContent = lightboxState.title
lightboxCounter.textContent = `${lightboxState.index + 1} / ${lightboxState.items.length}`
lightboxImage.src = activeItem.src
lightboxImage.alt = activeItem.alt || lightboxState.title
}

const closeLightbox = () => {
lightbox.classList.remove("is-open")
document.body.classList.remove("lightbox-open")
}

const openLightbox = ({ title = "Galeria", items = [], startIndex = 0 } = {}) => {
if(!items.length){
return
}

lightboxState.title = title
lightboxState.items = items
lightboxState.index = Math.min(Math.max(startIndex, 0), items.length - 1)
renderLightbox()
lightbox.classList.add("is-open")
document.body.classList.add("lightbox-open")
}

const stepLightbox = (direction) => {
if(!lightboxState.items.length){
return
}

lightboxState.index = (lightboxState.index + direction + lightboxState.items.length) % lightboxState.items.length
renderLightbox()
}

window.BNDLightbox = {
open: openLightbox,
close: closeLightbox
}

if(toggle && localStorage.getItem("theme") === "dark"){
document.documentElement.setAttribute("data-theme","dark")
toggle.checked = true
}

if(toggle){
toggle.addEventListener("change", () => {
if(toggle.checked){
document.documentElement.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
}else{
document.documentElement.removeAttribute("data-theme")
localStorage.setItem("theme","light")
}
})
}

if(menuToggle && nav){
menuToggle.addEventListener("click", () => {
const isOpen = nav.classList.contains("active")

if(isOpen){
closeMenu()
}else{
openMenu()
}
})

nav.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
closeMenu()
})
})
}

navOverlay.addEventListener("click", closeMenu)

lightbox.addEventListener("click", (event) => {
const closeTrigger = event.target.closest("[data-lightbox-close]")
if(closeTrigger){
closeLightbox()
return
}

const stepTrigger = event.target.closest("[data-lightbox-step]")
if(stepTrigger){
stepLightbox(Number(stepTrigger.dataset.lightboxStep))
}
})

document.addEventListener("keydown", (event) => {
if(event.key === "Escape"){
if(lightbox.classList.contains("is-open")){
closeLightbox()
return
}
closeMenu()
}

if(!lightbox.classList.contains("is-open")){
return
}

if(event.key === "ArrowLeft"){
stepLightbox(-1)
}

if(event.key === "ArrowRight"){
stepLightbox(1)
}
})

window.addEventListener("resize", () => {
if(window.innerWidth > 768){
closeMenu()
}
})

window.addEventListener("scroll", syncHeaderState)
syncHeaderState()
})
