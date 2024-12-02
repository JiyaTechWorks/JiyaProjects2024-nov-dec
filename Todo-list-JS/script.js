const listBtn = document.querySelectorAll(".list button");
const inputItem = document.getElementById("input-item");

function addItem() {
  let inputItems = document.getElementById("input-item").value;
  console.log(inputItems);
  inputItems.value = "";
}

for (let i = 0; i <= listBtn.length; i++) {
  listBtn[i].addEventListener("click", function () {
    console.log(`clicked ${i}`);
    let parentLi = this.parentElement;
    parentLi.style.display = "none";
  });
}

function checkBox(item) {
  item.classList.toggle("checked");
}
