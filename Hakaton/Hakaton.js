document.addEventListener('DOMContentLoaded', function() {
    console.log("Hello World");
    const lesson_text1 = document.getElementsByClassName("lesson_text1");
    const lesson_text2 = document.getElementsByClassName("lesson_text2");
    const lesson_text3 = document.getElementsByClassName("lesson_text3");
    const lesson_text4 = document.getElementsByClassName("lesson_text4");
    const lesson_text5 = document.getElementsByClassName("lesson_text5");
    const lesson_text6 = document.getElementsByClassName("lesson_text6");
    console.log(lesson_text1);
    const change_schedule = document.getElementById("button_1");
    const full_schedule = document.getElementById("button_3");
    const dayButtons = document.getElementById('dayButtons');
    let position = 0;

    change_schedule.addEventListener('click', function() {
        // Переключаем видимость кнопок
        if (position === 200) {
            console.log("hello!!!");
            position = -200;
        } else {
            position = 200;
        }
        
        // Устанавливаем новое значение трансформации
        dayButtons.style.transform = translateX($,{position},px);
    });

    change_schedule.addEventListener('click', function() {
        lesson_text1.textContent = "НЕ ИСТОРИЯ";
    });
    full_schedule.addEventListener('click', function() {
        lesson_text1.textContent = "НЕ ИСТОРИЯ";
    });

    const your_schedule = document.getElementById("your_schedule");
    const your_schedule_h1 = document.getElementById("your_schedule_h1");
    console.log(your_schedule_h1);
    
    full_schedule.addEventListener('click', function() {
        your_schedule.textContent = "Общее расписание";
        your_schedule_h1.textContent = "Общее расписание";
    });
});
