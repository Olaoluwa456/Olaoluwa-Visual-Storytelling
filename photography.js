/*=========================================
    PHOTOGRAPHY PAGE
    Olaoluwa Visual Storytelling
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        FADE-IN ANIMATION
    =====================================*/

    const sections = document.querySelectorAll(
        ".intro, .pricing-section, .newsletter, .cta"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });





    /*=====================================
        SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });





    /*=====================================
        ACTIVE NAVIGATION
    =====================================*/

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.href === window.location.href){

            link.classList.add("active");

        }

    });





    /*=====================================
        NEWSLETTER FORM
    =====================================*/

    const form = document.querySelector(".newsletter-form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email = form.querySelector("input");

            if(email.value.trim()===""){

                alert("Please enter your email address.");

                return;

            }

            alert("Thank you for subscribing!");

            form.reset();

        });

    }

});