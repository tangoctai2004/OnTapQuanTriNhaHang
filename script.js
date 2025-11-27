let currentMode = '';
let currentQuestions = [];
let currentQuestionId = null;
let selectedChapters = [];

// Load status from local storage
function getQuestionStatus(id) {
    const key = `flashcard_status_${currentMode}`;
    const saved = localStorage.getItem(key);
    const statusMap = saved ? JSON.parse(saved) : {};
    return statusMap[id] || null;
}

function saveQuestionStatus(id, status) {
    const key = `flashcard_status_${currentMode}`;
    const saved = localStorage.getItem(key);
    const statusMap = saved ? JSON.parse(saved) : {};
    statusMap[id] = status;
    localStorage.setItem(key, JSON.stringify(statusMap));
}

function resetStatus() {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ trạng thái và đáp án của chế độ này không?')) {
        // Clear status
        const statusKey = `flashcard_status_${currentMode}`;
        localStorage.removeItem(statusKey);

        // Clear saved answers for current mode
        const keysToRemove = [];
        const answerPrefix = `flashcard_answer_${currentMode}_`;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(answerPrefix)) {
                keysToRemove.push(key);
            }
        }

        keysToRemove.forEach(key => localStorage.removeItem(key));

        showMap();
    }
}

function startApp(mode) {
    currentMode = mode;

    // Get selected chapters
    const checkboxes = document.querySelectorAll('.chapter-selection input:checked');
    selectedChapters = Array.from(checkboxes).map(cb => parseInt(cb.value));

    if (selectedChapters.length === 0) {
        alert('Vui lòng chọn ít nhất một chương!');
        return;
    }

    // Filter questions based on mode and chapter
    const sourceQuestions = (currentMode === 'essay') ? essayQuestions : fillQuestions;
    currentQuestions = sourceQuestions.filter(q => selectedChapters.includes(q.chapter));

    if (currentQuestions.length === 0) {
        alert('Không có câu hỏi nào cho chương đã chọn.');
        return;
    }

    document.getElementById('setup-screen').classList.remove('active');
    showMap();
}

function showMap() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('map-screen').classList.add('active');

    const mapContainer = document.getElementById('question-map');
    mapContainer.innerHTML = '';

    let memorizedCount = 0;

    currentQuestions.forEach((q, index) => {
        const status = getQuestionStatus(q.id);
        if (status === 'memorized') memorizedCount++;

        const item = document.createElement('div');
        item.className = `map-item ${status || ''}`;
        item.textContent = index + 1;
        item.onclick = () => playQuestion(q.id);
        mapContainer.appendChild(item);
    });

    // Update stats
    document.getElementById('memorized-count').textContent = memorizedCount;
    document.getElementById('total-count').textContent = currentQuestions.length;
}

// Answer Persistence Logic
function getUserAnswer(id) {
    const key = `flashcard_answer_${currentMode}_${id}`;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
}

function saveUserAnswer(id, answer) {
    const key = `flashcard_answer_${currentMode}_${id}`;
    localStorage.setItem(key, JSON.stringify(answer));
}

function playQuestion(id) {
    currentQuestionId = id;
    const question = currentQuestions.find(q => q.id === id);

    document.getElementById('map-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');

    renderSidebar();
    showQuestion(question);
}

function renderSidebar() {
    const sidebar = document.getElementById('question-sidebar');
    sidebar.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const status = getQuestionStatus(q.id);
        const item = document.createElement('div');
        item.className = `sidebar-item ${status || ''} ${q.id === currentQuestionId ? 'active' : ''}`;
        item.textContent = `Câu ${index + 1}`;
        item.onclick = () => playQuestion(q.id);
        sidebar.appendChild(item);
    });

    // Scroll active item into view
    setTimeout(() => {
        const activeItem = sidebar.querySelector('.active');
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

function showQuestion(question) {
    const container = document.getElementById('card-container');
    const checkBtn = document.getElementById('check-btn');
    const statusBtns = document.getElementById('status-btns');
    const answerBox = document.getElementById('correct-answer-box');
    const answerText = document.getElementById('correct-answer-text');

    // Reset UI state
    checkBtn.style.display = 'block';
    statusBtns.style.display = 'none';
    answerBox.style.display = 'none';

    // Check if already answered/status saved
    const status = getQuestionStatus(question.id);
    if (status) {
        checkBtn.style.display = 'none';
        statusBtns.style.display = 'flex';
        answerBox.style.display = 'block';
        answerText.textContent = question.answer;
        updateStatusUI(status);
    }

    // Update stats
    const index = currentQuestions.findIndex(q => q.id === question.id);
    document.getElementById('question-count').textContent = `Câu ${index + 1}/${currentQuestions.length}`;

    container.innerHTML = '';

    if (currentMode === 'essay') {
        renderEssay(question, container);
    } else {
        renderFillBlank(question, container);
    }
}

function renderEssay(question, container) {
    const qEl = document.createElement('div');
    qEl.className = 'question';
    qEl.textContent = question.question;
    container.appendChild(qEl);

    const textarea = document.createElement('textarea');
    textarea.className = 'essay-input';
    textarea.placeholder = 'Nhập câu trả lời của bạn tại đây...';

    // Restore saved answer
    const savedAnswer = getUserAnswer(question.id);
    if (savedAnswer) {
        textarea.value = savedAnswer;
    }

    // Save on input
    textarea.addEventListener('input', (e) => {
        saveUserAnswer(question.id, e.target.value);
    });

    container.appendChild(textarea);
}

function renderFillBlank(question, container) {
    const qEl = document.createElement('div');
    qEl.className = 'question';
    qEl.textContent = question.question;
    container.appendChild(qEl);

    const blankArea = document.createElement('div');
    blankArea.className = 'blank-area';

    // Logic to hide key words: hide words longer than 4 chars (fewer blanks)
    const words = question.answer.split(' ');
    let html = '';

    words.forEach((word, index) => {
        const cleanWord = word.replace(/[.,;:"()]/g, '');
        // Hide if length > 4 (hide fewer words) and not a number
        if (cleanWord.length > 4 && isNaN(cleanWord)) {
            const prefix = word.match(/^[.,;:"(]*/) ? word.match(/^[.,;:"(]*/)[0] : '';
            const suffix = word.match(/[.,;:")]+$/) ? word.match(/[.,;:")]+$/)[0] : '';
            const coreWord = word.substring(prefix.length, word.length - suffix.length);

            // Add data-index to identify inputs uniquely within the question
            html += `${prefix}<input type="text" class="blank-input" data-index="${index}" data-answer="${coreWord}" placeholder="..."> ${suffix} `;
        } else {
            html += `${word} `;
        }
    });

    blankArea.innerHTML = html;
    container.appendChild(blankArea);

    // Restore saved answers
    const savedAnswers = getUserAnswer(question.id) || {};
    const inputs = blankArea.querySelectorAll('.blank-input');
    inputs.forEach(input => {
        const idx = input.dataset.index;
        if (savedAnswers[idx]) {
            input.value = savedAnswers[idx];
        }

        // Save on input
        input.addEventListener('input', (e) => {
            const currentSaved = getUserAnswer(question.id) || {};
            currentSaved[idx] = e.target.value;
            saveUserAnswer(question.id, currentSaved);
        });
    });
}

function checkAnswer() {
    const answerBox = document.getElementById('correct-answer-box');
    const answerText = document.getElementById('correct-answer-text');
    const checkBtn = document.getElementById('check-btn');
    const statusBtns = document.getElementById('status-btns');

    const question = currentQuestions.find(q => q.id === currentQuestionId);
    answerText.textContent = question.answer;

    answerBox.style.display = 'block';
    checkBtn.style.display = 'none';
    statusBtns.style.display = 'flex';

    // Reset buttons to active state if no status yet
    updateStatusUI(null);
}

function markStatus(status) {
    saveQuestionStatus(currentQuestionId, status);
    updateStatusUI(status);
    renderSidebar();
}

function updateStatusUI(status) {
    const memorizedBtn = document.querySelector('#status-btns .btn.success');
    const notMemorizedBtn = document.querySelector('#status-btns .btn.danger');

    // Reset classes first
    memorizedBtn.classList.remove('inactive');
    notMemorizedBtn.classList.remove('inactive');

    if (status === 'memorized') {
        notMemorizedBtn.classList.add('inactive');
    } else if (status === 'not-memorized') {
        memorizedBtn.classList.add('inactive');
    }
}

function showResult() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    document.getElementById('final-score-display').parentElement.style.display = 'none'; // Hide score in result
}

function returnToMenu() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('map-screen').classList.remove('active'); // Fix: Hide map screen
    document.getElementById('setup-screen').classList.add('active');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
