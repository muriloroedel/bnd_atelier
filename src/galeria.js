document.addEventListener("DOMContentLoaded", () => {

const filtersRoot = document.getElementById("gallery-filters")
const gridRoot = document.getElementById("gallery-grid")
const noteRoot = document.getElementById("gallery-note")

const modal = document.getElementById("gallery-modal")
const modalImg = document.getElementById("gallery-modal-image")
const modalClose = document.getElementById("gallery-modal-close")
const modalPrev = document.getElementById("gallery-modal-prev")
const modalNext = document.getElementById("gallery-modal-next")

const categories = window.BND_GALLERY_CATEGORIES || []
const items = window.BND_GALLERY_ITEMS || []
const notes = window.BND_GALLERY_NOTES || {}

let activeCategory = "todos"
let visibleItems = []
let currentIndex = 0


/* ============================= */
/* FILTROS */
/* ============================= */

function getVisibleItems(){
if(activeCategory === "todos") return items
return items.filter(item => item.category === activeCategory)
}

function renderFilters(){

filtersRoot.innerHTML = categories.map(category => `
<button 
class="gallery-filter ${category.id === activeCategory ? "is-active" : ""}" 
data-category="${category.id}">
${category.label}
</button>
`).join("")

}


/* ============================= */
/* GRID */
/* ============================= */

function renderGrid(){

visibleItems = getVisibleItems()

gridRoot.innerHTML = visibleItems.map((item,index)=>`

<div 
class="gallery-photo-card ${index % 7 === 0 ? "is-wide" : ""}"
data-index="${index}">

<img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 50vw">

<div class="gallery-photo-meta">
<small>${categories.find(c=>c.id === item.category)?.label || ""}</small>
<strong>${item.title}</strong>
</div>

</div>

`).join("")

}


/* ============================= */
/* MODAL */
/* ============================= */

function openModal(index){
currentIndex = index
updateModal()
modal.classList.add("open")
document.body.classList.add("lightbox-open")
}

function closeModal(){
modal.classList.remove("open")
document.body.classList.remove("lightbox-open")
}

function updateModal(){
const item = visibleItems[currentIndex]
modalImg.src = item.image
modalImg.alt = item.alt
}

function nextImage(){
currentIndex++
if(currentIndex >= visibleItems.length) currentIndex = 0
updateModal()
}

function prevImage(){
currentIndex--
if(currentIndex < 0) currentIndex = visibleItems.length - 1
updateModal()
}


/* ============================= */
/* EVENTOS */
/* ============================= */

filtersRoot.addEventListener("click", e => {

const btn = e.target.closest("[data-category]")
if(!btn) return

activeCategory = btn.dataset.category

renderFilters()
renderGrid()

})


gridRoot.addEventListener("click", e => {

const card = e.target.closest("[data-index]")
if(!card) return

openModal(parseInt(card.dataset.index))

})


modalClose.addEventListener("click", closeModal)
modalNext.addEventListener("click", nextImage)
modalPrev.addEventListener("click", prevImage)

modal.addEventListener("click", e=>{
if(e.target === modal) closeModal()
})


document.addEventListener("keydown", e=>{

if(!modal.classList.contains("open")) return

if(e.key === "Escape") closeModal()
if(e.key === "ArrowRight") nextImage()
if(e.key === "ArrowLeft") prevImage()

})


/* ============================= */
/* HEIC NOTE */
/* ============================= */

function renderNote(){

const count = notes?.heic?.length || 0

if(!count){
noteRoot.innerHTML = ""
return
}

noteRoot.innerHTML = `
Existem ${count} imagens em formato HEIC. 
Converta para JPG ou PNG para melhor compatibilidade.
`

}


/* INIT */

renderFilters()
renderGrid()
renderNote()

})
