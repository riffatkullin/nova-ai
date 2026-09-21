/* =========================
   NOVA AI DEMO
========================= */

const aiForm = document.getElementById("aiForm");
const aiInput = document.getElementById("aiInput");
const aiMessages = document.getElementById("aiMessages");

const suggestionButtons =
    document.querySelectorAll(".ai-suggestion");


/* =========================
   ADD MESSAGE
========================= */

function addMessage(text, type) {

    const message = document.createElement("div");


    if (type === "user") {

        message.className = "ai-user-message";

        message.textContent = text;

    } else {

        message.className = "ai-response";

        message.innerHTML = `
            <div class="ai-response-title">
                NOVA AI
            </div>

            <p>
                ${text}
            </p>
        `;

    }


    aiMessages.appendChild(message);


    message.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================
   DEMO RESPONSES
========================= */

function generateDemoResponse(text) {

    const request = text.toLowerCase();


    if (
        request.includes("данн") ||
        request.includes("анал") ||
        request.includes("таблиц")
    ) {

        return `
            Я могу помочь структурировать данные,
            найти закономерности и подготовить
            понятный аналитический отчёт.
        `;

    }


    if (
        request.includes("текст") ||
        request.includes("стать") ||
        request.includes("описан")
    ) {

        return `
            Опишите тему, целевую аудиторию
            и желаемый стиль. Я помогу подготовить
            структуру и текст материала.
        `;

    }


    if (
        request.includes("план") ||
        request.includes("этап")
    ) {

        return `
            Предлагаю разбить задачу на этапы:
            определить цель, изучить исходные данные,
            составить план действий и проверить результат.
        `;

    }


    if (
        request.includes("сайт") ||
        request.includes("дизайн")
    ) {

        return `
            Для начала определим цель сайта,
            целевую аудиторию, основные разделы
            и необходимые функции. После этого
            можно перейти к структуре и дизайну.
        `;

    }


    return `
        Задача принята. Я проанализирую ваш запрос
        и предложу несколько возможных вариантов решения.
    `;
}


/* =========================
   CHAT SUBMIT
========================= */

if (aiForm) {

    aiForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const text =
                aiInput.value.trim();


            if (text === "") {
                return;
            }


            addMessage(
                text,
                "user"
            );


            aiInput.value = "";

            aiInput.focus();


            setTimeout(
                function () {

                    const response =
                        generateDemoResponse(text);


                    addMessage(
                        response,
                        "ai"
                    );

                },
                600
            );

        }
    );

}


/* =========================
   QUICK SUGGESTIONS
========================= */

suggestionButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                aiInput.value =
                    button.textContent.trim();

                aiInput.focus();

            }
        );

    }
);


/* =========================
   FAQ
========================= */

const faqItems =
    document.querySelectorAll(
        ".nova-faq-item"
    );


faqItems.forEach(
    function (item) {

        const question =
            item.querySelector(
                ".nova-faq-question"
            );


        question.addEventListener(
            "click",
            function () {

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                /*
                 * Закрываем остальные вопросы
                 */

                faqItems.forEach(
                    function (faqItem) {

                        faqItem.classList.remove(
                            "active"
                        );

                    }
                );


                /*
                 * Если текущий был закрыт —
                 * открываем его
                 */

                if (!isActive) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================
   HEADER SCROLL
========================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);