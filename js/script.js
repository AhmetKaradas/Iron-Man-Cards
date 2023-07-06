const boxs = document.querySelectorAll(".marks");

boxs.forEach((marks) => {
  marks.addEventListener("click", () => {
    removeActiveClasses();
    marks.classList.add("active");
  });
});

function removeActiveClasses () {
    boxs.forEach((marks) => {
        marks.classList.remove('active');
    })
}