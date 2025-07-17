<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adonai Revival Church</title>
    <style>
        /* Global Styles */
        :root {
            --primary: #4b6cb7; /* Blue */
            --primary-light: #6b8cdf;
            --secondary: #27ae60; /* Green */
            --secondary-light: #2a3c5f;
            --accent: #e67e22;
            --light: #f8f9fa;
            --dark: #2c3e50;
            --success: #27ae60;
            --highlight: #f1c40f;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: var(--light);
            color: var(--dark);
        }
        
        header {
            background: linear-gradient(135deg, var(--secondary), var(--primary));
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        nav {
            background-color: var(--dark);
            padding: 0.5rem;
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        nav li {
            margin: 0 1rem;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem;
            transition: all 0.3s ease;
            cursor: pointer; /* Change cursor to pointer */
        }
        
        nav a:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
            text-shadow: 0 2px 4px rgba(255,255,255,0.3);
        }
        
        main {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        
        section {
            margin-bottom: 2rem;
            background-color: white;
            padding: 1.5rem;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
            color: var(--primary);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--primary);
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
        
        /* Cookie Consent Styles */
        .cookie-consent {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: white;
            color: var(--dark);
            padding: 1rem;
            border: 1px solid var(--primary);
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: none; /* Hidden by default */
            z-index: 1000;
        }
        
        .cookie-consent button {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            margin-left: 1rem;
            cursor: pointer;
            border-radius: 5px;
        }
        
        .cookie-consent button:hover {
            background-color: var(--primary-light);
        }
        
        /* Videos Section */
        .video-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .video-card {
            background: linear-gradient(to bottom, var(--light), white);
            border-radius: 5px;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .video-card:hover {
            transform: translateY(-5px);
        }
        
        .video-placeholder {
            width: 100%;
            height: 180px;
            background-color: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        
        .video-title {
            padding: 0.5rem 1rem;
            font-weight: bold;
        }
        
        /* Photos Section */
        .photo-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }

        .photo-card {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .photo-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .photo-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            border-radius: 10px;
        }

        .photo-card:hover::after {
            height: 60%;
        }
        
        .photo-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 5px;
            transition: transform 0.3s ease;
        }
        
        .photo-card img:hover {
            transform: scale(1.05);
        }
        
        /* Announcements */
        .announcement {
            padding: 1rem;
            margin-bottom: 1rem;
            background-color: #f8f9fa;
            border-left: 4px solid var(--primary);
        }
        
        .announcement h3 {
            color: var(--secondary);
        }
        
        .announcement-date {
            font-size: 0.8rem;
            color: #6c757d;
            margin-top: 0.5rem;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1024px) {
            .video-container, .photo-gallery {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav li {
                margin: 0.5rem 0;
            }
            
            .video-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <h1>Adonai Revival Church</h1>
            <p>Growing together in faith and love</p>
        </div>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#photos">Photos</a></li>
            <li><a href="#announcements">Announcements</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <section id="welcome">
            <div style="position: absolute; top: 0; right: 20px; opacity: 0.1; z-index: 0;">
                <svg width="200" height="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <!-- Vertical beam -->
                    <path d="M12 2V22" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"/>
                    <!-- Crossbar beam -->
                    <path d="M8 12H16" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>
            <h2>Welcome to Our Church</h2>
            <p>Join us as we worship and grow in faith together. Our community welcomes everyone seeking spiritual growth and fellowship.</p>
            <div class="hero-image" style="margin: 2rem 0; text-align: center;">
                <div style="text-align: center; margin: 20px 0;">
                    <p style="font-size: 1.1rem; font-weight: bold; color: var(--primary); margin: 20px 0;">
                        Jesus is the Alpha and the Omega, the Beginning and the End
                    </p>
                    <p style="font-size: 0.7rem; color: #666; margin-top: 10px;">BB version | www.adonairevival.org</p>
                </div>
            </div>
        </section>
        
        <section id="videos">
            <h2>Latest Sermons</h2>
            <div class="video-container">
                <div class="video-card">
                    <div class="video-placeholder">
                        Click to play
                    </div>
                    <div class="video-title">Sunday Service - May 12</div>
                </div>
                <div class="video-card">
                    <div class="video-placeholder">
                        Click to play
                    </div>
                    <div class="video-title">Youth Ministry Gathering</div>
                </div>
                <div class="video-card">
                    <div class="video-placeholder">
                        Click to play
                    </div>
                    <div class="video-title">Worship Night Special</div>
                </div>
            </div>
        </section>
        
        <section id="photos">
            <h2>Photo Gallery</h2>
            <div class="photo-gallery">
                <div class="photo-card">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4dfeab57-8b93-46cc-8eea-6c260eb476ae.png" alt="Church worship team leading congregation in song" />
                    <div style="position: absolute; bottom: 10px; left: 10px; color: white; z-index: 2; font-weight: bold;">Praise & Worship</div>
                </div>
                <div class="photo-card">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/173b67bb-2719-4f29-bccd-ee9a8416bd5e.png" alt="Children participating in Sunday school activities with bright colors" />
                </div>
                <div class="photo-card">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62c100cd-76eb-4a0a-b632-3754dee765f0.png" alt="Pastor speaking passionately during a sermon" />
                </div>
                <div class="photo-card">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66a84549-bbbe-41c8-ad60-5f09ba3f0e22.png" alt="Community service project with church volunteers" />
                </div>
                <div class="photo-card">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46385ed4-4098-410e-95ba-72ae6b9f7074.png" alt="Choir singing during worship with raised hands" />
                </div>
                <div class="photo-card">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c52ee0b-d76e-4a6b-9e99-6250a2d510fa.png" alt="Baptism ceremony in a baptismal pool" />
                </div>
            </div>
        </section>
        
        <section id="announcements">
            <h2>Church Announcements</h2>
            <div class="announcement">
                <h3>Sunday Potluck</h3>
                <p>Join us for a fellowship potluck after service this Sunday. Please bring a dish to share.</p>
                <div class="announcement-date">Posted: May 10, 2024</div>
            </div>
            <div class="announcement">
                <h3>Prayer Meeting</h3>
                <p>Wednesday night prayer meeting at 7 PM in the sanctuary. All are welcome.</p>
                <div class="announcement-date">Posted: May 8, 2024</div>
            </div>
            <div class="announcement">
                <h3>Youth Retreat</h3>
                <p>Registration is now open for our summer youth retreat. Deadline is June 1st.</p>
                <div class="announcement-date">Posted: May 5, 2024</div>
            </div>
        </section>
        
        <section id="contact">
            <h2>Contact Us</h2>
            <p><strong>Address:</strong> 123 Faith Avenue, Your City, Country</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@adonairevival.org</p>
            <p><strong>Service Times:</strong> Sunday 10AM, Wednesday 7PM</p>
        </section>
        
        <div class="floating-cta">
            <a href="#contact" style="background: var(--primary); color: white; padding: 0.8rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; position: fixed; bottom: 20px; right: 20px; z-index: 100;">
                <span style="font-size: 1.2rem;">✝️</span>
            </a>
        </div>
    </main>
    
    <footer>
        <p>© 2024 Adonai Revival Church. All Rights Reserved.</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">Official website: www.adonairevival.org</p>
    </footer>
    
    <div class="cookie-consent" id="cookieConsent">
        <p>This website uses cookies to enhance the user experience. Do you accept cookies?</p>
        <button id="acceptCookies">Accept</button>
        <button id="declineCookies">Decline</button>
    </div>
    
    <script>
        // Simple JavaScript for video placeholder functionality
        document.querySelectorAll('.video-placeholder').forEach(placeholder => {
            placeholder.addEventListener('click', function() {
                alert('Video player would open here. In a real implementation, this would embed a YouTube or Vimeo player.');
            });
        });
        
        // Current year for footer
        document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Adonai Revival Church. All Rights Reserved.`;
        
        // Cookie consent functionality
        const cookieConsent = document.getElementById('cookieConsent');
        const acceptCookies = document.getElementById('acceptCookies');
        const declineCookies = document.getElementById('declineCookies');

        // Check if cookies have been accepted
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieConsent.style.display = 'block'; // Show consent banner
        }

        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none'; // Hide consent banner
        });

        declineCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'false');
            cookieConsent.style.display = 'none'; // Hide consent banner
        });
    </script>
</body>
</html>
