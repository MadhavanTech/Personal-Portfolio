let images = document.querySelectorAll(".linkes>.link");

images[0].addEventListener("click",()=>{
    window.location.href = "https://leetcode.com/u/Yds0m82u9W/";
})

images[1].addEventListener("click",()=>{

    window.location.href = "https://github.com/MadhavanTech";

})

images[2].addEventListener("click",()=>{

    window.location.href = "https://www.linkedin.com/in/madhavan-m-3a5671374/";

})

// Navigation dropdown animation
let navButtons = document.querySelectorAll("nav>button");
let navContainer = document.querySelector("nav");
let isNavOpen = false;

// Hide navigation buttons initially
navButtons.forEach(button => {
    button.style.opacity = "0";
    button.style.transform = "translateY(-20px)";
    button.style.pointerEvents = "none";
});

// Add hamburger menu functionality
let hamburgerMenu = document.createElement("div");
hamburgerMenu.innerHTML = "☰";
hamburgerMenu.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #d6d5d5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
`;

hamburgerMenu.addEventListener("click", () => {
    if (!isNavOpen) {
        navContainer.classList.add("show-nav");

        navButtons.forEach((button, index) => {
            setTimeout(() => {
                button.style.opacity = "1";
                button.style.transform = "translateY(0)";
                button.style.pointerEvents = "auto";
            }, index * 150); // 150ms delay between each button
        });
        hamburgerMenu.innerHTML = "✕";
        hamburgerMenu.style.backgroundColor = "rgba(214, 213, 213, 0.9)";
        hamburgerMenu.style.color = "black";
        hamburgerMenu.style.transform = "scale(1.1)";
        isNavOpen = true;
    } else {

        navButtons.forEach((button, index) => {
            setTimeout(() => {
                button.style.opacity = "0";
                button.style.transform = "translateY(-20px)";
                button.style.pointerEvents = "none";
            }, index * 100); 
        });

        setTimeout(() => {
            navContainer.classList.remove("show-nav");
        }, 300);

        hamburgerMenu.innerHTML = "☰";
        hamburgerMenu.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        hamburgerMenu.style.color = "#d6d5d5";
        hamburgerMenu.style.transform = "scale(1)";
        isNavOpen = false;
    }
});

document.body.appendChild(hamburgerMenu);

let para = document.querySelector(".readme>p");

let Reademe = document.querySelector(".readme>button");

let b = true;
Reademe.addEventListener("click",()=>{

    if(b){
        para.innerHTML+=`IT Berries is built on passion, innovation, and a commitment to delivering high-quality digital solutions. We specialize in designing modern, responsive, and user-friendly websites that not only look great but also perform efficiently across all devices.


        With strong expertise in full stack development, we develop secure and scalable web applications using technologies such as Java, MySQL, JDBC, Servlets, HTML, CSS, and JavaScript. From frontend design to backend logic and database integration, we provide complete end-to-end solutions tailored to business needs.



       With strong expertise in full stack development, we develop secure and scalable web applications using technologies such as Java, MySQL, JDBC, Servlets, HTML, CSS, and JavaScript. From frontend design to backend logic and database integration, we provide complete end-to-end solutions tailored to business needs.


       At IT Berries, continuous learning and improvement drive everything we do. We transform ideas into powerful digital experiences by combining creativity, technical knowledge, and a problem-solving mindset.`

       para.style.maxHeight = para.scrollHeight + "px";

       b=false;
    }else{

        para.innerHTML=`IT Berries is built on passion, innovation, and a commitment to delivering high-quality digital solutions. We specialize in designing modern, responsive, and user-friendly websites that not only look great but also perform efficiently across all devices. With strong expertise in full stack development, we develop secure and scalable web applications using technologies such as Java, MySQL, JDBC, Servlets, HTML, CSS, and JavaScript. From frontend design to backend logic and database integration, we provide complete end-to-end solutions tailored to business needs.`

        para.style.maxHeight = "120px";

        b=true;
    }
})


let back = document.querySelector(".Contact1>.back");

back.addEventListener("click",()=>{

    location.href='#back'
})


let img = document.querySelectorAll("#img");


img[0].addEventListener("click",()=>{

    window.location.href="https://mail.google.com/mail/u/0/#inbox"
})

img[1].addEventListener("click",()=>{

    window.location.href="https://www.instagram.com/accounts/login/?hl=en"
})

img[2].addEventListener("click",()=>{

    window.location.href="https://www.linkedin.com/in/madhavan-m-3a5671374/"
})

img[3].addEventListener("click",()=>{

    window.location.href="https://github.com/MadhavanTech"
})



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});


let btn = document.querySelector(".Contact1>.back");


btn.addEventListener("click",()=>{

    location.href='#fisrt';
})