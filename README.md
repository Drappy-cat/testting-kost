# Panduan Menjalankan Project CariKos

Website ini dibuat menggunakan HTML, CSS, dan JavaScript murni (Native), sehingga sangat mudah dijalankan. Anda **TIDAK** perlu menginstall Node.js atau server backend khusus untuk saat ini.

## Cara Menjalankan (Paling Mudah)

1.  Buka folder project ini di File Explorer.
2.  Cari file bernama `index.html`.
3.  **Klik dua kali** file tersebut.
    *   Website akan otomatis terbuka di browser default Anda (Chrome, Edge, Firefox, dll).
    *   Fitur JavaScript (seperti menu mobile, tombol cari, dark mode) akan berjalan normal.

## Cara Menjalankan (Opsi Server Lokal)

Jika Anda ingin menjalankan layaknya server asli (agar URL-nya rapi, misal `localhost:8000`), Anda bisa menggunakan Python (jika sudah terinstall) atau ekstensi VS Code.

### Menggunakan Python
Kami sudah menyertakan script sederhana untuk menjalankan server.
1.  Buka terminal/cmd di folder ini.
2.  Ketik perintah:
    ```bash
    python serve.py
    ```
    *(Atau `python3 serve.py` jika di Mac/Linux)*
3.  Buka browser dan kunjungi: `http://localhost:8000`

### Menggunakan VS Code Live Server
1.  Install ekstensi **Live Server** di VS Code.
2.  Klik kanan pada `index.html`.
3.  Pilih "Open with Live Server".

## Struktur File
*   `index.html`: Halaman utama.
*   `login.html`: Halaman login.
*   `register.html`: Halaman pendaftaran.
*   `css/style.css`: File desain/tampilan.
*   `js/script.js`: File logika interaktif (menu, dark mode, dll).
