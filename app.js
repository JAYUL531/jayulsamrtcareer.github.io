// --- DATABASE: ROADMAP DATA ---
const roadmapDb = {
    frontend: {
        title: "Frontend Developer Career Path",
        description: "Master visual rendering, responsive styles, dynamic logic, and framework ecosystems to build high-performance client web applications.",
        steps: [
            {
                num: "Step 1",
                title: "Web & Internet Fundamentals",
                desc: "Understand how websites work, domain registration, hosting basics, and layout structures.",
                skills: ["HTML5 (Semantic Elements)", "CSS3 (Reset & Box Model)", "Web Standards", "SEO Meta Tags & Auditing"]
            },
            {
                num: "Step 2",
                title: "Programming Logic & DOM",
                desc: "Add behavior to static interfaces, manipulate tags in real-time, and fetch API data.",
                skills: ["JavaScript ES6+ Syntax", "DOM Selections & Events", "Asynchronous Calls (Fetch/JSON)", "Error Handling"]
            },
            {
                num: "Step 3",
                title: "Responsive Grids & Styling Systems",
                desc: "Optimize layouts for mobile screens, build flex elements, and organize styling tokens.",
                skills: ["CSS Flexbox & CSS Grid", "Media Queries (Breakpoints)", "CSS Custom Properties", "Translucent glassmorphism details"]
            },
            {
                num: "Step 4",
                title: "Ecosystems, Frameworks & Git",
                desc: "Structure complex SPAs using modern component trees, packages, and code repositories.",
                skills: ["React.js or Vite environment", "NPM Package Management", "Git & GitHub Version Control", "Testing & Deployment"]
            }
        ]
    },
    backend: {
        title: "Backend Developer Career Path",
        description: "Build robust servers, construct API architectures, design structured databases, and handle security credentials.",
        steps: [
            {
                num: "Step 1",
                title: "Language Foundation & Environment",
                desc: "Learn scripting syntax, logic compilation, and command-line execution.",
                skills: ["JavaScript (Node.js runtime)", "Python or Java syntax", "Command Line Tools", "Environment Settings"]
            },
            {
                num: "Step 2",
                title: "Relational & Non-Relational Databases",
                desc: "Design structured tables, index relations, and query data efficiently.",
                skills: ["SQL Fundamentals", "PostgreSQL or MySQL systems", "Normalization & Indexes", "NoSQL (MongoDB basics)"]
            },
            {
                num: "Step 3",
                title: "Server Stacks & Web APIs",
                desc: "Build HTTP listeners, structure endpoints, and manage server response statuses.",
                skills: ["Express.js framework", "RESTful Routing", "API Middleware", "Parsing Headers & Payloads"]
            },
            {
                num: "Step 4",
                title: "Security, Sessions & Deployment",
                desc: "Guard routes with authentication tokens, hash user passwords, and deploy code to cloud providers.",
                skills: ["JWT (JSON Web Tokens)", "Bcrypt Password Hashing", "CORS Configuration", "Cloud Hosting (Render/Heroku)"]
            }
        ]
    },
    fullstack: {
        title: "Fullstack Web Engineer Career Path",
        description: "Unify user interfaces with backend servers, design full data pipelines, and deploy complete applications.",
        steps: [
            {
                num: "Step 1",
                title: "UI Rendering & Styling basics",
                desc: "Build core markup structures and responsive styles that render correctly on all viewports.",
                skills: ["HTML5 & Semantics", "Modern Responsive CSS", "Git branching workflows"]
            },
            {
                num: "Step 2",
                title: "Client Logic & Server Runtimes",
                desc: "Unify frontend JS functionality with server runtime tools.",
                skills: ["JavaScript (Client & Node.js)", "React components", "API connections using Axios/Fetch"]
            },
            {
                num: "Step 3",
                title: "Database Integration",
                desc: "Map web forms to database tables and query dynamic feeds.",
                skills: ["Database schemas (SQL/NoSQL)", "ORM (Prisma or Mongoose)", "Security validations"]
            },
            {
                num: "Step 4",
                title: "DevOps & Cloud Systems",
                desc: "Automate code compilation, manage environment variables, and verify deployments.",
                skills: ["CI/CD pipelines", "Docker containerization", "Cloud Servers & CDNs", "Performance caching"]
            }
        ]
    },
    datascience: {
        title: "Data Analyst & Scientist Path",
        description: "Parse large datasets, build analytical visual dashboards, and apply core mathematical models.",
        steps: [
            {
                num: "Step 1",
                title: "Statistics & Python Scripting",
                desc: "Learn scripting algorithms, data structures, and mathematical probabilities.",
                skills: ["Python Language syntax", "Linear Algebra & Statistics", "Data Types & Collections"]
            },
            {
                num: "Step 2",
                title: "SQL & Data Extraction",
                desc: "Access data warehousing engines and filter large datasets.",
                skills: ["Advanced SQL queries", "Joins, Aggregations, Grouping", "Database Connectors"]
            },
            {
                num: "Step 3",
                title: "Data Wrangling & Libraries",
                desc: "Clean messy file formats, drop duplicates, and restructure dataframes.",
                skills: ["Pandas Library", "NumPy arrays", "Jupyter Notebooks", "JSON/CSV Parsing"]
            },
            {
                num: "Step 4",
                title: "Visuals & Machine Learning Intro",
                desc: "Plot trendlines, build histograms, and train basic regression models.",
                skills: ["Matplotlib & Seaborn plots", "Scikit-Learn algorithms", "Supervised Learning models"]
            }
        ]
    }
};
// --- DATABASE: INTERVIEW QUESTIONS ---
const interviewDb = {
    webdev: [
        {
            q: "What is the difference between let, const, and var in JavaScript?",
            diff: "easy",
            a: "<strong>var</strong> is function-scoped, hoisted, and allows re-declaration. <br><strong>let</strong> is block-scoped, hoisted but not initialized (temporal dead zone), and can be updated but not re-declared in the same scope. <br><strong>const</strong> is block-scoped, cannot be updated or re-declared, and must be initialized during declaration (though properties of const objects/arrays can be mutated)."
        },
        {
            q: "Explain the CSS Box Model.",
            diff: "easy",
            a: "Every HTML element is rendered as a rectangular box consisting of: <br>1. <strong>Content</strong>: Where text and images appear.<br>2. <strong>Padding</strong>: Translucent space directly around the content (inside the border).<br>3. <strong>Border</strong>: A line surrounding the padding.<br>4. <strong>Margin</strong>: Space outside the border separating the element from neighbors. <br>Setting <code>box-sizing: border-box</code> includes padding/border in the element's width/height calculation."
        },
        {
            q: "What is Event Delegation and how does it work?",
            diff: "medium",
            a: "Event delegation is a design pattern where a single event listener is attached to a parent element rather than multiple listeners to individual child elements. It works due to <strong>Event Bubbling</strong> (events travel up the DOM tree). By checking <code>event.target</code>, you can identify which child was clicked and execute logic accordingly. This saves memory and handles dynamically added elements automatically."
        },
        {
            q: "What is the difference between synchronous and asynchronous code in JS?",
            diff: "medium",
            a: "<strong>Synchronous</strong> code executes line-by-line in a blocking manner; the next line cannot run until the current one finishes. <br><strong>Asynchronous</strong> code executes in a non-blocking manner, letting other processes run while waiting for operations (like API requests or timers) to complete. Asynchronous logic in JS is managed via Callback functions, Promises, and the <code>async/await</code> syntax using the event loop."
        },
        {
            q: "How does the Virtual DOM work in modern frameworks?",
            diff: "hard",
            a: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. When data updates: <br>1. The UI is re-rendered into a new Virtual DOM tree. <br>2. A diffing algorithm compares this tree with the previous Virtual DOM tree.<br>3. The differences (patches) are calculated. <br>4. Only the modified parts are updated in the real DOM (Reconciliation), which avoids expensive full-page DOM updates and boosts performance."
        }
    ],
    database: [
        {
            q: "What is the difference between INNER JOIN and LEFT JOIN?",
            diff: "easy",
            a: "<strong>INNER JOIN</strong> returns rows only when there is a match in both joined tables. <br><strong>LEFT JOIN</strong> (or LEFT OUTER JOIN) returns all records from the left table, and the matching records from the right table. If there is no match, it returns NULL values for all columns of the right table."
        },
        {
            q: "What are Primary Keys and Foreign Keys?",
            diff: "easy",
            a: "A <strong>Primary Key</strong> is a column (or set of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique. <br>A <strong>Foreign Key</strong> is a column in one table that links to the Primary Key of another table, enforcing referential integrity between tables."
        },
        {
            q: "Explain Database Normalization (1NF, 2NF, 3NF).",
            diff: "medium",
            a: "Normalization is the process of structuring a relational database to reduce data redundancy and improve integrity: <br>- <strong>1NF</strong>: Ensure columns contain atomic (indivisible) values and remove duplicate groups.<br>- <strong>2NF</strong>: Meet 1NF and ensure all non-key attributes are fully dependent on the primary key.<br>- <strong>3NF</strong>: Meet 2NF and remove transitive dependencies (non-key columns must not depend on other non-key columns)."
        },
        {
            q: "What is a Database Index and what are its trade-offs?",
            diff: "medium",
            a: "An index is a data structure (typically a B-Tree) that speeds up data retrieval operations on a table at the cost of storage and write performance. <br><strong>Pros:</strong> Drastically speeds up SELECT queries with WHERE filters or JOIN operations. <br><strong>Cons:</strong> Slows down INSERT, UPDATE, and DELETE operations because the index must be updated alongside table records, and uses additional disk space."
        },
        {
            q: "Explain the ACID properties of Relational Databases.",
            diff: "hard",
            a: "ACID represents properties that guarantee database transactions are processed reliably:<br>- <strong>Atomicity:</strong> 'All or nothing' — if any part of the transaction fails, the entire transaction is rolled back.<br>- <strong>Consistency:</strong> The database must transition from one valid state to another, satisfying all schema rules/constraints.<br>- <strong>Isolation:</strong> Concurrent transactions execute independently without interfering with each other.<br>- <strong>Durability:</strong> Once a transaction is committed, it remains saved even in the event of a power outage or crash."
        }
    ],
    java: [
        {
            q: "What are the four main pillars of Object-Oriented Programming (OOP)?",
            diff: "easy",
            a: "The pillars are:<br>1. <strong>Encapsulation:</strong> Wrapping variables and code logic inside a single class and restricting direct access via private modifiers and public getters/setters.<br>2. <strong>Inheritance:</strong> Allowing one class to inherit attributes and methods of another (using <code>extends</code>), promoting code reuse.<br>3. <strong>Polymorphism:</strong> Performing a single action in different ways (Method Overloading & Method Overriding).<br>4. <strong>Abstraction:</strong> Hiding implementation complexities and showing only essential features (using abstract classes and interfaces)."
        },
        {
            q: "What is the difference between == and .equals() in Java?",
            diff: "easy",
            a: "<strong>==</strong> is a comparison operator that compares memory addresses (reference equality) for objects, and actual values for primitive types. <br><strong>.equals()</strong> is a method in the Object class that is overridden to compare the actual contents/states of two objects (content equality), like comparing two strings."
        },
        {
            q: "Difference between an Interface and an Abstract Class in Java?",
            diff: "medium",
            a: "<strong>Interface:</strong> Supports multiple inheritance, can only contain static final variables, and by default contains only abstract methods (except default/static methods in Java 8+). Classes implement interfaces. <br><strong>Abstract Class:</strong> Can contain instance variables, constructors, and concrete methods. A class can only extend one abstract class. Used when classes share a tight conceptual relationship."
        },
        {
            q: "How does Garbage Collection (GC) work in Java?",
            diff: "medium",
            a: "Garbage Collection is an automatic memory management process in the JVM. It tracks objects in Heap memory and deletes objects that are no longer referenced by any active thread. It generally uses a Mark-and-Sweep algorithm: marking reachable objects, sweeping away unreachable objects, and compacting memory to prevent fragmentation."
        },
        {
            q: "Explain Method Overloading vs Method Overriding.",
            diff: "medium",
            a: "<strong>Method Overloading:</strong> Creating multiple methods in the same class with the same name but different signatures (parameters). It is a compile-time (static) polymorphism. <br><strong>Method Overriding:</strong> Declaring a method in a subclass with the same name, return type, and parameters as a method in its superclass. It is a runtime (dynamic) polymorphism."
        }
    ],
    softwareeng: [
        {
            q: "What is the Software Development Life Cycle (SDLC)?",
            diff: "easy",
            a: "SDLC is a structured process used to design, develop, and test high-quality software. Its key phases are:<br>1. Requirement gathering & analysis<br>2. Feasibility study & planning<br>3. System architecture design<br>4. Code implementation & programming<br>5. Quality assurance testing<br>6. Deployment to staging/production<br>7. Post-deployment maintenance"
        },
        {
            q: "What is the difference between Agile and Waterfall methodologies?",
            diff: "easy",
            a: "<strong>Waterfall:</strong> A linear, sequential approach where each phase (requirements, design, coding, testing) must be completed before the next begins. Difficult to change requirements mid-way. <br><strong>Agile:</strong> An iterative and incremental approach that focuses on continuous feedback, rapid releases (sprints), and collaborative planning, making it highly adaptive to changes."
        },
        {
            q: "What is Git and why is it essential?",
            diff: "easy",
            a: "Git is a distributed version control system that tracks file modifications over time. It allows multiple developers to work on the same codebase simultaneously through branches without overwriting each other's changes, provides full rollback capability, and records a commit history for auditing code changes."
        },
        {
            q: "Explain the difference between Unit Testing and Integration Testing.",
            diff: "medium",
            a: "<strong>Unit Testing:</strong> Testing small, isolated blocks of code (such as a single function or class method) to ensure correctness, typically using mocks for external dependencies. <br><strong>Integration Testing:</strong> Testing how multiple modules, database connections, or API endpoints interact together as a combined system."
        },
        {
            q: "Explain MVC architecture.",
            diff: "medium",
            a: "MVC is a design pattern used to separate application concerns:<br>- <strong>Model:</strong> Represents the database schema and application logic.<br>- <strong>View:</strong> The user interface components (HTML/CSS) that render data to users.<br>- <strong>Controller:</strong> Processes user input, interacts with the Model, and returns the updated display output to the View."
        }
    ]
};
// --- CHATBOT DICTIONARY FOR AI RESPONSE ---
const chatbotResponses = [
    {
        keys: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon"],
        reply: "Hello! I am your SmartCareer AI career assistant. How can I help guide your IT career journey today? You can ask me about Frontend roadmaps, SQL tips, interview questions, or how to audit your resume."
    },
    {
        keys: ["frontend", "front end", "web dev", "html", "css", "js", "javascript"],
        reply: "Frontend development is an excellent field! To start, master HTML5, CSS3, and JavaScript (ES6+). I highly recommend checking out our **Skill Roadmaps** section in the sidebar. Once you understand the basics, explore responsive designs, Git, and frameworks like React or Vue."
    },
    {
        keys: ["backend", "back end", "node", "express", "server", "databases", "database"],
        reply: "Backend development manages servers, database structures, and APIs. Focus on learning a scripting environment like Node.js or Python, SQL databases (like MySQL/PostgreSQL), and RESTful API structures. You can check the **Backend Developer** timeline in the **Skill Roadmaps** tab!"
    },
    {
        keys: ["fullstack", "full stack", "web engineer"],
        reply: "Fullstack engineers bridge the gap between user interfaces and databases. Start by building complete applications with Node.js and React. Emphasize integration, version control (Git), and hosting your frontend and backend on platforms like Render or Vercel. See the **Fullstack Web Engineer** roadmap in the roadmaps menu."
    },
    {
        keys: ["data science", "data scientist", "data analyst", "python", "pandas", "numpy"],
        reply: "Data Analysts and Scientists extract insights from complex databases. Start by learning Python scripting, SQL, and data packages (Pandas, NumPy). Focus on visualizing data trends with Seaborn/Matplotlib. View our specialized **Data Analyst / Scientist** path in the roadmaps menu."
    },
    {
        keys: ["resume", "cv", "portfolio", "format", "tips"],
        reply: "A great resume highlights your technical projects, details core skills (HTML, CSS, JS, SQL), and quantifies results. Use our **Resume Analyzer** tool in the sidebar! Simply drag and drop your resume file, click 'Analyze', and I'll calculate your layout score and provide suggestions."
    },
    {
        keys: ["interview", "questions", "prepare", "tips"],
        reply: "Preparing for interviews is about building technical confidence and structuring communication. Use the STAR method (Situation, Task, Action, Result) for behavioral questions. For technical topics, explore our **Interview Prep** section in the sidebar, choose your domain, and review sample answers."
    },
    {
        keys: ["internship", "project", "jayul", "enrollment", "college", "rc polytechnic", "rcp"],
        reply: "This web application is a professional internship project designed for career guidance. It was developed by **Jayul Patel Digvijaybhai** (Enrollment No: **246400316133**), a 3rd-year **Information Technology** student at **R.C Polytechnic Institute** (Branch Code 16). Feel free to check the **Student Profile** page for complete developer credentials!"
    },
    {
        keys: ["branch code 16", "it branch", "information technology", "code 16"],
        reply: "Branch Code 16 represents the **Information Technology** department. The curriculum covers web engineering, relational databases, data structures, network security, and operating systems. This internship project uses those core learnings to create interactive career development tooling."
    },
    {
        keys: ["thank you", "thanks", "awesome", "perfect"],
        reply: "You're very welcome! If you have any more career questions, need coding tips, or want advice on building project portfolios, feel free to ask. Happy learning!"
    }
];
// --- CORE APPLICATION INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initChatbot();
    initResumeAnalyzer();
    initRoadmaps();
    initInterviewPrep();
    initContactForm();
    
    // Premium Animations & Micro-interactions
    initCustomCursor();
    initParticles();
    initHeroChart();
    initCardTilt();
    initScrollReveal();
});
// --- NAVIGATION & TABS ---
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
    const sidebar = document.getElementById("sidebar");
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    const scrollTriggers = document.querySelectorAll(".scroll-trigger");
    const mainContent = document.getElementById("mainContent");
    // Click navigation handler
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSectionId = link.getAttribute("data-section");
            switchSection(targetSectionId);
            
            // Close mobile sidebar drawer if open
            if (sidebar.classList.contains("open")) {
                sidebar.classList.remove("open");
                mobileNavToggle.querySelector("i").className = "fas fa-bars";
            }
        });
    });
    // Mobile nav toggle click handler
    mobileNavToggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("open");
        mobileNavToggle.querySelector("i").className = isOpen ? "fas fa-times" : "fas fa-bars";
    });
    // Handles inline links/CTA buttons
    scrollTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute("href").substring(1);
            switchSection(targetId);
        });
    });
    // Handle initial hash routing
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        const sectionExists = document.getElementById(sectionId);
        if (sectionExists && sectionExists.classList.contains("section")) {
            switchSection(sectionId);
        }
    }
    function switchSection(sectionId) {
        // Toggle sections active states
        sections.forEach(sec => {
            sec.classList.remove("active");
            if (sec.id === sectionId) {
                sec.classList.add("active");
            }
        });
        // Toggle nav-links active states
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-section") === sectionId) {
                link.classList.add("active");
            }
        });
        // Push window history hash
        window.history.pushState(null, null, `#${sectionId}`);
        
        // Scroll main container to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}
// --- AI CHATBOT SYSTEM ---
function initChatbot() {
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    const typingIndicator = document.getElementById("typingIndicator");
    const suggestionBtns = document.querySelectorAll(".suggestion-btn");
    const clearChatBtn = document.getElementById("clearChatBtn");
    // Suggestion prompt triggers
    suggestionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const query = btn.getAttribute("data-question");
            submitChatMessage(query);
        });
    });
    // Chat submit listener
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (text) {
            submitChatMessage(text);
            chatInput.value = "";
        }
    });
    // Clear chat listener
    clearChatBtn.addEventListener("click", () => {
        // Keep initial bot greeting, delete rest
        chatMessages.innerHTML = `
            <div class="message ai-message">
                <div class="message-bubble">
                    <p>Hello! I am your SmartCareer AI Advisor. I can help guide you through various Information Technology roles, suggest roadmaps, check formatting concepts, and provide general career growth tips.</p>
                    <p>What tech stack or role are you interested in today?</p>
                </div>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
    });
    function submitChatMessage(messageText) {
        // Insert User message
        appendMessage(messageText, "user");
        
        // Show Typing Indicator
        typingIndicator.style.display = "flex";
        scrollToBottom();
        // Simulate AI Response latency
        const randomDelay = Math.floor(Math.random() * 800) + 700; // 700ms - 1500ms
        setTimeout(() => {
            const replyText = generateBotReply(messageText);
            
            // Hide indicator and append AI reply
            typingIndicator.style.display = "none";
            appendMessage(replyText, "ai");
            scrollToBottom();
        }, randomDelay);
    }
    function appendMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender}-message`;
        const bubbleDiv = document.createElement("div");
        bubbleDiv.className = "message-bubble";
        
        // Use innerHTML to render bold markdown elements or hyperlinks formatted in reply
        bubbleDiv.innerHTML = formatBotMessage(text);
        
        const timeSpan = document.createElement("span");
        timeSpan.className = "message-time";
        timeSpan.textContent = getCurrentTime();
        messageDiv.appendChild(bubbleDiv);
        messageDiv.appendChild(timeSpan);
        chatMessages.appendChild(messageDiv);
    }
    function generateBotReply(userQuery) {
        const queryCleaned = userQuery.toLowerCase().trim();
        
        // Search response dictionary
        for (const response of chatbotResponses) {
            for (const key of response.keys) {
                if (queryCleaned.includes(key)) {
                    return response.reply;
                }
            }
        }
        
        // Default response if no matches found
        return "I'm not sure I understand that query completely, but I am trained to handle Information Technology career guidelines. Try asking me about **'frontend developer skills'**, **'resume format tips'**, **'mock interview questions'**, or details about developer **'Jayul Patel'**!";
    }
    function formatBotMessage(msg) {
        // Replace simulated bold blocks **text** with HTML bold structures
        return msg.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    }
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // hour '0' should be '12'
        return `${hours}:${minutes} ${ampm}`;
    }
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
// --- AI RESUME ANALYZER ---
function initResumeAnalyzer() {
    const dropZone = document.getElementById("dropZone");
    const resumeFileInput = document.getElementById("resumeFileInput");
    const dropZoneSelected = document.getElementById("dropZoneSelected");
    const selectedFileName = document.getElementById("selectedFileName");
    const removeFileBtn = document.getElementById("removeFileBtn");
    const analyzeBtn = document.getElementById("analyzeBtn");
    const analysisLoading = document.getElementById("analysisLoading");
    const loadingStep = document.getElementById("loadingStep");
    const loadingBarFill = document.getElementById("loadingBarFill");
    const analyzerResults = document.getElementById("analyzerResults");
    
    // Result elements
    const resultScoreText = document.getElementById("resultScoreText");
    const overallScoreBadge = document.getElementById("overallScoreBadge");
    const scoreRingFill = document.getElementById("scoreRingFill");
    const analysisSummaryText = document.getElementById("analysisSummaryText");
    const strengthsList = document.getElementById("strengthsList");
    const improvementsList = document.getElementById("improvementsList");
    const keywordBadges = document.getElementById("keywordBadges");
    // Drag-over styling events
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
    });
    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("dragover");
    });
    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");
        if (e.dataTransfer.files.length) {
            handleFileSelection(e.dataTransfer.files[0]);
        }
    });
    // Click drop-zone trigger
    dropZone.addEventListener("click", (e) => {
        // Prevent trigger if clicking remove file icon
        if (e.target.closest("#removeFileBtn")) return;
        resumeFileInput.click();
    });
    resumeFileInput.addEventListener("change", () => {
        if (resumeFileInput.files.length) {
            handleFileSelection(resumeFileInput.files[0]);
        }
    });
    // Remove file listener
    removeFileBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        resetDropZone();
    });
    // Analyze button click trigger
    analyzeBtn.addEventListener("click", () => {
        runResumeAnalysisSimulation();
    });
    function handleFileSelection(file) {
        const allowedExtensions = ["pdf", "docx", "txt"];
        const fileExt = file.name.split(".").pop().toLowerCase();
        
        if (!allowedExtensions.includes(fileExt)) {
            alert("Unsupported format. Please upload PDF, DOCX, or TXT file.");
            resetDropZone();
            return;
        }
        selectedFileName.textContent = file.name;
        dropZone.classList.add("has-file");
        analyzeBtn.removeAttribute("disabled");
        analyzerResults.style.display = "none"; // Hide previous results
    }
    function resetDropZone() {
        resumeFileInput.value = "";
        dropZone.classList.remove("has-file");
        analyzeBtn.setAttribute("disabled", "true");
        analyzerResults.style.display = "none";
    }
    function runResumeAnalysisSimulation() {
        analysisLoading.style.display = "flex";
        
        const steps = [
            { pct: 25, label: "Reading PDF document structure..." },
            { pct: 50, label: "Scanning target IT keywords & tags..." },
            { pct: 75, label: "Evaluating layout constraints & margins..." },
            { pct: 100, label: "Generating custom career score metrics..." }
        ];
        let currentStepIndex = 0;
        function runStep() {
            if (currentStepIndex < steps.length) {
                const step = steps[currentStepIndex];
                loadingStep.textContent = step.label;
                loadingBarFill.style.width = `${step.pct}%`;
                currentStepIndex++;
                setTimeout(runStep, 800); // 800ms per loading phase
            } else {
                // Done loading
                analysisLoading.style.display = "none";
                loadingBarFill.style.width = "0%";
                displayAnalysisResults();
            }
        }
        runStep();
    }
    function displayAnalysisResults() {
        // Generate values
        const score = Math.floor(Math.random() * 21) + 72; // Generates score between 72 and 92
        const fileName = selectedFileName.textContent.toLowerCase();
        
        // Update texts
        resultScoreText.textContent = score;
        overallScoreBadge.textContent = `${score}/100`;
        // Update circular svg outline. Max offset = 314.15 (100% transparent offset)
        const circumference = 314.15;
        const offsetVal = circumference - (circumference * score / 100);
        scoreRingFill.style.strokeDashoffset = offsetVal;
        // Custom recommendations based on name matching
        let strengths = [];
        let improvements = [];
        let missingKeywordsHtml = "";
        if (fileName.includes("dev") || fileName.includes("front") || fileName.includes("web")) {
            analysisSummaryText.textContent = "Your resume shows clean frontend structures and references core DOM languages. However, detailing your bundler configurations and hosting setups will increase developer screening metrics.";
            strengths = [
                "Detailed technical skills matching HTML5/CSS3 and Javascript standards.",
                "Responsive web design concepts correctly outlined.",
                "Clean email and phone formatting variables."
            ];
            improvements = [
                "Include version control (Git / GitHub repositories) links.",
                "Detail bundler applications used (Webpack, Vite, NPM package tools).",
                "Quantify frontend achievements (e.g. 'Optimized site loading speeds by 25%')."
            ];
            missingKeywordsHtml = `
                <span class="keyword-badge match"><i class="fas fa-check"></i> HTML5</span>
                <span class="keyword-badge match"><i class="fas fa-check"></i> CSS3</span>
                <span class="keyword-badge match"><i class="fas fa-check"></i> JavaScript</span>
                <span class="keyword-badge miss"><i class="fas fa-times"></i> Git & GitHub</span>
                <span class="keyword-badge miss"><i class="fas fa-times"></i> React.js</span>
                <span class="keyword-badge match"><i class="fas fa-check"></i> Responsive Design</span>
            `;
        } else {
            analysisSummaryText.textContent = "Your resume exhibits solid institutional framework details. However, to pass target corporate filters, you must detail concrete web applications, projects, and specialized library dependencies.";
            strengths = [
                "Institutional achievements (R.C Polytechnic College) clearly specified.",
                "IT fundamentals (Branch Code 16) correctly contextualized.",
                "Clear, legible typography usage."
            ];
            improvements = [
                "Replace generic resume goals with explicit technical domains.",
                "Add more active project titles instead of listing coursework.",
                "Mention databases (MySQL/PostgreSQL) and client integration skills."
            ];
            missingKeywordsHtml = `
                <span class="keyword-badge match"><i class="fas fa-check"></i> SQL Database</span>
                <span class="keyword-badge miss"><i class="fas fa-times"></i> Web API Stacks</span>
                <span class="keyword-badge match"><i class="fas fa-check"></i> HTML & CSS</span>
                <span class="keyword-badge miss"><i class="fas fa-times"></i> Version Control</span>
                <span class="keyword-badge match"><i class="fas fa-check"></i> Java / Python</span>
            `;
        }
        // Render arrays
        strengthsList.innerHTML = strengths.map(str => `<li>${str}</li>`).join("");
        improvementsList.innerHTML = improvements.map(imp => `<li>${imp}</li>`).join("");
        keywordBadges.innerHTML = missingKeywordsHtml;
        // Reveal panel
        analyzerResults.style.display = "block";
        
        // Scroll results into view
        analyzerResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}
// --- SKILL ROADMAP EXPLORER ---
function initRoadmaps() {
    const tabs = document.querySelectorAll(".roadmap-tab-btn");
    const roadmapTimeline = document.getElementById("roadmapTimeline");
    const roadmapTitle = document.getElementById("roadmapTitle");
    const roadmapDescription = document.getElementById("roadmapDescription");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const targetRoadmapId = tab.getAttribute("data-roadmap");
            renderRoadmap(targetRoadmapId);
        });
    });
    // Load initial Frontend roadmap
    renderRoadmap("frontend");
    function renderRoadmap(id) {
        const data = roadmapDb[id];
        if (!data) return;
        roadmapTitle.textContent = data.title;
        roadmapDescription.textContent = data.description;
        roadmapTimeline.innerHTML = data.steps.map(step => `
            <div class="roadmap-step">
                <div class="roadmap-dot"></div>
                <div class="roadmap-step-header">
                    <span class="roadmap-step-num">${step.num}</span>
                    <h4 class="roadmap-step-title">${step.title}</h4>
                </div>
                <div class="roadmap-step-card">
                    <p>${step.desc}</p>
                    <div class="roadmap-skills-tags">
                        ${step.skills.map(sk => `<span class="roadmap-skill-tag">${sk}</span>`).join("")}
                    </div>
                </div>
            </div>
        `).join("");
    }
}
// --- INTERVIEW PREPARATION SUITE ---
function initInterviewPrep() {
    const domainSelect = document.getElementById("interviewDomainSelect");
    const questionsAccordion = document.getElementById("questionsAccordion");
    domainSelect.addEventListener("change", () => {
        renderQuestions(domainSelect.value);
    });
    // Render default Web Dev category
    renderQuestions("webdev");
    function renderQuestions(domainId) {
        const questions = interviewDb[domainId];
        if (!questions) return;
        questionsAccordion.innerHTML = questions.map((item, index) => {
            const uniqueId = `prep-${domainId}-${index}`;
            const isChecked = localStorage.getItem(uniqueId) === "true" ? "checked" : "";
            
            return `
                <div class="accordion-item" id="item-${uniqueId}">
                    <div class="accordion-header" onclick="toggleAccordion('${uniqueId}')">
                        <h4>Q${index + 1}: ${item.q}</h4>
                        <i class="fas fa-chevron-down accordion-icon"></i>
                    </div>
                    <div class="accordion-body" id="body-${uniqueId}">
                        <div class="accordion-content">
                            <span class="ans-title">AI Model Answer:</span>
                            <p class="ans-text">${item.a}</p>
                            
                            <div class="accordion-actions">
                                <label class="prep-checkbox-label">
                                    <input type="checkbox" id="check-${uniqueId}" onchange="markPrepared('${uniqueId}')" ${isChecked}>
                                    <span>Mark as Prepared</span>
                                </label>
                                <span class="prep-badge ${item.diff}">${item.diff}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }
}
// Global toggle helper functions for dynamic accordion tags
window.toggleAccordion = function(id) {
    const currentItem = document.getElementById(`item-${id}`);
    const currentBody = document.getElementById(`body-${id}`);
    const allItems = document.querySelectorAll(".accordion-item");
    const allBodies = document.querySelectorAll(".accordion-body");
    // Close others
    allItems.forEach(item => {
        if (item.id !== `item-${id}`) {
            item.classList.remove("active");
        }
    });
    // Toggle active state
    currentItem.classList.toggle("active");
};
window.markPrepared = function(id) {
    const checkbox = document.getElementById(`check-${id}`);
    localStorage.setItem(id, checkbox.checked);
};
// --- CONTACT & FEEDBACK FORM ---
function initContactForm() {
    const form = document.getElementById("contactForm");
    const toast = document.getElementById("formSuccessToast");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Simulating submission delay
        const submitBtn = document.getElementById("contactSubmitBtn");
        submitBtn.setAttribute("disabled", "true");
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;
        setTimeout(() => {
            // Show toast overlay
            toast.style.display = "flex";
            
            // Reset button
            submitBtn.removeAttribute("disabled");
            submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> Submit Message`;
            
            // Reset input values
            form.reset();
            // Auto-hide toast after 4 seconds
            setTimeout(() => {
                toast.style.display = "none";
            }, 4000);
        }, 1200);
    });
    // Click toast to hide it immediately
    toast.addEventListener("click", () => {
        toast.style.display = "none";
    });
}
// ==========================================================================
// ADVANCED UI & MICROMOTION SYSTEM (INTERNSHIP UPGRADE)
// ==========================================================================
// 1. Custom cursor logic (desktop only)
function initCustomCursor() {
    const cursor = document.getElementById("customCursor");
    const dot = document.getElementById("customCursorDot");
    if (!cursor || !dot) return;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    window.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        dot.style.left = `${targetX}px`;
        dot.style.top = `${targetY}px`;
    });
    // Lerp (Linear Interpolation) for smooth cursor lag
    function animateCursor() {
        const ease = 0.15;
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    // Hover elements selectors
    const interactiveElements = document.querySelectorAll(
        "a, button, select, input, textarea, .suggestion-btn, .accordion-header, .roadmap-tab-btn, .drop-zone, .btn-clear-chat"
    );
    
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
    });
}
// 2. Background drifting particles generator
function initParticles() {
    const container = document.getElementById("particleContainer");
    if (!container) return;
    const particleCount = 18;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "bg-particle";
        
        const size = Math.random() * 4 + 3; // 3px to 7px
        const left = Math.random() * 100; // 0% to 100%
        const delay = Math.random() * 12; // 0s to 12s
        const duration = Math.random() * 8 + 12; // 12s to 20s
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        if (Math.random() > 0.5) {
            particle.style.background = `radial-gradient(circle, var(--accent-cyan) 0%, rgba(6, 182, 212, 0) 70%)`;
        }
        container.appendChild(particle);
    }
}
// 3. Dynamic Sine Curve Chart on Canvas
function initHeroChart() {
    const canvas = document.getElementById("heroDashboardChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    function resizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    let offset = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid lines
        ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx.lineWidth = 1;
        const gridGap = 20;
        for (let x = 0; x < canvas.width; x += gridGap) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridGap) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        // Draw line curve
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "#10b981");
        gradient.addColorStop(0.5, "#06b6d4");
        gradient.addColorStop(1, "#8b5cf6");
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = gradient;
        for (let i = 0; i < canvas.width; i++) {
            const x = i;
            const y = (canvas.height / 2) + 
                      Math.sin(i * 0.015 + offset) * 15 + 
                      Math.cos(i * 0.008 + offset * 0.5) * 8;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        // Gradient Fill
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        const fillGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        fillGradient.addColorStop(0, "rgba(16, 185, 129, 0.12)");
        fillGradient.addColorStop(1, "rgba(7, 13, 30, 0)");
        ctx.fillStyle = fillGradient;
        ctx.fill();
        // Pulsing head node
        const headX = canvas.width - 20;
        const headY = (canvas.height / 2) + 
                      Math.sin(headX * 0.015 + offset) * 15 + 
                      Math.cos(headX * 0.008 + offset * 0.5) * 8;
        
        ctx.beginPath();
        ctx.arc(headX, headY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#06b6d4";
        ctx.shadowColor = "#06b6d4";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        offset += 0.025;
        animationFrameId = requestAnimationFrame(draw);
    }
    draw();
}
// 4. Card Mouse Move 3D Tilt Effect
function initCardTilt() {
    const cards = document.querySelectorAll(
        ".feature-card, .student-card, .skills-card, .about-card, .contact-form-card, .contact-info-card"
    );
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rx = ((y / rect.height) - 0.5) * -10; // 10 deg rotation max
            const ry = ((x / rect.width) - 0.5) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });
}
// 5. IntersectionObserver Scroll Reveal tags
function initScrollReveal() {
    const targets = document.querySelectorAll(
        ".feature-card, .about-card, .student-card, .skills-card, .roadmap-step, .tip-card, .contact-form-card, .contact-info-card, .section-header"
    );
    targets.forEach(el => el.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
            }
        });
    }, {
        threshold: 0.06,
        rootMargin: "0px 0px -30px 0px"
    });
    targets.forEach(t => observer.observe(t));
}
