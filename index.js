const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

const btnLike2 = document.getElementById("btnLike2")
const countLike2 = document.getElementById("countLike2")

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)

const btndisLike1 = document.getElementById("btndisLike1")
const countdisLike1 = document.getElementById("countdisLike1")

function clickdisLike1(){
  let totaldisLikes = parseInt(countdisLike1.value) + 1
  countdisLike1.textContent = totaldisLikes.toString()
}
btndisLike1.addEventListener("click",clickdisLike1)

const btndisLike2 = document.getElementById("btndisLike2")
const countdisLike2 = document.getElementById("countdisLike2")

function clickdisLike2(){
  let totaldisLikes = parseInt(countdisLike2.value) + 1
  countdisLike2.textContent = totaldisLikes.toString()
}
btndisLike2.addEventListener("click",clickdisLike2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click", submitComment)
