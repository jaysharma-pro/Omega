    // --- GLOBAL VARIABLES ---
    let healthChartInstance = null;
    let newProfilePicSrc = null; // To hold the new picture URL temporarily
    
    const languageData = {
        hi: {
            navHome: "होम", navDashboard: "डैशबोर्ड", featuresTitle: "विशेषताएँ", faqTitle: "FAQ", navSignUp: "साइन अप", navLogIn: "लॉग इन",
            settingsTitle: "सेटिंग्स", settingsTheme: "थीम", settingsTextSize: "वेबसाइट साइज", settingsLanguage: "भाषा", settingsAccount: "अकाउंट", settingsUpdate: "अपडेट", settingsNotifications: "नोटिफिकेशन्स", settingsPrivacy: "प्राइवेसी", settingsSecurity: "सिक्योरिटी", settingsStorage: "डाटा और स्टोरेज", settingsClear: "स्टोरेज साफ़ करें", settingsSupport: "हेल्प और सपोर्ट", settingsContactSupport: "सपोर्ट से संपर्क करें",
            heroTitle: "आपकी सेहत, आपके हाथ में।", heroSubtitle: "HealthNest के साथ अपनी पूरी मेडिकल हिस्ट्री को एक सुरक्षित जगह पर सहेजें और किसी भी समय, कहीं भी एक्सेस करें।", heroCTA: "आज ही शुरू करें",
            feature1Title: "हेल्थ टाइमलाइन", feature1Desc: "बचपन से लेकर आज तक की हर स्वास्थ्य घटना को एक क्रम में देखें।", feature2Title: "दस्तावेज़ अपलोड", feature2Desc: "अपनी सभी मेडिकल रिपोर्ट्स, स्कैन और दवाइयों के पर्चे सुरक्षित रूप से अपलोड करें।", feature3Title: "डॉक्टर के साथ शेयर करें", feature3Desc: "एक क्लिक में अपने डॉक्टर को अपनी हेल्थ हिस्ट्री देखने की सुरक्षित अनुमति दें।",
            securityTitle: "आपकी सुरक्षा, हमारी प्राथमिकता", securityCardTitle: "एंड-टू-एंड एन्क्रिप्शन", securityCardDesc: "आपका सारा स्वास्थ्य डेटा एंड-टू-एंड एन्क्रिप्टेड है। इसका मतलब है कि केवल आप और जिन्हें आप अनुमति देते हैं, वही इसे देख सकते हैं। हम भी आपका डेटा नहीं पढ़ सकते।",
            faq1Question: "जीवनकोष क्या है?", faq1Answer: "जीवनकोष एक डिजिटल प्लेटफ़ॉर्म है जहाँ आप अपनी सभी मेडिकल जानकारी, जैसे कि पुरानी चोटें, इलाज, रिपोर्ट्स और दवाइयों को सुरक्षित रूप से स्टोर कर सकते हैं।", faq2Question: "क्या मेरा डेटा सुरक्षित है?", faq2Answer: "हाँ, हम आपके डेटा की सुरक्षा के लिए उच्चतम मानकों का उपयोग करते हैं। आपकी जानकारी एन्क्रिप्टेड होती है और आपके अलावा कोई इसे नहीं देख सकता।", faq3Question: "मैं इसका उपयोग कैसे कर सकता हूँ?", faq3Answer: "बस साइन अप करें, और अपनी स्वास्थ्य संबंधी जानकारी जोड़ना शुरू करें। आप जब चाहें, अपने डॉक्टर को दिखाने के लिए इसे एक्सेस कर सकते हैं।",
            newsletterTitle: "अपडेट रहें!", newsletterSubtitle: "नवीनतम समाचारों और अपडेट के लिए हमारे न्यूज़लेटर की सदस्यता लें।", newsletterButton: "सब्सक्राइब करें",
            footerRights: "&copy; 2024-2025 HealthNest. सर्वाधिकार सुरक्षित।", footerPrivacy: "प्राइवेसी पालिसी", footerTerms: "सेवा की शर्तें", footerLogout: "लॉगआउट",
            profileTitle: "आपकी प्रोफाइल", profileName: "आयुष हरिनखेरे ", profileAgeLabel: "आयु", profileAgeValue: "20 वर्ष", profileBloodLabel: "ब्लड ग्रुप", profileBloodValue: "A+", profileHeightLabel: "ऊंचाई", profileHeightValue: "175 cm", profileWeightLabel: "वजन", profileWeightValue: "52 kg", profileEditButton: "प्रोफाइल एडिट करें",
            dashboardBP: "ब्लड प्रेशर", dashboardSugar: "शुगर लेवल", dashboardHR: "हार्ट रेट", dashboardBMI: "बॉडी मास इंडेक्स", dashboardActivity: "हाल की गतिविधि", activity1: "ब्लड टेस्ट रिपोर्ट अपलोड की गई - 2 दिन पहले", activity2: "डॉ. गुप्ता के साथ अपॉइंटमेंट - 1 सप्ताह पहले", activity3: "दवाई का पर्चा जोड़ा गया - 2 सप्ताह पहले", dashboardAppointments: "आगामी अपॉइंटमेंट्स", appointment1: "डेंटिस्ट के साथ चेकअप - 5 दिन में", appointment2: "वार्षिक स्वास्थ्य जांच - 2 सप्ताह में",
            editProfileTitle: "प्रोफ़ाइल संपादित करें", editNameLabel: "पूरा नाम", editDobLabel: "जन्म तिथि", editBloodLabel: "ब्लड ग्रुप", editHeightLabel: "ऊंचाई (cm)", editWeightLabel: "वजन (kg)", editSaveButton: "सेव करें",
        },
        en: {
            navHome: "Home", navDashboard: "Dashboard", featuresTitle: "Key Features", faqTitle: "FAQ", navSignUp: "Sign Up", navLogIn: "Log In",
            settingsTitle: "Settings", settingsTheme: "Theme (Light/Dark)", settingsTextSize: "Website Size", settingsLanguage: "Language", settingsAccount: "Account Settings", settingsUpdate: "Update", settingsNotifications: "Notifications", settingsPrivacy: "Privacy", settingsSecurity: "Security", settingsStorage: "Data & Storage", settingsClear: "Clear Storage", settingsSupport: "Help & Support", settingsContactSupport: "Contact Support",
            heroTitle: "Your Health, In Your Hands.", heroSubtitle: "With HealthNest, save your entire medical history in one secure place and access it anytime, anywhere.", heroCTA: "Get Started Today",
            feature1Title: "Health Timeline", feature1Desc: "View every health event from childhood to today in chronological order.", feature2Title: "Document Upload", feature2Desc: "Securely upload all your medical reports, scans, and prescriptions.", feature3Title: "Share with Doctor", feature3Desc: "Give your doctor secure permission to view your health history with one click.",
            securityTi0tle: "Your Security, Our Priority", securityCardTitle: "End-to-End Encryption", securityCardDesc: "All your health data is end-to-end encrypted. This means only you and those you authorize can see it. Not even we can read your data.",
            faq1Question: "What is HealthNest?", faq1Answer: "HealthNest is a digital platform where you can securely store all your medical information, such as old injuries, treatments, reports, and medications.", faq2Question: "Is my data secure?", faq2Answer: "Yes, we use the highest standards to protect your data. Your information is encrypted, and no one can see it except you.", faq3Question: "How can I use it?", faq3Answer: "Just sign up and start adding your health information. You can access it whenever you want to show it to your doctor.",
            newsletterTitle: "Stay Updated!", newsletterSubtitle: "Subscribe to our newsletter for the latest news and updates.", newsletterButton: "Subscribe",
            footerRights: "&copy; 2024-2025 HealthNest. All rights reserved.", footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service", footerLogout: "Logout",
            profileTitle: "Your Profile", profileName: "Ayush Harinkhere", profileAgeLabel: "Age", profileAgeValue: "20 years", profileBloodLabel: "Blood Group", profileBloodValue: "A+", profileHeightLabel: "Height", profileHeightValue: "175 cm", profileWeightLabel: "Weight", profileWeightValue: "52 kg", profileEditButton: "Edit Profile",
            dashboardBP: "Blood Pressure", dashboardSugar: "Sugar Level", dashboardHR: "Heart Rate", dashboardBMI: "Body Mass Index", dashboardActivity: "Recent Activity", activity1: "Blood test report uploaded - 2 days ago", activity2: "Appointment with Dr. Gupta - 1 week ago", activity3: "Prescription added - 2 weeks ago", dashboardAppointments: "Upcoming Appointments", appointment1: "Checkup with Dentist - in 5 days", appointment2: "Annual health check-up - in 2 weeks",
            editProfileTitle: "Edit Your Profile", editNameLabel: "Full Name", editDobLabel: "Date of Birth", editBloodLabel: "Blood Group", editHeightLabel: "Height (cm)", editWeightLabel: "Weight (kg)", editSaveButton: "Save Changes",
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        // Preloader Logic
        const preloader = document.getElementById('preloader');
        window.setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000); // Show preloader for 2 seconds

        // Load saved settings or defaults (forcing default on load)
        changeTheme('light');
        document.getElementById('theme').value = 'light';
        switchLanguage('en');
        document.getElementById('language').value = 'en';
        changeTextSize('16px');
        document.getElementById('textSize').value = '16px';


        // Initialize components
        initializeFAQ();
        initializeScrollAnimations();
        renderHealthChart();

        // Close settings menu and modals on outside click
        document.addEventListener('click', function(event) {
            const menu = document.getElementById('settingsMenu');
            const button = document.getElementById('settingsButton');
            if (menu && button) {
                if (menu.style.display === 'flex' && !menu.contains(event.target) && !button.contains(event.target)) {
                    menu.style.display = 'none';
                }
            }
            
            // Close modals on overlay click
            if (event.target.classList.contains('modal-overlay')) {
                closeModal(event.target.id);
            }
        });

        // Search Bar Functionality
        document.getElementById('search-bar-input').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('[data-searchable]').forEach(item => {
                const text = item.getAttribute('data-searchable').toLowerCase();
                if (text.includes(query)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    function initializeFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            question.addEventListener('click', () => {
                const isActive = item.classList.toggle('active');
                question.setAttribute('aria-expanded', isActive);
                answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : null;
                answer.style.paddingTop = isActive ? "1rem" : "0";
                answer.style.paddingBottom = isActive ? "1rem" : "0";
            });
        });
    }

    function initializeScrollAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .section-title, .faq-item, .dashboard-container, .profile-card, .dashboard-card, .newsletter, .hero-content > *');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `slideInUp 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => { el.style.opacity = '0'; observer.observe(el); });
    }
    
    document.getElementById('logoutBtn').addEventListener('click', function() { showToast('Logging out...', 'info'); });
    function toggleSettings() { const menu = document.getElementById('settingsMenu'); menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; }
    function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    function changeTheme(theme) { document.body.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); if (document.getElementById('healthChart')) { renderHealthChart(); } }
    function switchLanguage(lang) { document.documentElement.lang = lang; localStorage.setItem('language', lang); document.querySelectorAll('[data-key]').forEach(el => { const key = el.getAttribute('data-key'); if (languageData[lang]?.[key]) el.innerHTML = languageData[lang][key]; }); }
    
    function changeTextSize(size) {
        document.documentElement.style.fontSize = size;
        localStorage.setItem('textSize', size);
    }

    function updateAccount() { showToast("Account updated successfully!", "success"); }
    function clearStorage() { if(confirm("Are you sure you want to clear all local data?")){ localStorage.clear(); sessionStorage.clear(); showToast("Storage cleared!", "success"); location.reload(); } }
    
    function openModal(modalId) { 
        const modal = document.getElementById(modalId); 
        if(modal) modal.classList.add('visible'); 
        if (modalId === 'aiChatModal') {
            const chatBox = document.getElementById('ai-chat-box');
            if (chatBox.children.length === 0) {
                 const aiBubble = document.createElement('div');
                 aiBubble.className = 'ai-message ai';
                 aiBubble.innerHTML = `<div>Hello! How can I help you today? Type 'help' to see what I can do.</div>`;
                 chatBox.appendChild(aiBubble);
            }
        }
        if(modal) modal.querySelector('button, input, select, textarea')?.focus(); 
    }
    function closeModal(modalId) { 
        const modal = document.getElementById(modalId);
        if(modal) modal.classList.remove('visible'); 
    }
    
    function previewProfilePic(event) {
        const file = event.target.files[0];
        if (file) {
            newProfilePicSrc = URL.createObjectURL(file);
            showToast("Profile picture previewed. Click 'Save Changes' to apply.", "info");
        }
    }

    function saveProfile() {
        // Update text fields
        const newName = document.getElementById('editName').value;
        document.querySelector('[data-key="profileName"]').textContent = newName;
        document.getElementById('profileEmail').textContent = document.getElementById('editEmail').value;
        document.getElementById('profileAddress').textContent = document.getElementById('editAddress').value;
        document.getElementById('profileGender').textContent = document.getElementById('editGender').value;
        
        const heightCm = document.getElementById('editHeight').value;
        const heightFt = document.getElementById('editHeightFt').value;
        document.getElementById('profileHeightValue').textContent = `${heightCm} cm / ${heightFt}`;
        
        document.getElementById('profileWeightValue').textContent = `${document.getElementById('editWeight').value} kg`;
        document.getElementById('profileBloodValue').textContent = document.getElementById('editBlood').value;


        // Update profile picture if a new one was selected
        if (newProfilePicSrc) {
            document.getElementById('profilePicImg').src = newProfilePicSrc;
            document.getElementById('profilePicImg').style.display = 'block';
            document.getElementById('profilePicIcon').style.display = 'none';

            // Update nav avatar
            document.getElementById('user-avatar-img').src = newProfilePicSrc;
            document.getElementById('user-avatar-img').style.display = 'block';
            document.getElementById('user-initials').style.display = 'none';
        } else {
            // Update initials in nav
            const nameParts = newName.split(' ');
            const initials = nameParts[0].charAt(0) + (nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : '');
            document.getElementById('user-initials').textContent = initials.toUpperCase();
        }

        // Calculate and update age
        const newDob = document.getElementById('editDob').value;
        if (newDob) {
            const birthDate = new Date(newDob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            document.getElementById('profileAgeValue').textContent = `${age} Years`;
        }
        
        showToast("Profile updated successfully!", "success");
        closeModal('editProfileModal');
    }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        let iconClass = 'fas fa-info-circle';
        if (type === 'success') iconClass = 'fas fa-check-circle';
        if (type === 'error') iconClass = 'fas fa-times-circle';
        toast.innerHTML = `<i class="${iconClass}"></i> ${message}`;
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => container.removeChild(toast), 500); }, 3000);
    }
    
    function handleSubscription(event) { event.preventDefault(); showToast('Thank you for subscribing!', 'success'); event.target.reset(); }
    
    function togglePasswordVisibility(fieldId, button) {
        const passwordInput = document.getElementById(fieldId);
        const icon = button.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
    
    // --- New Functions ---

    function handleLogin(event) {
        event.preventDefault();
        showToast('Logged in successfully!', 'success');
        
        // Hide Login/Signup buttons and show profile icon
        document.querySelector('.nav-buttons').style.display = 'none';
        document.getElementById('user-profile-icon').style.display = 'flex';
        
        // Set user initials
        const fullName = document.querySelector('[data-key="profileName"]').textContent;
        const nameParts = fullName.split(' ');
        const initials = nameParts[0].charAt(0) + (nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : '');
        document.getElementById('user-initials').textContent = initials.toUpperCase();
        
        // Show document upload section
        document.getElementById('document-upload-section').style.display = 'block';
        
        closeModal('loginModal');
        closeModal('signupModal');
    }

    function handleFileUpload(event) {
        const files = event.target.files;
        if (files.length > 0) {
            document.getElementById('uploaded-documents-container').style.display = 'block';
            const list = document.getElementById('document-list');
            list.innerHTML = ''; // Clear previous list
            for(let i = 0; i < files.length; i++) {
                const li = document.createElement('li');
                li.textContent = files[i].name;
                list.appendChild(li);
            }
        }
    }

    function analyzeReports() {
        showToast('AI is analyzing your reports... This is a demo feature.', 'info');
    }

    function scrollFeatures(direction) {
        const container = document.getElementById('features-grid');
        const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of the container width
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
    
    function toggleEncryptionInfo() {
        const info = document.getElementById('encryption-info');
        const isActive = info.style.maxHeight;
        info.style.maxHeight = isActive ? null : info.scrollHeight + "px";
    }

    function toggleMoreFAQs() {
        const hiddenFaqs = document.querySelectorAll('.hidden-faq');
        const button = document.getElementById('show-more-faq');
        hiddenFaqs.forEach(faq => {
            if (faq.style.display === 'block') {
                faq.style.display = 'none';
                button.textContent = 'Show More';
            } else {
                faq.style.display = 'block';
                button.textContent = 'Show Less';
            }
        });
    }

    function convertHeight(fromFt = false) {
        const cmInput = document.getElementById('editHeight');
        const ftInput = document.getElementById('editHeightFt');

        if (fromFt) {
            const ftValue = ftInput.value;
            const parts = ftValue.match(/(\d+)'(\d+)"?/);
            if (parts) {
                const feet = parseInt(parts[1], 10);
                const inches = parseInt(parts[2], 10);
                const totalInches = (feet * 12) + inches;
                const cm = totalInches * 2.54;
                cmInput.value = Math.round(cm);
            }
        } else {
            const cm = parseFloat(cmInput.value);
            if (!isNaN(cm)) {
                const inches = cm / 2.54;
                const feet = Math.floor(inches / 12);
                const remainingInches = Math.round(inches % 12);
                ftInput.value = `${feet}'${remainingInches}"`;
            }
        }
    }

    function handleAIChat(event) {
        event.preventDefault();
        const input = document.getElementById('ai-chat-input');
        const chatBox = document.getElementById('ai-chat-box');
        const userMessage = input.value.trim();

        if (!userMessage) return;

        // Add user's message
        const userBubble = document.createElement('div');
        userBubble.className = 'ai-message user';
        userBubble.innerHTML = `<div></div>`;
        userBubble.querySelector('div').textContent = userMessage;
        chatBox.appendChild(userBubble);
        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;

        // Show typing indicator
        const thinkingBubble = document.createElement('div');
        thinkingBubble.className = 'ai-message ai';
        thinkingBubble.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
        chatBox.appendChild(thinkingBubble);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Generate AI response
        setTimeout(() => {
            const aiResponse = getAIResponse(userMessage);
            thinkingBubble.innerHTML = `<div></div>`; // Clear typing indicator
            
            // Typewriter effect
            let i = 0;
            const speed = 30; // Milliseconds per character
            function typeWriter() {
                if (i < aiResponse.length) {
                    thinkingBubble.querySelector('div').innerHTML += aiResponse.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }
            }
            typeWriter();

        }, 1500); // Simulate thinking delay
    }
    
    // this section is for aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    

    // Voice Recognition for AI Chat
    const voiceBtn = document.getElementById('ai-voice-btn');
    const chatInput = document.getElementById('ai-chat-input');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        voiceBtn.addEventListener('click', () => {
            if (!voiceBtn.classList.contains('recording')) {
                recognition.start();
                voiceBtn.classList.add('recording');
            } else {
                recognition.stop();
            }
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            chatInput.value = transcript;
            // Automatically submit the form
            document.getElementById('ai-chat-input-form').requestSubmit();
        };

        recognition.onend = () => {
            voiceBtn.classList.remove('recording');
        };

        recognition.onerror = (event) => {
            showToast('Voice recognition error: ' + event.error, 'error');
            voiceBtn.classList.remove('recording');
        };
    } else {
        voiceBtn.style.display = 'none'; // Hide if not supported
    }



/**
 * NOTE: Ye renderHealthChart function aapke original code se hai.
 * Isme koi badlav ki zaroorat nahi hai. Maine ise yahan context ke liye rakha hai.
 */
function renderHealthChart() {
    if (healthChartInstance) {
        healthChartInstance.destroy();
    }
    const ctx = document.getElementById('healthChart').getContext('2d');

    const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--outline');
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--on-surface');
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
    const tertiaryColor = getComputedStyle(document.documentElement).getPropertyValue('--tertiary');

    const labels = ['Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025'];

    healthChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Systolic BP',
                data: [120, 122, 118, 125, 123, 128],
                borderColor: primaryColor,
                backgroundColor: primaryColor + '33',
                fill: true,
                tension: 0.4,
                yAxisID: 'y'
            }, {
                label: 'Heart Rate',
                data: [72, 75, 70, 78, 76, 80],
                borderColor: secondaryColor,
                backgroundColor: secondaryColor + '33',
                fill: true,
                tension: 0.4,
                yAxisID: 'y1'
            }, {
                label: 'Blood Sugar',
                data: [95, 105, 98, 110, 102, 110],
                borderColor: tertiaryColor,
                backgroundColor: tertiaryColor + '33',
                fill: true,
                tension: 0.4,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Health Metrics Overview',
                    color: textColor,
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Blood Pressure (mmHg)',
                        color: textColor
                    },
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        color: gridColor
                    }
                },
                y1: {
                    position: 'right',
                    title: {
                        display: true,
                        text: 'BPM / mg/dL',
                        color: textColor
                    },
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                },
                x: {
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        color: gridColor
                    }
                }
            }
        }
    });
}
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBh_Oe8jtUv4XUn2EjKNbAA9nSOIJ26xBo",
    authDomain: "health-nest.firebaseapp.com",
    projectId: "health-nest",
    storageBucket: "health-nest.firebasestorage.app",
    messagingSenderId: "828344669402",
    appId: "1:828344669402:web:958080d8fc7bffc93541e3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

