const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// データ保存用
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 画面描画
function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    checkbox.addEventListener("change", function () {
      tasks[index].done = checkbox.checked;
      save();
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      save();
      render();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

// 保存
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 追加
addBtn.addEventListener("click", function () {
  const value = input.value;

  if (value === "") {
    alert("何か入力してね");
    return;
  }

  tasks.push({
    text: value,
    done: false
  });

  save();
  render();

  input.value = "";
});

// 初期表示
render();