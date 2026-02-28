let images = document.querySelectorAll(".link>img");

images[0].addEventListener("click",()=>{

    window.location.href = "https://leetcode.com/u/Yds0m82u9W/";

})

images[1].addEventListener("click",()=>{

    window.location.href = "https://github.com/MadhavanTech";

})

images[2].addEventListener("click",()=>{

    window.location.href = "https://www.linkedin.com/in/madhavan-m-3a5671374/";

})

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