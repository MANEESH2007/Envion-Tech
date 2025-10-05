// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Navbar scroll effect (optimized with rAF + passive listener)
    const navbar = document.querySelector('.navbar');
    let ticking = false;

    function updateNavbarOnScroll() {
        const y = window.scrollY || window.pageYOffset;
        // Keep navbar consistently dark
        navbar.style.background = y > 100 ? 'rgba(0, 0, 0, 0.92)' : 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbarOnScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Video autoplay handling for expertise section
    const expertiseVideo = document.querySelector('.section-bg-video');
    if (expertiseVideo) {
        // Try to play the video
        expertiseVideo.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
            // If autoplay fails, show the fallback image
            const fallbackImage = expertiseVideo.querySelector('.section-bg-image');
            if (fallbackImage) {
                expertiseVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });

        // Handle video loading errors
        expertiseVideo.addEventListener('error', function() {
            console.log('Video failed to load, showing fallback image');
            const fallbackImage = expertiseVideo.querySelector('.section-bg-image');
            if (fallbackImage) {
                expertiseVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });
    }

    // Video autoplay handling for bifacial section
    const bifacialVideo = document.querySelector('.bifacial-bg-video');
    if (bifacialVideo) {
        // Try to play the video
        bifacialVideo.play().catch(function(error) {
            console.log('Bifacial video autoplay failed:', error);
            // If autoplay fails, show the fallback image
            const fallbackImage = bifacialVideo.querySelector('.bifacial-bg-image');
            if (fallbackImage) {
                bifacialVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });

        // Handle video loading errors
        bifacialVideo.addEventListener('error', function() {
            console.log('Bifacial video failed to load, showing fallback image');
            const fallbackImage = bifacialVideo.querySelector('.bifacial-bg-image');
            if (fallbackImage) {
                bifacialVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });
    }

    // Video autoplay handling for power gains section
    const powerGainsVideo = document.querySelector('.power-gains-bg-video');
    if (powerGainsVideo) {
        // Try to play the video
        powerGainsVideo.play().catch(function(error) {
            console.log('Power gains video autoplay failed:', error);
            // If autoplay fails, show the fallback image
            const fallbackImage = powerGainsVideo.querySelector('.power-gains-bg-image');
            if (fallbackImage) {
                powerGainsVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });

        // Handle video loading errors
        powerGainsVideo.addEventListener('error', function() {
            console.log('Power gains video failed to load, showing fallback image');
            const fallbackImage = powerGainsVideo.querySelector('.power-gains-bg-image');
            if (fallbackImage) {
                powerGainsVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });
    }

    // Video autoplay handling for reliable infrastructure section
    const reliableVideo = document.querySelector('.global-reach-bg-video');
    if (reliableVideo) {
        // Try to play the video
        reliableVideo.play().catch(function(error) {
            console.log('Reliable video autoplay failed:', error);
            // If autoplay fails, show the fallback image
            const fallbackImage = reliableVideo.querySelector('.global-reach-bg-image');
            if (fallbackImage) {
                reliableVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });

        // Handle video loading errors
        reliableVideo.addEventListener('error', function() {
            console.log('Reliable video failed to load, showing fallback image');
            const fallbackImage = reliableVideo.querySelector('.global-reach-bg-image');
            if (fallbackImage) {
                reliableVideo.style.display = 'none';
                fallbackImage.style.display = 'block';
            }
        });
    }

    // Join Now Button functionality
    const joinNowBtn = document.querySelector('.join-now-btn');
    if (joinNowBtn) {
        joinNowBtn.addEventListener('click', function() {
            // Add your join now functionality here
            alert('Welcome! This is where your join now functionality would go.');
            
            // Example: Scroll to a signup section or open a modal
            // window.location.href = '#signup';
            // or
            // openSignupModal();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Video loading optimization
    const video = document.querySelector('.background-video');
    if (video) {
        // Ensure video plays on mobile devices
        video.addEventListener('loadeddata', function() {
            video.play().catch(function(error) {
                console.log('Video autoplay failed:', error);
                // Fallback: show a static background image
                const header = document.querySelector('.header');
                header.style.backgroundImage = 'url("../assets/fallback-bg.jpg")';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
            });
        });
    }

    // Fade in/out animation for Efficiency section
    const efficiencySection = document.querySelector('.efficiency-section');
    if (efficiencySection) {
        const observerOptions = {
            threshold: 0.1, // Trigger earlier to avoid visible gaps
            rootMargin: '0px 0px -20% 0px' // Start animation earlier
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Fade in when section comes into view
                    entry.target.classList.add('fade-in');
                } else {
                    // Fade out when section goes out of view (optional)
                    // Uncomment the line below if you want fade out effect
                    // entry.target.classList.remove('fade-in');
                }
            });
        }, observerOptions);

        observer.observe(efficiencySection);
    }

    // Fade in/out animation for Bifacial section
    const bifacialSection = document.querySelector('.bifacial-section');
    if (bifacialSection) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20% 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        observer.observe(bifacialSection);
    }

    // Fade in/out animation for Low-Light section
    const lowlightSection = document.querySelector('.lowlight-section');
    if (lowlightSection) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20% 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        observer.observe(lowlightSection);
    }

    // Fade in/out animation for Temperature section
    const temperatureSection = document.querySelector('.temperature-section');
    if (temperatureSection) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20% 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        observer.observe(temperatureSection);
    }

    // Video loading optimization for Temperature section
    const temperatureVideo = document.querySelector('.temperature-bg-video');
    if (temperatureVideo) {
        // Ensure video plays on mobile devices
        temperatureVideo.addEventListener('loadeddata', function() {
            temperatureVideo.play().catch(function(error) {
                console.log('Temperature video autoplay failed:', error);
                // Fallback: show a static background image
                const temperatureSection = document.querySelector('.temperature-section');
                temperatureSection.style.backgroundImage = 'url("../assets/section4.jpg")';
                temperatureSection.style.backgroundSize = 'cover';
                temperatureSection.style.backgroundPosition = 'center';
            });
        });
    }

    // Fade in/out animation for Power Gains section
    const powerGainsSection = document.querySelector('.power-gains-section');
    if (powerGainsSection) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20% 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        observer.observe(powerGainsSection);
    }

    // Fade in/out animation for Global Reach section
    const globalReachSection = document.querySelector('.global-reach-section');
    if (globalReachSection) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20% 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Trigger timeline initial animation
                    const timelineContainer = entry.target.querySelector('.timeline-container');
                    if (timelineContainer && !timelineContainer.classList.contains('initial-animation')) {
                        setTimeout(() => {
                            timelineContainer.classList.add('initial-animation');
                        }, 800); // Start after section fade-in
                    }
                }
            });
        }, observerOptions);

        observer.observe(globalReachSection);
    }

    // Timeline Animation with IntersectionObserver
    const timelineMilestones = document.querySelectorAll('.timeline-milestone');
    if (timelineMilestones.length > 0) {
        const timelineObserverOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -20% 0px'
        };

        const timelineObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const milestone = entry.target;
                    const dot = milestone.querySelector('.milestone-dot');
                    const content = milestone.querySelector('.milestone-content');
                    
                    // Add active class to dot for glowing effect
                    dot.classList.add('active');
                    
                    // Show content with fade-in and slide-up animation
                    setTimeout(() => {
                        content.classList.add('visible');
                    }, 200);
                } else {
                    // Optional: Remove active state when out of view
                    const milestone = entry.target;
                    const dot = milestone.querySelector('.milestone-dot');
                    const content = milestone.querySelector('.milestone-content');
                    
                    dot.classList.remove('active');
                    content.classList.remove('visible');
                }
            });
        }, timelineObserverOptions);

        // Observe each milestone
        timelineMilestones.forEach(function(milestone) {
            timelineObserver.observe(milestone);
        });

        // Add click functionality to milestone dots
        timelineMilestones.forEach(function(milestone) {
            const dot = milestone.querySelector('.milestone-dot');
            const content = milestone.querySelector('.milestone-content');
            
            dot.addEventListener('click', function() {
                // Remove active class from all dots
                timelineMilestones.forEach(function(m) {
                    m.querySelector('.milestone-dot').classList.remove('active');
                    m.querySelector('.milestone-content').classList.remove('visible');
                });
                
                // Add active class to clicked dot
                dot.classList.add('active');
                content.classList.add('visible');
                
                // Scroll to milestone smoothly
                milestone.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            });
        });
    }

    // Download PDF functionality
    const downloadPdfBtn = document.querySelector('.download-pdf-btn');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', function() {
            // You can replace this with your actual PDF file path
            const pdfUrl = '../assets/bifacial-brochure.pdf';
            
            // Create a temporary link element to trigger download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Bifacial-Power-Generation-Brochure.pdf';
            link.target = '_blank';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional: Show a success message
            const originalText = downloadPdfBtn.textContent;
            downloadPdfBtn.textContent = 'Downloaded!';
            downloadPdfBtn.style.color = '#27ae60';
            
            setTimeout(() => {
                downloadPdfBtn.textContent = originalText;
                downloadPdfBtn.style.color = 'white';
            }, 2000);
        });
    }

    // Download PDF functionality for Low-Light section
    const lowlightDownloadBtn = document.querySelector('.lowlight-download-btn');
    if (lowlightDownloadBtn) {
        lowlightDownloadBtn.addEventListener('click', function() {
            // You can replace this with your actual PDF file path
            const pdfUrl = '../assets/lowlight-performance.pdf';
            
            // Create a temporary link element to trigger download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Low-Light-Performance-Report.pdf';
            link.target = '_blank';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional: Show a success message
            const originalText = lowlightDownloadBtn.textContent;
            lowlightDownloadBtn.textContent = 'Downloaded!';
            lowlightDownloadBtn.style.color = '#27ae60';
            
            setTimeout(() => {
                lowlightDownloadBtn.textContent = originalText;
                lowlightDownloadBtn.style.color = '#3498db';
            }, 2000);
        });
    }

    // Footer year auto-update
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

// Add CSS for hamburger animation
const style = document.createElement('style');
style.textContent = `
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);
