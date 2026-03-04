
        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Update active link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // Update active link on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
            
            // Show/hide back to top button
            const backToTopButton = document.getElementById('back-to-top');
            if (scrollPosition > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        // Back to top button
        document.getElementById('back-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            const skillsSection = document.getElementById('skills');
            const skillsSectionTop = skillsSection.offsetTop;
            const windowHeight = window.innerHeight;
            
            if (window.scrollY > skillsSectionTop - windowHeight + 200) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                
                // Remove event listener after animation
                window.removeEventListener('scroll', animateSkillBars);
            }
        };
        
        window.addEventListener('scroll', animateSkillBars);
    
// send message to me emailjs she
        
//   (function () {
//     emailjs.init("HRSI5K-Cj1ncf55sa"); // yaha apni Public Key daalo
//   })();

//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (e) {
//       e.preventDefault();

//       emailjs
//         .sendForm(
//           "service_jsbltri",   // service ID
//           "template_pkahxua",  // template ID
//           this
//         )
//         .then(
//           function () {
//             alert("Message sent successfully ✅");
//             document.getElementById("contact-form").reset();
//           },
//           function (error) {
//             alert("Failed to send message ❌");
//             console.log(error);
//           }
//         );
//     });



emailjs.init({
  publicKey: "_Th0MEhQou4evBlLO",
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_jsbltri",
    "template_pkahxua",
    this
  ).then(
    () => {
      alert("Message sent successfully ✅");
      this.reset();
    },
    (error) => {
      console.log("EmailJS Error:", error);
      alert("Failed to send message ❌");
    }
  );
});
