/* =========================================
   NBA AUTOMATION
   FRONTEND JAVASCRIPT
========================================= */

/* =========================================
   DEMO USERS
========================================= */

const demoUsers = [
  {
    username: "admin",
    password: "1234",
    name: "Super Admin",
    role: "Super Admin",
    userId: "U001"
  },
  {
    username: "nbacoordinator",
    password: "1234",
    name: "NBA Coordinator",
    role: "NBA Coordinator",
    userId: "U002"
  },
  {
    username: "hod",
    password: "1234",
    name: "Head of Department",
    role: "HoD",
    userId: "U003"
  },
  {
    username: "criterion",
    password: "1234",
    name: "Criterion Coordinator",
    role: "Criterion Coordinator",
    userId: "U004"
  },
  {
    username: "course",
    password: "1234",
    name: "Course Coordinator",
    role: "Course Coordinator",
    userId: "U005"
  },
  {
    username: "faculty",
    password: "1234",
    name: "EEE Faculty",
    role: "Faculty",
    userId: "U006"
  },
  {
    username: "document",
    password: "1234",
    name: "Documentation Staff",
    role: "Documentation Staff",
    userId: "U007"
  },
  {
    username: "reviewer",
    password: "1234",
    name: "Internal Reviewer",
    role: "Reviewer",
    userId: "U008"
  }
];

/* =========================================
   NBA CRITERIA
========================================= */

const nbaCriteria = [
  { id: "C1", name: "Outcome-Based Curriculum", progress: 70 },
  { id: "C2", name: "Outcome-Based Teaching Learning", progress: 60 },
  { id: "C3", name: "Outcome-Based Assessment", progress: 45 },
  { id: "C4", name: "Student Information", progress: 55 },
  { id: "C5", name: "Faculty Information", progress: 80 },
  { id: "C6", name: "Faculty Contributions", progress: 65 },
  { id: "C7", name: "Facilities and Technical Support", progress: 50 },
  { id: "C8", name: "Continuous Improvement", progress: 35 },
  { id: "C9", name: "Student Support System and Governance", progress: 60 }
];

/* =========================================
   DEMO TASKS
========================================= */

const demoTasks = [
  {
    id: "TASK001",
    userId: "U006",
    task: "Upload Course File - Electrical Machines",
    criterion: "C2",
    deadline: "2026-09-10",
    status: "Pending"
  },
  {
    id: "TASK002",
    userId: "U006",
    task: "Upload Question Paper",
    criterion: "C3",
    deadline: "2026-09-12",
    status: "Pending"
  },
  {
    id: "TASK003",
    userId: "U006",
    task: "Prepare CO Attainment",
    criterion: "C3",
    deadline: "2026-09-15",
    status: "In Progress"
  },
  {
    id: "TASK004",
    userId: "U005",
    task: "Review Course Files",
    criterion: "C2",
    deadline: "2026-09-15",
    status: "Pending"
  },
  {
    id: "TASK005",
    userId: "U004",
    task: "Check Criterion C3 Evidence",
    criterion: "C3",
    deadline: "2026-09-20",
    status: "Completed"
  },
  {
    id: "TASK006",
    userId: "U002",
    task: "Review Overall NBA Progress",
    criterion: "C1-C9",
    deadline: "2026-09-30",
    status: "In Progress"
  }
];

/* =========================================
   DEMO DOCUMENTS
========================================= */

const defaultDocuments = [
  {
    id: "DOC001",
    userId: "U006",
    criterion: "C2",
    requirement: "Course File",
    course: "EE301 - Electrical Machines",
    academicYear: "2025-26",
    documentType: "Course File",
    fileName: "Electrical_Machines_Course_File.pdf",
    status: "Submitted",
    uploadDate: "2026-09-01"
  },
  {
    id: "DOC002",
    userId: "U006",
    criterion: "C3",
    requirement: "Question Paper",
    course: "EE301 - Electrical Machines",
    academicYear: "2025-26",
    documentType: "Question Paper",
    fileName: "Electrical_Machines_QP.pdf",
    status: "Verified",
    uploadDate: "2026-08-28"
  },
  {
    id: "DOC003",
    userId: "U004",
    criterion: "C3",
    requirement: "CO-PO Mapping",
    course: "",
    academicYear: "2025-26",
    documentType: "CO-PO Mapping",
    fileName: "CO_PO_Mapping.xlsx",
    status: "Verified",
    uploadDate: "2026-08-25"
  }
];

/* =========================================
   REQUIRED DOCUMENTS (MASTER LIST)
========================================= */

const requiredDocuments = [
  // C1
  { id: "REQ_C1_CF", criterion: "C1", documentType: "Course File", templateAvailable: true },
  { id: "REQ_C1_LP", criterion: "C1", documentType: "Lesson Plan", templateAvailable: true },
  { id: "REQ_C1_SYL", criterion: "C1", documentType: "Syllabus", templateAvailable: true },
  // C2
  { id: "REQ_C2_QP", criterion: "C2", documentType: "Question Paper", templateAvailable: true },
  { id: "REQ_C2_CO", criterion: "C2", documentType: "CO Attainment", templateAvailable: true },
  { id: "REQ_C2_CF", criterion: "C2", documentType: "Course File", templateAvailable: true },
  // C3
  { id: "REQ_C3_COPO", criterion: "C3", documentType: "CO-PO Mapping", templateAvailable: true },
  { id: "REQ_C3_QP", criterion: "C3", documentType: "Question Paper", templateAvailable: true },
  { id: "REQ_C3_ASSIGN", criterion: "C3", documentType: "Assignment", templateAvailable: false },
  // C4
  { id: "REQ_C4_STUDENT", criterion: "C4", documentType: "Student Data", templateAvailable: true },
  // C5
  { id: "REQ_C5_FACULTY", criterion: "C5", documentType: "Faculty Data", templateAvailable: true },
  // C6
  { id: "REQ_C6_PUB", criterion: "C6", documentType: "Research / Publication", templateAvailable: false },
  // C7
  { id: "REQ_C7_LAB", criterion: "C7", documentType: "Laboratory Record", templateAvailable: true },
  // C8
  { id: "REQ_C8_ACTION", criterion: "C8", documentType: "Action Taken Report", templateAvailable: false },
  // C9
  { id: "REQ_C9_FEEDBACK", criterion: "C9", documentType: "Feedback", templateAvailable: true },
  { id: "REQ_C9_GOV", criterion: "C9", documentType: "Governance Document", templateAvailable: false }
];

/* =========================================
   TEMPLATE SAMPLES
========================================= */

const templateSamples = {
  "Course File": "Course File Template:\n- Course Objectives\n- Course Outcomes\n- CO-PO Mapping\n- Lesson Plan\n- Lecture Notes\n- Assignments\n- Question Papers\n- CO Attainment Summary",
  "Lesson Plan": "Lesson Plan Template:\n- Topic\n- Duration\n- Learning Objectives\n- Teaching Methods\n- Assessment Tools",
  "Syllabus": "Syllabus Template:\n- Course Title\n- Credits\n- Prerequisites\n- Course Objectives\n- Course Outcomes\n- Weekly Schedule\n- Textbooks\n- Evaluation Scheme",
  "Question Paper": "Question Paper Template:\n- Course Code & Name\n- Time & Max Marks\n- Part A (Short Answer)\n- Part B (Long Answer)\n- CO Mapping for each question",
  "CO Attainment": "CO Attainment Template:\n- Course Outcomes\n- Assessment Methods\n- Target vs Actual\n- Attainment Level (1/2/3)",
  "CO-PO Mapping": "CO-PO Matrix:\n- List COs (rows)\n- List POs (columns)\n- Mark correlation (1-3)",
  "Assignment": "Assignment Template:\n- Course Code\n- Topic\n- Submission Date\n- Questions with CO mapping",
  "Student Data": "Student Data Template:\n- Roll No\n- Name\n- Batch\n- CGPA\n- Backlogs (if any)",
  "Faculty Data": "Faculty Data Template:\n- Name\n- Designation\n- Qualification\n- Experience\n- Courses Handled\n- Research/Publications",
  "Research / Publication": "Research / Publication Template:\n- Title\n- Authors\n- Journal/Conference\n- Year\n- DOI/URL",
  "Laboratory Record": "Laboratory Record Template:\n- Experiment No.\n- Title\n- Date\n- Observations\n- Results\n- Inference",
  "Action Taken Report": "Action Taken Report Template:\n- Issue Identified\n- Action Plan\n- Responsible Person\n- Deadline\n- Status\n- Remarks",
  "Feedback": "Feedback Template:\n- Course\n- Feedback Parameters\n- Rating Scale\n- Summary of Responses\n- Action Taken",
  "Governance Document": "Governance Document Template:\n- Document Name\n- Version\n- Review Date\n- Approving Authority\n- Summary"
};

/* =========================================
   INITIALIZE LOCAL STORAGE
========================================= */

function initializeStorage() {
  if (!localStorage.getItem("nbaDocuments")) {
    localStorage.setItem("nbaDocuments", JSON.stringify(defaultDocuments));
  }
}
initializeStorage();

/* =========================================
   GET CURRENT USER
========================================= */

function getCurrentUser() {
  const userData = localStorage.getItem("nbaCurrentUser");
  if (!userData) return null;
  return JSON.parse(userData);
}

/* =========================================
   LOGIN
========================================= */

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    const user = demoUsers.find(item => item.username === username && item.password === password);

    if (!user) {
      error.textContent = "Invalid username or password.";
      error.style.display = "block";
      return;
    }

    localStorage.setItem("nbaCurrentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  });
}

/* =========================================
   PAGE PROTECTION
========================================= */

function protectPage() {
  const currentUser = getCurrentUser();
  const isLoginPage = window.location.pathname.toLowerCase().includes("index.html") || window.location.pathname === "/";

  if (!currentUser && !isLoginPage) {
    window.location.href = "index.html";
    return;
  }
}
protectPage();

/* =========================================
   LOGOUT
========================================= */

function logout() {
  localStorage.removeItem("nbaCurrentUser");
  window.location.href = "index.html";
}

/* =========================================
   DASHBOARD INITIALIZATION
========================================= */

function initializeDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  const userName = document.getElementById("userName");
  const userRole = document.getElementById("userRole");
  const welcomeName = document.getElementById("welcomeName");
  const userAvatar = document.getElementById("userAvatar");

  if (userName) userName.textContent = user.name;
  if (userRole) userRole.textContent = user.role;
  if (welcomeName) welcomeName.textContent = user.name;
  if (userAvatar) userAvatar.textContent = user.name.charAt(0).toUpperCase();

  configureRoleMenu(user);
  loadDashboard(user);
  // Render document management table (will be hidden by default)
  renderDocumentManagement();
}

if (window.location.pathname.toLowerCase().includes("dashboard.html")) {
  initializeDashboard();
}

/* =========================================
   UPLOAD PAGE INITIALIZATION
========================================= */

function initializeUploadPage() {
  const user = getCurrentUser();
  if (!user) return;

  const userName = document.getElementById("userName");
  const userRole = document.getElementById("userRole");
  const userAvatar = document.getElementById("userAvatar");

  if (userName) userName.textContent = user.name;
  if (userRole) userRole.textContent = user.role;
  if (userAvatar) userAvatar.textContent = user.name.charAt(0).toUpperCase();

  // Pre-fill from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const preCriterion = urlParams.get('criterion');
  const preDocType = urlParams.get('docType');
  if (preCriterion) {
    const criterionSelect = document.getElementById('criterion');
    if (criterionSelect) criterionSelect.value = preCriterion;
  }
  if (preDocType) {
    const docTypeSelect = document.getElementById('documentType');
    if (docTypeSelect) {
      // Try to match by value or text
      const options = docTypeSelect.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === preDocType || options[i].text === preDocType) {
          docTypeSelect.value = options[i].value;
          break;
        }
      }
    }
  }

  setupFileSelector();
  setupUploadForm();
}

if (window.location.pathname.toLowerCase().includes("upload.html")) {
  initializeUploadPage();
}

/* =========================================
   ROLE MENU
========================================= */

function configureRoleMenu(user) {
  const adminMenu = document.getElementById("adminMenu");
  if (!adminMenu) return;

  const adminRoles = ["Super Admin", "NBA Coordinator", "HoD"];
  if (adminRoles.includes(user.role)) {
    adminMenu.style.display = "block";
  } else {
    adminMenu.style.display = "none";
  }
}

/* =========================================
   LOAD DASHBOARD
========================================= */

function loadDashboard(user) {
  const tasks = getUserTasks(user);
  const documents = getUserDocuments(user);

  updateStatistics(tasks, documents);
  renderCriteriaProgress();
  renderRecentTasks(tasks);
  renderRecentDocuments(documents);
  renderAllTasks(tasks);
  renderAllDocuments(documents);
  renderCriteriaList();
}

/* =========================================
   GET TASKS
========================================= */

function getUserTasks(user) {
  if (user.role === "Super Admin" || user.role === "NBA Coordinator") {
    return demoTasks;
  }
  return demoTasks.filter(task => task.userId === user.userId);
}

/* =========================================
   GET DOCUMENTS
========================================= */

function getUserDocuments(user) {
  const documents = JSON.parse(localStorage.getItem("nbaDocuments") || "[]");
  if (user.role === "Super Admin" || user.role === "NBA Coordinator" || user.role === "HoD" || user.role === "Reviewer") {
    return documents;
  }
  return documents.filter(doc => doc.userId === user.userId);
}

/* =========================================
   GET UPLOADED DOCUMENTS (for management)
========================================= */

function getUploadedDocuments() {
  return JSON.parse(localStorage.getItem("nbaDocuments") || "[]");
}

/* =========================================
   GET DOCUMENT STATUS
========================================= */

function getDocumentStatus(criterion, docType) {
  const docs = getUploadedDocuments();
  const found = docs.find(d => d.criterion === criterion && d.documentType === docType);
  return found ? found.status : "Not Uploaded";
}

/* =========================================
   GET TEMPLATE
========================================= */

function getTemplate(docType) {
  return templateSamples[docType] || null;
}

/* =========================================
   UPDATE STATISTICS
========================================= */

function updateStatistics(tasks, documents) {
  const totalTasks = document.getElementById("totalTasks");
  const totalDocuments = document.getElementById("totalDocuments");
  const pendingTasks = document.getElementById("pendingTasks");
  const completedTasks = document.getElementById("completedTasks");

  if (totalTasks) totalTasks.textContent = tasks.length;
  if (totalDocuments) totalDocuments.textContent = documents.length;
  if (pendingTasks) pendingTasks.textContent = tasks.filter(task => task.status !== "Completed").length;
  if (completedTasks) completedTasks.textContent = tasks.filter(task => task.status === "Completed").length;
}

/* =========================================
   CRITERIA PROGRESS
========================================= */

function renderCriteriaProgress() {
  const container = document.getElementById("criteriaProgress");
  if (!container) return;

  container.innerHTML = "";
  nbaCriteria.forEach(criteria => {
    container.innerHTML += `
      <div class="criteria-card">
        <div class="criteria-card-header">
          <h3>${criteria.id}</h3>
          <span>${criteria.progress}%</span>
        </div>
        <p style="font-size:12px;color:#6b7280;margin-bottom:10px;">${criteria.name}</p>
        <div class="progress">
          <div class="progress-bar" style="width:${criteria.progress}%"></div>
        </div>
      </div>
    `;
  });
}

/* =========================================
   RECENT TASKS
========================================= */

function renderRecentTasks(tasks) {
  const tbody = document.getElementById("taskTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const recentTasks = tasks.slice(0, 5);

  if (recentTasks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No tasks assigned.</td></tr>`;
    return;
  }

  recentTasks.forEach(task => {
    tbody.innerHTML += `
      <tr>
        <td>${task.task}</td>
        <td><span class="badge badge-blue">${task.criterion}</span></td>
        <td>${task.deadline}</td>
        <td>${getStatusBadge(task.status)}</td>
        <td><button class="btn btn-secondary" onclick="openTask('${task.id}')">Open</button></td>
      </tr>
    `;
  });
}

/* =========================================
   ALL TASKS
========================================= */

function renderAllTasks(tasks) {
  const tbody = document.getElementById("allTasksBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  tasks.forEach(task => {
    tbody.innerHTML += `
      <tr>
        <td>${task.id}</td>
        <td>${task.task}</td>
        <td>${task.criterion}</td>
        <td>${task.deadline}</td>
        <td>${getStatusBadge(task.status)}</td>
        <td><button class="btn btn-secondary" onclick="openTask('${task.id}')">Open</button></td>
      </tr>
    `;
  });
}

/* =========================================
   RECENT DOCUMENTS
========================================= */

function renderRecentDocuments(documents) {
  const tbody = document.getElementById("documentTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  documents.slice(0, 5).forEach(doc => {
    tbody.innerHTML += `
      <tr>
        <td>📄 ${doc.fileName}</td>
        <td>${doc.criterion}</td>
        <td>${doc.academicYear}</td>
        <td>${doc.uploadDate}</td>
        <td>${getStatusBadge(doc.status)}</td>
      </tr>
    `;
  });
}

/* =========================================
   ALL DOCUMENTS (My Documents)
========================================= */

function renderAllDocuments(documents) {
  const container = document.getElementById("allDocuments");
  if (!container) return;

  container.innerHTML = "";
  if (documents.length === 0) {
    container.innerHTML = `<p style="color:#6b7280;">No documents uploaded yet.</p>`;
    return;
  }

  documents.forEach(doc => {
    container.innerHTML += `
      <div class="document-item">
        <div class="document-info">
          <div class="document-icon">📄</div>
          <div>
            <strong>${doc.fileName}</strong>
            <small style="display:block;color:#6b7280;margin-top:4px;">
              ${doc.criterion} · ${doc.documentType} · ${doc.academicYear}
            </small>
          </div>
        </div>
        <div>${getStatusBadge(doc.status)}</div>
      </div>
    `;
  });
}

/* =========================================
   STATUS BADGE
========================================= */

function getStatusBadge(status) {
  let className = "badge-gray";
  if (status === "Completed" || status === "Verified") className = "badge-green";
  else if (status === "Pending") className = "badge-orange";
  else if (status === "In Progress" || status === "Submitted") className = "badge-blue";
  return `<span class="badge ${className}">${status}</span>`;
}

/* =========================================
   CRITERIA LIST
========================================= */

function renderCriteriaList() {
  const container = document.getElementById("criteriaList");
  if (!container) return;

  container.innerHTML = "";
  nbaCriteria.forEach(criteria => {
    container.innerHTML += `
      <div class="document-item">
        <div><strong>${criteria.id} - ${criteria.name}</strong></div>
        <div><span class="badge badge-blue">${criteria.progress}%</span></div>
      </div>
    `;
  });
}

/* =========================================
   SECTION SWITCHING
========================================= */

function showSection(section) {
  const sections = ["dashboard", "tasks", "documents", "criteria", "notifications", "docManagement"];
  sections.forEach(name => {
    const element = document.getElementById(name + "Section");
    if (element) element.classList.add("hidden");
  });

  const selected = document.getElementById(section + "Section");
  if (selected) selected.classList.remove("hidden");

  // Also update page title
  const pageTitle = document.getElementById("pageTitle");
  const titles = {
    dashboard: "Dashboard",
    tasks: "My Tasks",
    documents: "My Documents",
    criteria: "NBA Criteria",
    notifications: "Notifications",
    docManagement: "Document Management"
  };
  if (pageTitle) pageTitle.textContent = titles[section] || "Dashboard";

  // If document management section is shown, re-render table (in case of updates)
  if (section === "docManagement") {
    renderDocumentManagement();
  }
}

/* =========================================
   OPEN TASK
========================================= */

function openTask(taskId) {
  const task = demoTasks.find(item => item.id === taskId);
  if (!task) return;
  alert("Task: " + task.task + "\n\nCriterion: " + task.criterion + "\n\nDeadline: " + task.deadline + "\n\nStatus: " + task.status);
}

/* =========================================
   FILE SELECTOR
========================================= */

function setupFileSelector() {
  const fileInput = document.getElementById("file");
  const selectedFile = document.getElementById("selectedFile");
  if (!fileInput) return;

  fileInput.addEventListener("change", function() {
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      selectedFile.innerHTML = `📄 ${file.name}<br><small>${sizeMB} MB</small>`;
    } else {
      selectedFile.textContent = "";
    }
  });
}

/* =========================================
   UPLOAD FORM
========================================= */

function setupUploadForm() {
  const form = document.getElementById("uploadForm");
  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const user = getCurrentUser();
    if (!user) {
      alert("Please login first.");
      return;
    }

    const fileInput = document.getElementById("file");
    const status = document.getElementById("uploadStatus");
    const button = document.getElementById("uploadButton");

    if (!fileInput.files || !fileInput.files.length) {
      status.className = "upload-status error";
      status.textContent = "Please select a file.";
      return;
    }

    const file = fileInput.files[0];
    const criterion = document.getElementById("criterion").value;
    const requirement = document.getElementById("requirement").value;
    const academicYear = document.getElementById("academicYear").value;
    const semester = document.getElementById("semester").value;
    const course = document.getElementById("course").value;
    const documentType = document.getElementById("documentType").value;
    const description = document.getElementById("description").value;

    button.disabled = true;
    button.textContent = "Uploading...";
    status.className = "upload-status success";
    status.textContent = "Processing document...";

    // Simulate upload
    setTimeout(function() {
      const documents = JSON.parse(localStorage.getItem("nbaDocuments") || "[]");
      const newDocument = {
        id: "DOC" + Date.now(),
        userId: user.userId,
        criterion: criterion,
        requirement: requirement,
        course: course,
        academicYear: academicYear,
        semester: semester,
        documentType: documentType,
        description: description,
        fileName: file.name,
        fileSize: file.size,
        status: "Submitted",
        uploadDate: new Date().toISOString().split("T")[0]
      };
      documents.unshift(newDocument);
      localStorage.setItem("nbaDocuments", JSON.stringify(documents));

      status.textContent = "Document submitted successfully! Demo record has been saved.";
      button.disabled = false;
      button.textContent = "📤 Upload Document";
      form.reset();
      document.getElementById("selectedFile").textContent = "";
    }, 1000);
  });
}

/* =========================================
   DOCUMENT MANAGEMENT TABLE
========================================= */

function renderDocumentManagement() {
  const container = document.getElementById("docManagementTable");
  if (!container) return;

  const uploaded = getUploadedDocuments();
  let html = `<table>
    <thead><tr>
      <th>Criterion</th>
      <th>Document Type</th>
      <th>Status</th>
      <th>Actions</th>
    </tr></thead><tbody>`;

  requiredDocuments.forEach(req => {
    const status = getDocumentStatus(req.criterion, req.documentType);
    const isUploaded = status !== "Not Uploaded";
    const statusBadge = getStatusBadge(status);
    const template = getTemplate(req.documentType);

    html += `<tr>
      <td>${req.criterion}</td>
      <td>${req.documentType}</td>
      <td>${statusBadge}</td>
      <td>
        ${isUploaded ? `<button class="btn btn-secondary btn-sm" onclick="viewDoc('${req.criterion}','${req.documentType}')">View</button>` : ''}
        <button class="btn btn-primary btn-sm" onclick="uploadForReq('${req.id}')">Upload</button>
        ${isUploaded ? `<button class="btn btn-secondary btn-sm" onclick="editDocDetails('${req.criterion}','${req.documentType}')">Details</button>` : ''}
        ${template ? `<button class="btn btn-secondary btn-sm" onclick="showTemplate('${req.documentType}')">Template</button>` : ''}
        ${!req.templateAvailable ? `<button class="btn btn-secondary btn-sm" onclick="prepareTemplate('${req.id}')">Prepare</button>` : ''}
      </td>
    </tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

/* =========================================
   DOCUMENT MANAGEMENT ACTIONS
========================================= */

function viewDoc(criterion, docType) {
  const docs = getUploadedDocuments();
  const found = docs.find(d => d.criterion === criterion && d.documentType === docType);
  if (found) {
    alert(`Viewing ${found.fileName}\nUploaded: ${found.uploadDate}\nStatus: ${found.status}\nDescription: ${found.description || 'N/A'}`);
  } else {
    alert("No document found.");
  }
}

function uploadForReq(reqId) {
  const req = requiredDocuments.find(r => r.id === reqId);
  if (!req) return;
  window.location.href = `upload.html?criterion=${req.criterion}&docType=${req.documentType}`;
}

function editDocDetails(criterion, docType) {
  const docs = getUploadedDocuments();
  const found = docs.find(d => d.criterion === criterion && d.documentType === docType);
  if (!found) return alert("No document uploaded to edit details.");

  const newDesc = prompt("Edit description:", found.description || "");
  if (newDesc !== null) {
    found.description = newDesc;
    localStorage.setItem("nbaDocuments", JSON.stringify(docs));
    renderDocumentManagement();
  }
}

function showTemplate(docType) {
  const template = getTemplate(docType);
  if (!template) return alert("No sample template available for this document.");
  alert(`Sample Template for "${docType}":\n\n${template}`);
}

function prepareTemplate(reqId) {
  const req = requiredDocuments.find(r => r.id === reqId);
  if (!req) return;
  // Generate a generic template based on document type
  const generic = `Generic ${req.documentType} Template:\n\n[Fill in the details according to your institution's format.]\n\nYou may refer to the sample template if available.`;
  alert(`Prepare Template for "${req.documentType}":\n\n${generic}\n\nCopy and edit as needed.`);
}

/* =========================================
   MOBILE SIDEBAR
========================================= */

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

/* =========================================
   MAKE FUNCTIONS AVAILABLE
========================================= */

window.logout = logout;
window.showSection = showSection;
window.openTask = openTask;
window.toggleSidebar = toggleSidebar;
window.viewDoc = viewDoc;
window.uploadForReq = uploadForReq;
window.editDocDetails = editDocDetails;
window.showTemplate = showTemplate;
window.prepareTemplate = prepareTemplate;
