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
    birthDate: "1985-05-10",
    leaveDate: null,
    leaveStartDate: null,
    leaveEndDate: null,
    gender: '男',
    maritalStatus: '未婚',
    residentialAddress: '桃園市中壢區榮安八街39號三樓',
    mailingAddress: '桃園市中壢區榮安八街39號三樓',
    mobilePhone: '0988019463',
    education: [
      { school: '國立臺灣大學', major: '家庭教育發展', degree: '碩士', graduationYear: '2007/12', highestEducation: 'V' },
      { school: '國立臺灣大學', major: '金融科技推廣', degree: '學士', graduationYear: '2004/7', highestEducation: '' },
      { school: '國立建國中學', major: '普通', degree: '高中職', graduationYear: '2000/6', highestEducation: '' }
    ],
    externalExperience: [
      { company: '大同管理顧問', position: '行政助理', startDate: '2006/7/1', endDate: '2007/2/1' },
      { company: '美麗森林露營場', position: '訓練企劃專員', startDate: '2005/8/1', endDate: '2006/3/1' },
      { company: '特快航空', position: '人資實習生', startDate: '2005/7/1', endDate: '2005/9/1' },
      { company: '卡梅拉數位科技', position: '業務助理', startDate: '2004/8/1', endDate: '2005/1/1' }
    ],
    internalTransfers: [
      { effectiveDate: '2022/7/15', office: '信託人才管理處', department: '個金作業管理部', area: '', section: '信託二科', team: '', position: '科長', resignationFlag: '', managementStatus: '專任' },
      { effectiveDate: '2018/2/1', office: '信託總管理處-信託人才管理處', department: '信託人才二部', area: '', section: '個金信託三科', team: '', position: '科長', resignationFlag: '', managementStatus: '' },
      { effectiveDate: '2015/8/5', office: '全球個金總管理處-全球信託人才管理處', department: '個金暨信金信託人才部', area: '', section: '個金信託一科', team: '', position: '科長', resignationFlag: '', managementStatus: '' },
      { effectiveDate: '2014/1/1', office: '全球個金總管理處-全球信託人才管理處', department: '個金信託人才部', area: '', section: '個金信託二科', team: '', position: '資深信託管理人員', resignationFlag: '', managementStatus: '' },
      { effectiveDate: '2011/2/1', office: '全球個金總管理處-全球信託人才管理處', department: '個金信託人才部', area: '', section: '個金信託三科', team: '', position: '信託管理人員', resignationFlag: '', managementStatus: '' },
      { effectiveDate: '2010/3/1', office: '全球個金總管理處-全球信託人才管理處', department: '個金信託人才部', area: '', section: '個金信託三科', team: '', position: '助理信託管理人員', resignationFlag: '', managementStatus: '' },
      { effectiveDate: '2009/1/1', office: '個金總管理處-信託人才管理處', department: '個金信託人才中心', area: '', section: '個金信託二科', team: '', position: '助理信託管理人員', resignationFlag: '', managementStatus: '' },
      { effectiveDate: '2008/3/12', office: '個金總管理處-信託人才管理處', department: '個金信託人才中心', area: '', section: '個金信託三科', team: '', position: '助理信託管理人員', resignationFlag: '', managementStatus: '' }
    ]
  },
  "E0002": {
    name: "林小天",
    englishName: "Sky Lin",
    status: "離職",
    department: "招募作業管理部",
    position: "部長",
    level: "16",
    title: "經理",
    joinDate: "2012-03-20",
    leaveDate: "2023-08-31",
    seniorityStartDate: "2012-03-20",
    birthDate: "1990-08-22",
    gender: "男",
    maritalStatus: "已婚",
    residentialAddress: "台北市大安區和平東路101號",
    mailingAddress: "台北市大安區和平東路101號",
    mobilePhone: "0922334455",
    education: [
      { "school": "國防醫學院", "major": "生物醫學科學", "degree": "碩士", "graduationYear": "2008/1", "highestEducation": "V" },
      { "school": "國防醫學院", "major": "醫學科學", "degree": "學士", "graduationYear": "2006/7", "highestEducation": "" }
    ],
    "externalExperience": [
      { "company": "健保科技公司", "position": "人力資源經理", "startDate": "2008/5/1", "endDate": "2012/2/1" }
    ],
    "internalTransfers": [
      { "effectiveDate": "2012/3/20", "office": "信託人才管理處", "department": "招募作業管理部", "area": "", "section": "", "team": "", "position": "部長", "resignationFlag": "離職", "managementStatus": "" }
    ]
  },
  "E0003": {
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
    leaveEndDate: "2023-09-09", // 留職停薪迄日
    gender: "男",
    maritalStatus: "已婚",
    residentialAddress: "新北市三峽區大同路20號",
    mailingAddress: "新北市三峽區大同路20號",
    mobilePhone: "0933445566",
    education: [
      { "school": "國立中興大學", "major": "企業管理", "degree": "碩士", "graduationYear": "2013/7", "highestEducation": "V" },
      { "school": "國立中興大學", "major": "企業管理", "degree": "學士", "graduationYear": "2011/7", "highestEducation": "" }
    ],
    externalExperience: [
      { "company": "前進科技", "position": "人事專員", "startDate": "2013/8/1", "endDate": "2015/6/1" }
    ],
    internalTransfers: [
      { "effectiveDate": "2018/1/1", "office": "信託人才管理處", "department": "招募作業管理部", "area": "", "section": "招募一科", "team": "", "position": "科長", "resignationFlag": "", "managementStatus": "專任" }
    ]

  },
  "E0004": {
    name: "余小紫",
    englishName: "Purple Yu",
    status: "在職",
    department: "招募二科",
    position: "科長",
    level: "12",
    title: "協理",
    joinDate: "2018-05-30",
    seniorityStartDate: "2018-05-30",
    birthDate: "1992-12-25",
    gender: "女",
    maritalStatus: "未婚",
    residentialAddress: "台中市南區建國北路123號",
    mailingAddress: "台中市南區建國北路123號",
    mobilePhone: "0911223344",
    education: [
      { "school": "國立中興大學", "major": "人力資源管理", "degree": "碩士", "graduationYear": "2016/6", "highestEducation": "V" },
      { "school": "國立中興大學", "major": "人力資源管理", "degree": "學士", "graduationYear": "2014/6", "highestEducation": "" }
    ],
    externalExperience: [
      { "company": "中興大學職涯中心", "position": "職涯諮詢顧問", "startDate": "2016/6/1", "endDate": "2018/5/29" }
    ],
    internalTransfers: [
      { "effectiveDate": "2018/1/1", "office": "信託人才管理處", "department": "招募作業管理部", "area": "", "section": "招募二科", "team": "", "position": "科長", "resignationFlag": "", "managementStatus": "專任" }
    ]
  }
};

//計算年資
function calculateDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    // 拿上個月的天數回來
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

//選擇要顯示的細項清單
function showTable(tableId) {
  const tables = document.querySelectorAll('.table-container');
  tables.forEach(table => table.style.display = 'none');

  const table = document.getElementById(tableId);
  if (table) {
    table.style.display = 'block';
  }
}

//隨著下拉選單選中的員工編號切換
function update() {
  const inputElement = document.getElementById('namelist');
  const X = inputElement.value;

  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    table.querySelectorAll('td:nth-child(2)').forEach(cell => cell.textContent = '');
  });

  if (X) {
    const options = document.querySelectorAll('#datalistOptions option');
    const matchFound = Array.from(options).some(option => option.value === X);

    if (matchFound) {
      //顯示員工照片
      document.getElementById('photo').src = "./images/" + X + ".svg";
      document.getElementById('photo').style.display = 'block';

      const employee = employees[X];
      if (employee) {
        //顯示公司內基本資料
        const basicInfoTable = document.getElementById('generalInfoBasicInfoTable');
        basicInfoTable.querySelector('tr:nth-of-type(1) td:nth-child(2)').textContent = X;
        basicInfoTable.querySelector('tr:nth-of-type(2) td:nth-child(2)').textContent = employee.name;
        basicInfoTable.querySelector('tr:nth-of-type(3) td:nth-child(2)').textContent = employee.englishName;
        basicInfoTable.querySelector('tr:nth-of-type(4) td:nth-child(2)').textContent = employee.status;

        const positionTable = document.getElementById('generalInfoPositionInfoTable');
        positionTable.querySelector('tr:nth-of-type(1) td:nth-child(2)').textContent = employee.department;
        positionTable.querySelector('tr:nth-of-type(2) td:nth-child(2)').textContent = employee.position;
        positionTable.querySelector('tr:nth-of-type(3) td:nth-child(2)').textContent = employee.level;
        positionTable.querySelector('tr:nth-of-type(4) td:nth-child(2)').textContent = employee.title;

        const datesTable = document.getElementById('generalInfoDatesInfoTable');

        //取今天的日期
        const today = new Date().toISOString().split('T')[0];
        let totalSeniority = calculateDateDifference(employee.seniorityStartDate, employee.leaveDate || today);
        let leaveDuration = { years: 0, months: 0, days: 0 };

        if (employee.leaveStartDate && employee.leaveEndDate) {
          leaveDuration = calculateDateDifference(employee.leaveStartDate, employee.leaveEndDate);
        }

        let adjustedSeniorityYears = totalSeniority.years - leaveDuration.years;
        let adjustedSeniorityMonths = totalSeniority.months - leaveDuration.months;
        let adjustedSeniorityDays = totalSeniority.days - leaveDuration.days;

        if (adjustedSeniorityDays < 0) {
          adjustedSeniorityMonths--;
          adjustedSeniorityDays += new Date(today.split('-')[0], new Date(today.split('-')[0], today.split('-')[1], 0).getDate()).getDate(); // Days in previous month
        }
        if (adjustedSeniorityMonths < 0) {
          adjustedSeniorityYears--;
          adjustedSeniorityMonths += 12;
        }

        datesTable.querySelector('tr:nth-of-type(1) td:nth-child(2)').textContent = employee.joinDate;
        datesTable.querySelector('tr:nth-of-type(2) td:nth-child(2)').textContent = employee.leaveDate || '無';
        datesTable.querySelector('tr:nth-of-type(3) td:nth-child(2)').textContent = `${adjustedSeniorityYears}年${adjustedSeniorityMonths}月${adjustedSeniorityDays}天`;
        datesTable.querySelector('tr:nth-of-type(4) td:nth-child(2)').textContent = `${employee.birthDate}（${calculateDateDifference(employee.birthDate, today).years}歲${calculateDateDifference(employee.birthDate, today).months}個月${calculateDateDifference(employee.birthDate, today).days}天）`;

        //顯示個人基本資料
        const personalInfoTable = document.getElementById('personalInfo');
        personalInfoTable.querySelector('#gender').textContent = employee.gender;
        personalInfoTable.querySelector('#maritalStatus').textContent = employee.maritalStatus;
        personalInfoTable.querySelector('#residentialAddress').textContent = employee.residentialAddress;
        personalInfoTable.querySelector('#mailingAddress').textContent = employee.mailingAddress;
        personalInfoTable.querySelector('#mobilePhone').textContent = employee.mobilePhone;

        //驅動點擊其他卡片的反應
        updateEducation(employee.education);
        updateExternalExperience(employee.externalExperience);
        updateInternalTransfer(employee.internalTransfers);

        showTable('personalInfo'); // 默認顯示個人資料
      }
    } else {
      document.getElementById('photo').style.display = 'none';
    }
  } else {
    document.getElementById('photo').style.display = 'none';
  }
}

//顯示教育程度
function updateEducation(education) {
  const educationTableBody = document.getElementById('educationTableBody');
  educationTableBody.innerHTML = '';

  education.forEach(edu => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${edu.school}</td>
          <td>${edu.major}</td>
          <td>${edu.degree}</td>
          <td>${edu.graduationYear}</td>
          <td>${edu.highestEducation}</td>
      `;
    educationTableBody.appendChild(row);
  });
}

//顯示外部經歷
function updateExternalExperience(externalExperience) {
  const externalExperienceTableBody = document.getElementById('externalExperienceTableBody');
  externalExperienceTableBody.innerHTML = '';

  externalExperience.forEach(exp => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${exp.company}</td>
          <td>${exp.position}</td>
          <td>${exp.startDate}</td>
          <td>${exp.endDate}</td>
          <td>${calculateDateDifference(exp.startDate, exp.endDate).years}年${calculateDateDifference(exp.startDate, exp.endDate).months}月${calculateDateDifference(exp.startDate, exp.endDate).days}天</td>
      `;
    externalExperienceTableBody.appendChild(row);
  });
}

//顯示內部經歷
function updateInternalTransfer(internalTransfers) {
  const internalTransferTableBody = document.getElementById('internalTransferTableBody');
  internalTransferTableBody.innerHTML = '';

  let today = new Date().toISOString().split('T')[0];
  let endDate = today;

  //計算前後筆年資
  for (let i = 0; i < internalTransfers.length; i++) {
    const transfer = internalTransfers[i];

    let seniority = calculateDateDifference(transfer.effectiveDate, endDate);

    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${transfer.effectiveDate}</td>
          <td>${transfer.office}</td>
          <td>${transfer.department}</td>
          <td>${transfer.area}</td>
          <td>${transfer.section}</td>
          <td>${transfer.team}</td>
          <td>${transfer.position}</td>
          <td>${transfer.resignationFlag}</td>
          <td>${transfer.managementStatus}</td>
          <td>${seniority.years}年${seniority.months}月${seniority.days}天</td>
      `;
    internalTransferTableBody.appendChild(row);

    endDate = transfer.effectiveDate;
  }
}

// 綁定卡片點擊事件

function clearBorders() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.borderColor = '#F2F2F2';
  });
}

document.getElementById('card-1').addEventListener('click', function () {
  clearBorders();
  this.style.borderColor = '#52A885';
  showTable('personalInfo');
});

document.getElementById('card-2').addEventListener('click', function () {
  clearBorders();
  this.style.borderColor = '#277A9E';
  showTable('educationTable');
});

document.getElementById('card-3').addEventListener('click', function () {
  clearBorders();
  this.style.borderColor = '#ED8C37';
  showTable('externalExperienceTable');
});

document.getElementById('card-4').addEventListener('click', function () {
  clearBorders();
  this.style.borderColor = '#DB7477';
  showTable('internalTransferTable');
});

// 驅動下拉選單
document.getElementById('namelist').addEventListener('input', function () {
  update();
});

document.addEventListener('DOMContentLoaded', function () {
  const defaultEmployeeId = 'E0001';
  const inputElement = document.getElementById('namelist');
  inputElement.value = defaultEmployeeId;
  update(); // Trigger the update function to load the default employee information
});