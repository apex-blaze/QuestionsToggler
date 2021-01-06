//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    btns.forEach(function (item) {
      if (item.parentElement.parentElement !== question) {
        item.parentElement.parentElement.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
