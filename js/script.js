document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Dark Mode Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
            }
        });
    }

    // --- Mock Search ---
    const searchBtn = document.querySelector('.btn-search');
    const searchInput = document.querySelector('.search-box input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            if (query) {
                alert(`🔍 Mencari kos di area: ${query}`);
            } else {
                alert('❗ Silakan masukan lokasi terlebih dahulu');
            }
        });
    }

    // --- Mock Login Form ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            alert(`✅ Login Berhasil!\nSelamat datang kembali, ${username}`);
            window.location.href = 'index.html';
        });
    }

    // --- Mock Register Form ---
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Pendaftaran Berhasil!\nSilakan login dengan akun baru Anda.');
            window.location.href = 'login.html';
        });
    }

    // --- Add Kost Page Logic ---
    const addKostForm = document.getElementById('add-kost-form');
    if (addKostForm) {
        // 1. Auto Calculate Empty Rooms
        const totalInput = document.getElementById('total-rooms');
        const occupiedInput = document.getElementById('occupied-rooms');
        const emptyInput = document.getElementById('empty-rooms');

        function calculateEmpty() {
            const total = parseInt(totalInput.value) || 0;
            const occupied = parseInt(occupiedInput.value) || 0;
            const empty = total - occupied;

            if (empty < 0) {
                emptyInput.value = 0;
                alert('⚠️ Jumlah kamar terisi tidak boleh melebihi total kamar!');
                occupiedInput.value = total; // Reset to max available
            } else {
                emptyInput.value = empty;
            }
        }

        if (totalInput && occupiedInput) {
            totalInput.addEventListener('input', calculateEmpty);
            occupiedInput.addEventListener('input', calculateEmpty);
        }

        // 2. Image Preview logic (Simple)
        const imageInput = document.getElementById('kost-images');
        const previewContainer = document.getElementById('image-preview-container');

        if (imageInput && previewContainer) {
            imageInput.addEventListener('change', function () {
                previewContainer.innerHTML = ''; // Clear previous
                const files = this.files;
                if (files) {
                    for (let i = 0; i < files.length; i++) {
                        const file = files[i];
                        // Ensure it's an image
                        if (file.type.match('image.*')) {
                            const reader = new FileReader();
                            reader.onload = function (e) {
                                const img = document.createElement('img');
                                img.src = e.target.result;
                                img.classList.add('preview-img');
                                previewContainer.appendChild(img);
                            }
                            reader.readAsDataURL(file);
                        }
                    }
                }
            });
        }

        // 3. Form Submission with Reminder Check
        addKostForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const kostName = document.getElementById('kost-name').value;
            const reminderChecked = document.getElementById('monthly-reminder').checked;

            let message = `✅ Data Kost "${kostName}" Berhasil Disimpan!`;

            if (reminderChecked) {
                message += `\n\n🔔 NOTIFIKASI AKTIF:\nSistem akan mengirimkan popup alert setiap bulan ke WhatsApp/Dashboard Anda untuk konfirmasi ketersediaan kamar.`;
            }

            alert(message);
            // Redirect to home/dashboard
            window.location.href = 'index.html';
        });
    }
});
