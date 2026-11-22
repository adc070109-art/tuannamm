
const sky = document.getElementById("sky");

// Arka planda yıldız oluşturma
for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";

    sky.appendChild(star);
}

// Mektup açma
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", function () {
    envelope.classList.toggle("open");
    letter.classList.toggle("hidden");
});

// Yıldız mesajları
const messages = [
    "Gülüşün, en sevdiğim manzara. ❤️",
    "Yanında kendim olmayı çok seviyorum.",
    "Hayatımın her anında olmanı istiyorum.",
    "En sıradan günüm bile seninle özel.",
    "Sen benim için bir seçim değilsin,benim kaderimsin.",
    "Seni kelimelerin anlatabileceğinden daha çok seviyorum."
];

function showMessage(index) {
    document.getElementById("message").textContent = messages[index];
}

// Mini oyun
const questions = [
    {
        question: "Bizim İlişkimiz hangi gün başladı?",
        answers: ["13 Kasım", "21 Mart", "21 Mayıs"],
        correct: 1
    },
    {
        question: "İkimizinde en baskın özelliği?",
        answers: ["Kıskançlık", "Sinir", "Hiperaktiflik"],
        correct: 0
    
    },
    {
        question: "Sence senden soğur muyum?",
        answers: ["Evet", "Belki", "Asla"],
        correct: 2
        
    },
]

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;
    document.getElementById("result").textContent = "";

    const buttons = document.querySelectorAll(".quiz button:not(#next)");

    buttons.forEach((button, index) => {
        button.textContent = q.answers[index];
        button.disabled = false;
        button.onclick = () => answer(index);
    });

    document.getElementById("next").classList.add("hidden");
}


function answer(index) {
    const correct = questions[currentQuestion].correct;
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll(".quiz button:not(#next)");
    const next = document.getElementById("next");

    if (index === correct) {
        buttons.forEach(button => button.disabled = true);
        result.textContent = "Doğru cevap ❤️";
        next.classList.remove("hidden");
    } 
    else {
        if (currentQuestion === 2) {
            result.textContent = "Doğru cevap ver eşşek";

            buttons.forEach(button => button.disabled = false);
            next.classList.add("hidden");
        } 
        else {
            buttons.forEach(button => button.disabled = true);
            result.textContent = "Canın sağ olsun, doğru cevap: " +
                questions[currentQuestion].answers[correct];

            next.classList.remove("hidden");
        }
    }
}
document.getElementById("next").addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("result").textContent =
            "Bütün soruları tamamladın güzelim ❤️";

        this.classList.add("hidden");
    }
});

loadQuestion();

// Final sürprizi
function finalSurprise() {
    const final = document.getElementById("finalMessage");

    final.classList.remove("hidden");

    final.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Küçük yıldız patlaması
    for (let i = 0; i < 30; i++) {
        const star = document.createElement("div");

        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.width = "4px";
        star.style.height = "4px";

        sky.appendChild(star);

        setTimeout(() => star.remove(), 3000);
    }
}
