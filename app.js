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

    {
        id: "C1",
        name: "Outcome-Based Curriculum",
        progress: 70
    },

    {
        id: "C2",
        name: "Outcome-Based Teaching Learning",
        progress: 60
    },

    {
        id: "C3",
        name: "Outcome-Based Assessment",
        progress: 45
    },

    {
        id: "C4",
        name: "Student Information",
        progress: 55
    },

    {
        id: "C5",
        name: "Faculty Information",
        progress: 80
    },

    {
        id: "C6",
        name: "Faculty Contributions",
        progress: 65
    },

    {
        id: "C7",
        name: "Facilities and Technical Support",
        progress: 50
    },

    {
        id: "C8",
        name: "Continuous Improvement",
        progress: 35
    },

    {
        id: "C9",
        name: "Student Support System and Governance",
        progress: 60
    }

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
   INITIALIZE LOCAL STORAGE
========================================= */

function initializeStorage() {

    if (!localStorage.getItem("nbaDocuments")) {

        localStorage.setItem(
            "nbaDocuments",
            JSON.stringify(defaultDocuments)
        );

    }

}



initializeStorage();



/* =========================================
   GET CURRENT USER
========================================= */

function getCurrentUser() {

    const userData =
        localStorage.getItem("nbaCurrentUser");

    if (!userData) {

        return null;

    }

    return JSON.parse(userData);

}



/* =========================================
   LOGIN
========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const username =
                document
                    .getElementById("username")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("password")
                    .value;


            const error =
                document.getElementById("loginError");


            const user =
                demoUsers.find(
                    function(item) {

                        return (
                            item.username === username &&
                            item.password === password
                        );

                    }
                );


            if (!user) {

                error.textContent =
                    "Invalid username or password.";

                error.style.display = "block";

                return;

            }


            localStorage.setItem(
                "nbaCurrentUser",
                JSON.stringify(user)
            );


            window.location.href =
                "dashboard.html";

        }
    );

}



/* =========================================
   PAGE PROTECTION
========================================= */

function protectPage() {

    const currentUser =
        getCurrentUser();


    const isLoginPage =
        window.location.pathname
            .toLowerCase()
            .includes("index.html") ||
        window.location.pathname === "/" ;


    if (!currentUser && !isLoginPage) {

        window.location.href =
            "index.html";

        return;

    }

}



protectPage();



/* =========================================
   LOGOUT
========================================= */

function logout() {

    localStorage.removeItem(
        "nbaCurrentUser"
    );

    window.location.href =
        "index.html";

}



/* =========================================
   DASHBOARD INITIALIZATION
========================================= */

function initializeDashboard() {

    const user =
        getCurrentUser();


    if (!user) {

        return;

    }


    const userName =
        document.getElementById("userName");

    const userRole =
        document.getElementById("userRole");

    const welcomeName =
        document.getElementById("welcomeName");

    const userAvatar =
        document.getElementById("userAvatar");


    if (userName) {

        userName.textContent =
            user.name;

    }


    if (userRole) {

        userRole.textContent =
            user.role;

    }


    if (welcomeName) {

        welcomeName.textContent =
            user.name;

    }


    if (userAvatar) {

        userAvatar.textContent =
            user.name
                .charAt(0)
                .toUpperCase();

    }


    configureRoleMenu(user);

    loadDashboard(user);

}



if (
    window.location.pathname
        .toLowerCase()
        .includes("dashboard.html")
) {

    initializeDashboard();

}



/* =========================================
   UPLOAD PAGE INITIALIZATION
========================================= */

function initializeUploadPage() {

    const user =
        getCurrentUser();


    if (!user) {

        return;

    }


    const userName =
        document.getElementById("userName");

    const userRole =
        document.getElementById("userRole");

    const userAvatar =
        document.getElementById("userAvatar");


    if (userName) {

        userName.textContent =
            user.name;

    }


    if (userRole) {

        userRole.textContent =
            user.role;

    }


    if (userAvatar) {

        userAvatar.textContent =
            user.name
                .charAt(0)
                .toUpperCase();

    }


    setupFileSelector();

    setupUploadForm();

}



if (
    window.location.pathname
        .toLowerCase()
        .includes("upload.html")
) {

    initializeUploadPage();

}



/* =========================================
   ROLE MENU
========================================= */

function configureRoleMenu(user) {

    const adminMenu =
        document.getElementById("adminMenu");


    if (!adminMenu) {

        return;

    }


    const adminRoles = [

        "Super Admin",
        "NBA Coordinator",
        "HoD"

    ];


    if (
        adminRoles.includes(user.role)
    ) {

        adminMenu.style.display =
            "block";

    } else {

        adminMenu.style.display =
            "none";

    }

}



/* =========================================
   LOAD DASHBOARD
========================================= */

function loadDashboard(user) {

    const tasks =
        getUserTasks(user);


    const documents =
        getUserDocuments(user);


    updateStatistics(
        tasks,
        documents
    );


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

    /*
       NBA Coordinator and Super Admin
       can see all tasks.

       Other users see their tasks.
    */


    if (
        user.role === "Super Admin" ||
        user.role === "NBA Coordinator"
    ) {

        return demoTasks;

    }


    return demoTasks.filter(
        function(task) {

            return task.userId === user.userId;

        }
    );

}



/* =========================================
   GET DOCUMENTS
========================================= */

function getUserDocuments(user) {

    const documents =
        JSON.parse(
            localStorage.getItem(
                "nbaDocuments"
            ) || "[]"
        );


    if (
        user.role === "Super Admin" ||
        user.role === "NBA Coordinator" ||
        user.role === "HoD" ||
        user.role === "Reviewer"
    ) {

        return documents;

    }


    return documents.filter(
        function(document) {

            return (
                document.userId ===
                user.userId
            );

        }
    );

}



/* =========================================
   UPDATE STATISTICS
========================================= */

function updateStatistics(
    tasks,
    documents
) {

    const totalTasks =
        document.getElementById(
            "totalTasks"
        );


    const totalDocuments =
        document.getElementById(
            "totalDocuments"
        );


    const pendingTasks =
        document.getElementById(
            "pendingTasks"
        );


    const completedTasks =
        document.getElementById(
            "completedTasks"
        );


    if (totalTasks) {

        totalTasks.textContent =
            tasks.length;

    }


    if (totalDocuments) {

        totalDocuments.textContent =
            documents.length;

    }


    if (pendingTasks) {

        pendingTasks.textContent =
            tasks.filter(
                task =>
                    task.status !==
                    "Completed"
            ).length;

    }


    if (completedTasks) {

        completedTasks.textContent =
            tasks.filter(
                task =>
                    task.status ===
                    "Completed"
            ).length;

    }

}



/* =========================================
   CRITERIA PROGRESS
========================================= */

function renderCriteriaProgress() {

    const container =
        document.getElementById(
            "criteriaProgress"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    nbaCriteria.forEach(
        function(criteria) {

            container.innerHTML += `

                <div class="criteria-card">

                    <div class="criteria-card-header">

                        <h3>
                            ${criteria.id}
                        </h3>

                        <span>
                            ${criteria.progress}%
                        </span>

                    </div>

                    <p
                        style="
                        font-size:12px;
                        color:#6b7280;
                        margin-bottom:10px;
                        "
                    >
                        ${criteria.name}
                    </p>

                    <div class="progress">

                        <div
                            class="progress-bar"
                            style="width:${criteria.progress}%"
                        ></div>

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================
   RECENT TASKS
========================================= */

function renderRecentTasks(tasks) {

    const tbody =
        document.getElementById(
            "taskTableBody"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    const recentTasks =
        tasks.slice(0, 5);


    if (recentTasks.length === 0) {

        tbody.innerHTML = `

            <tr>

                <td
                    colspan="5"
                    style="text-align:center;"
                >
                    No tasks assigned.
                </td>

            </tr>

        `;

        return;

    }


    recentTasks.forEach(
        function(task) {

            tbody.innerHTML += `

                <tr>

                    <td>
                        ${task.task}
                    </td>

                    <td>
                        <span class="badge badge-blue">
                            ${task.criterion}
                        </span>
                    </td>

                    <td>
                        ${task.deadline}
                    </td>

                    <td>
                        ${getStatusBadge(task.status)}
                    </td>

                    <td>

                        <button
                            class="btn btn-secondary"
                            onclick="openTask('${task.id}')"
                        >
                            Open
                        </button>

                    </td>

                </tr>

            `;

        }
    );

}



/* =========================================
   ALL TASKS
========================================= */

function renderAllTasks(tasks) {

    const tbody =
        document.getElementById(
            "allTasksBody"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    tasks.forEach(
        function(task) {

            tbody.innerHTML += `

                <tr>

                    <td>
                        ${task.id}
                    </td>

                    <td>
                        ${task.task}
                    </td>

                    <td>
                        ${task.criterion}
                    </td>

                    <td>
                        ${task.deadline}
                    </td>

                    <td>
                        ${getStatusBadge(task.status)}
                    </td>

                    <td>

                        <button
                            class="btn btn-secondary"
                            onclick="openTask('${task.id}')"
                        >
                            Open
                        </button>

                    </td>

                </tr>

            `;

        }
    );

}



/* =========================================
   RECENT DOCUMENTS
========================================= */

function renderRecentDocuments(
    documents
) {

    const tbody =
        document.getElementById(
            "documentTableBody"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    documents
        .slice(0, 5)
        .forEach(
            function(document) {

                tbody.innerHTML += `

                    <tr>

                        <td>
                            📄 ${document.fileName}
                        </td>

                        <td>
                            ${document.criterion}
                        </td>

                        <td>
                            ${document.academicYear}
                        </td>

                        <td>
                            ${document.uploadDate}
                        </td>

                        <td>
                            ${getStatusBadge(
                                document.status
                            )}
                        </td>

                    </tr>

                `;

            }
        );

}



/* =========================================
   ALL DOCUMENTS
========================================= */

function renderAllDocuments(
    documents
) {

    const container =
        document.getElementById(
            "allDocuments"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    if (documents.length === 0) {

        container.innerHTML = `
            <p style="color:#6b7280;">
                No documents uploaded yet.
            </p>
        `;

        return;

    }


    documents.forEach(
        function(document) {

            container.innerHTML += `

                <div class="document-item">

                    <div class="document-info">

                        <div class="document-icon">
                            📄
                        </div>

                        <div>

                            <strong>
                                ${document.fileName}
                            </strong>

                            <small
                                style="
                                display:block;
                                color:#6b7280;
                                margin-top:4px;
                                "
                            >
                                ${document.criterion}
                                ·
                                ${document.documentType}
                                ·
                                ${document.academicYear}
                            </small>

                        </div>

                    </div>

                    <div>

                        ${getStatusBadge(
                            document.status
                        )}

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================
   STATUS BADGE
========================================= */

function getStatusBadge(status) {

    let className =
        "badge-gray";


    if (status === "Completed") {

        className =
            "badge-green";

    }


    if (status === "Verified") {

        className =
            "badge-green";

    }


    if (status === "Pending") {

        className =
            "badge-orange";

    }


    if (status === "In Progress") {

        className =
            "badge-blue";

    }


    if (status === "Submitted") {

        className =
            "badge-blue";

    }


    return `

        <span class="badge ${className}">
            ${status}
        </span>

    `;

}



/* =========================================
   CRITERIA LIST
========================================= */

function renderCriteriaList() {

    const container =
        document.getElementById(
            "criteriaList"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    nbaCriteria.forEach(
        function(criteria) {

            container.innerHTML += `

                <div
                    class="document-item"
                >

                    <div>

                        <strong>
                            ${criteria.id}
                            -
                            ${criteria.name}
                        </strong>

                    </div>

                    <div>

                        <span
                            class="badge badge-blue"
                        >
                            ${criteria.progress}%
                        </span>

                    </div>

                </div>

            `;

        }
    );

}



/* =========================================
   SECTION SWITCHING
========================================= */

function showSection(section) {

    const sections = [

        "dashboard",
        "tasks",
        "documents",
        "criteria",
        "notifications"

    ];


    sections.forEach(
        function(name) {

            const element =
                document.getElementById(
                    name + "Section"
                );


            if (element) {

                element.classList.add(
                    "hidden"
                );

            }

        }
    );


    const selected =
        document.getElementById(
            section + "Section"
        );


    if (selected) {

        selected.classList.remove(
            "hidden"
        );

    }


    const dashboard =
        document.getElementById(
            "dashboardSection"
        );


    if (
        section === "dashboard" &&
        dashboard
    ) {

        dashboard.classList.remove(
            "hidden"
        );

    }


    const pageTitle =
        document.getElementById(
            "pageTitle"
        );


    if (pageTitle) {

        const titles = {

            dashboard: "Dashboard",

            tasks: "My Tasks",

            documents: "My Documents",

            criteria: "NBA Criteria",

            notifications: "Notifications"

        };


        pageTitle.textContent =
            titles[section] ||
            "Dashboard";

    }

}



/* =========================================
   OPEN TASK
========================================= */

function openTask(taskId) {

    const task =
        demoTasks.find(
            item =>
                item.id === taskId
        );


    if (!task) {

        return;

    }


    alert(

        "Task: " +
        task.task +
        "\n\n" +

        "Criterion: " +
        task.criterion +
        "\n\n" +

        "Deadline: " +
        task.deadline +
        "\n\n" +

        "Status: " +
        task.status

    );

}



/* =========================================
   FILE SELECTOR
========================================= */

function setupFileSelector() {

    const fileInput =
        document.getElementById(
            "file"
        );


    const selectedFile =
        document.getElementById(
            "selectedFile"
        );


    if (!fileInput) {

        return;

    }


    fileInput.addEventListener(
        "change",
        function() {

            if (
                fileInput.files &&
                fileInput.files.length > 0
            ) {

                const file =
                    fileInput.files[0];


                const sizeMB =
                    (
                        file.size /
                        (1024 * 1024)
                    ).toFixed(2);


                selectedFile.innerHTML = `

                    📄 ${file.name}

                    <br>

                    <small>
                        ${sizeMB} MB
                    </small>

                `;

            } else {

                selectedFile.textContent =
                    "";

            }

        }
    );

}



/* =========================================
   UPLOAD FORM
========================================= */

function setupUploadForm() {

    const form =
        document.getElementById(
            "uploadForm"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const user =
                getCurrentUser();


            if (!user) {

                alert(
                    "Please login first."
                );

                return;

            }


            const fileInput =
                document.getElementById(
                    "file"
                );


            const status =
                document.getElementById(
                    "uploadStatus"
                );


            const button =
                document.getElementById(
                    "uploadButton"
                );


            if (
                !fileInput.files ||
                !fileInput.files.length
            ) {

                status.className =
                    "upload-status error";

                status.textContent =
                    "Please select a file.";

                return;

            }


            const file =
                fileInput.files[0];


            const criterion =
                document.getElementById(
                    "criterion"
                ).value;


            const requirement =
                document.getElementById(
                    "requirement"
                ).value;


            const academicYear =
                document.getElementById(
                    "academicYear"
                ).value;


            const semester =
                document.getElementById(
                    "semester"
                ).value;


            const course =
                document.getElementById(
                    "course"
                ).value;


            const documentType =
                document.getElementById(
                    "documentType"
                ).value;


            const description =
                document.getElementById(
                    "description"
                ).value;


            button.disabled = true;

            button.textContent =
                "Uploading...";


            status.className =
                "upload-status success";

            status.textContent =
                "Processing document...";


            /*
               DEMO ONLY

               This does NOT upload the
               actual file to Google Drive.

               It saves the document
               information in localStorage.
            */


            setTimeout(
                function() {

                    const documents =
                        JSON.parse(
                            localStorage.getItem(
                                "nbaDocuments"
                            ) || "[]"
                        );


                    const newDocument = {

                        id:
                            "DOC" +
                            Date.now(),

                        userId:
                            user.userId,

                        criterion:
                            criterion,

                        requirement:
                            requirement,

                        course:
                            course,

                        academicYear:
                            academicYear,

                        semester:
                            semester,

                        documentType:
                            documentType,

                        description:
                            description,

                        fileName:
                            file.name,

                        fileSize:
                            file.size,

                        status:
                            "Submitted",

                        uploadDate:
                            new Date()
                                .toISOString()
                                .split("T")[0]

                    };


                    documents.unshift(
                        newDocument
                    );


                    localStorage.setItem(
                        "nbaDocuments",
                        JSON.stringify(
                            documents
                        )
                    );


                    status.textContent =
                        "Document submitted successfully! " +
                        "Demo record has been saved.";

                    button.disabled =
                        false;

                    button.textContent =
                        "📤 Upload Document";


                    form.reset();


                    document.getElementById(
                        "selectedFile"
                    ).textContent =
                        "";


                },
                1000
            );

        }
    );

}



/* =========================================
   MOBILE SIDEBAR
========================================= */

function toggleSidebar() {

    const sidebar =
        document.getElementById(
            "sidebar"
        );


    if (sidebar) {

        sidebar.classList.toggle(
            "open"
        );

    }

}



/* =========================================
   MAKE FUNCTIONS AVAILABLE
========================================= */

window.logout =
    logout;

window.showSection =
    showSection;

window.openTask =
    openTask;

window.toggleSidebar =
    toggleSidebar;
