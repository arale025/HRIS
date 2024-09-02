const employees = {
  "E0001": {
    name: "吳小綠",
    englishName: "Green Wu",
    status: "在職",
    department: "人才管理處",
    position: "處長",
    level: "17",
    title: "副總經理",
    joinDate: "2010-01-15",
    seniorityStartDate: "2010-01-15",
    birthDate: "1985-05-10"
  },
  "E0031": {
    name: "林小天",
    englishName: "Sky Lin",
    status: "在職",
    department: "招募作業管理部",
    position: "部長",
    level: "16",
    title: "經理",
    joinDate: "2012-03-20",
    seniorityStartDate: "2012-03-20",
    birthDate: "1990-08-22"
  },
  "E0798": {
    name: "陳小黑",
    englishName: "Black Chen",
    status: "留職停薪",
    department: "招募一科",
    position: "科長",
    level: "13",
    title: "副理",
    joinDate: "2015-07-01",
    seniorityStartDate: "2015-07-01",
    birthDate: "1988-11-15",
    leaveStartDate: "2022-09-09", // 留職停薪起日
    leaveEndDate: "2023-09-09" // 留職停薪迄日
  },
  "E1103": {
    name: "余小紫",
    englishName: "Purple Yu",
    status: "在職",
    department: "招募二科",
    position: "科長",
    level: "12",
    title: "協理",
    joinDate: "2018-05-30",
    seniorityStartDate: "2018-05-30",
    birthDate: "1992-12-25"
  }
};

function calculateDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    // Get number of days in the previous month
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}年${months}月${days}天`;
}

function update() {
  var inputElement = document.getElementById('namelist');
  var X = inputElement.value;

  var tables = document.querySelectorAll('table');
  tables.forEach(table => {
    table.querySelectorAll('td:nth-child(2)').forEach(cell => cell.textContent = '');
  });

  if (X) {
    var options = document.querySelectorAll('#datalistOptions option');
    var matchFound = Array.from(options).some(option => option.value === X);

    if (matchFound) {
      document.getElementById('photo').src = "./images/" + X + ".svg";
      document.getElementById('photo').style.display = 'block';

      var employee = employees[X];
      if (employee) {
        var basicInfoTable = document.getElementById('generalInfoBasicInfoTable');
        basicInfoTable.querySelector('tr:nth-of-type(1) td:nth-child(2)').textContent = X;
        basicInfoTable.querySelector('tr:nth-of-type(2) td:nth-child(2)').textContent = employee.name;
        basicInfoTable.querySelector('tr:nth-of-type(3) td:nth-child(2)').textContent = employee.englishName;
        basicInfoTable.querySelector('tr:nth-of-type(4) td:nth-child(2)').textContent = employee.status;

        var positionTable = document.getElementById('generalInfoPositionInfoTable');
        positionTable.querySelector('tr:nth-of-type(1) td:nth-child(2)').textContent = employee.department;
        positionTable.querySelector('tr:nth-of-type(2) td:nth-child(2)').textContent = employee.position;
        positionTable.querySelector('tr:nth-of-type(3) td:nth-child(2)').textContent = employee.level;
        positionTable.querySelector('tr:nth-of-type(4) td:nth-child(2)').textContent = employee.title;

        var datesTable = document.getElementById('generalInfoDatesInfoTable');
        var today = new Date().toISOString().split('T')[0];
        // 取今天的日期YYYY-MM-DD

        //留職停薪調整年資起始日
        let adjustedSeniorityStartDate = employee.seniorityStartDate;
        if (employee.leaveStartDate && employee.leaveEndDate) {
          let leaveDuration = calculateDateDifference(employee.leaveStartDate, employee.leaveEndDate);
          let joinDate = new Date(employee.joinDate);
          let leaveStartDate = new Date(employee.leaveStartDate);
          let newSeniorityStartDate = new Date(joinDate);
          newSeniorityStartDate.setFullYear(newSeniorityStartDate.getFullYear() + leaveDuration.split('年')[0] * 1);
          newSeniorityStartDate.setMonth(newSeniorityStartDate.getMonth() + leaveDuration.split('月')[0].split('年')[1] * 1);
          newSeniorityStartDate.setDate(newSeniorityStartDate.getDate() + leaveDuration.split('天')[0].split('月')[1] * 1);
          adjustedSeniorityStartDate = newSeniorityStartDate.toISOString().split('T')[0];
        }

        datesTable.querySelector('tr:nth-of-type(1) td:nth-child(2)').textContent = employee.joinDate;
        datesTable.querySelector('tr:nth-of-type(3) td:nth-child(2)').textContent = adjustedSeniorityStartDate + `（${calculateDateDifference(adjustedSeniorityStartDate, today)}）`;
        datesTable.querySelector('tr:nth-of-type(4) td:nth-child(2)').textContent = employee.birthDate + `（${calculateDateDifference(employee.birthDate, today)}）`;
      }
    } else {
      document.getElementById('photo').style.display = 'none';
    }
  } else {
    document.getElementById('photo').style.display = 'none';
  }
}

document.getElementById('namelist').addEventListener('input', function () {
  update();
});