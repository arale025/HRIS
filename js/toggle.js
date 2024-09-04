function toggleCheckbox() {
  let toggleStatus = document.getElementById('toggle').checked
  let checkboxes = document.querySelectorAll(`#theForm input[type="checkbox"]`)

  // 如果 toggle 被選取或取消，逐一選取或取消陣列子選項
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = toggleStatus
  }

  // 如果子選項被選取或取消，逐一檢查子選項是否全部被選取，預設 toggle 被選取，若子選項並非被全選，取消 toggle
  for (let j = 1; j < checkboxes.length; j++) {
    checkboxes[j].onclick = function () {
      let allChecked = true;
      for (let k = 1; k < checkboxes.length; k++) {
        if (!checkboxes[k].checked) {
          allChecked = false;
        }
        document.getElementById('toggle').checked = allChecked;
      }
    }
  }
  return;
}

// window.onload = () => document.getElementById('theForm')
window.addEventListener('load', () => {
  document.getElementById('toggle').addEventListener('change', toggleCheckbox);
});





function CustomCheckbox() {
  let toggleStatus = document.getElementById('custom-checkbox').checked
  let checkboxes = document.querySelectorAll(`#Certificate input[type="checkbox"]`)

  // 如果 toggle 被選取或取消，逐一選取或取消陣列子選項
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = toggleStatus
  }

  // 如果子選項被選取或取消，逐一檢查子選項是否全部被選取，預設 toggle 被選取，若子選項並非被全選，取消 toggle
  for (let j = 1; j < checkboxes.length; j++) {
    checkboxes[j].onclick = function () {
      let allChecked = true;
      for (let k = 1; k < checkboxes.length; k++) {
        if (!checkboxes[k].checked) {
          allChecked = false;
        }
        document.getElementById('custom-checkbox').checked = allChecked;
      }
    }
  }
  return;
}

// window.onload = () => document.getElementById('theForm')
window.addEventListener('load', () => {
  document.getElementById('custom-checkbox').addEventListener('change', CustomCheckbox);
});