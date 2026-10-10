# Gender Reveal — Agung & Natalia

Versi React + Vite dari HTML asli. Foto, teks, tampilan responsif, pilihan tebakan, kejutan Baby Girl, animasi, dan tombol ulang dipertahankan. Foto dipisahkan menjadi file di `public/images` supaya mudah diganti. Situs ini statis, tanpa backend atau variabel lingkungan.

## Cara paling mudah: unggah ZIP siap pakai

1. Buka dashboard Cloudflare, masuk ke **Workers & Pages**.
2. Pilih **Create application**, lalu opsi **Pages / Direct Upload / Drag and drop**. Nama menu dapat berbeda mengikuti tampilan dashboard.
3. Masukkan nama proyek, misalnya `agung-natalia-gender-reveal`.
4. Unggah **gender-reveal-cloudflare-upload.zip** yang disertakan bersama proyek ini.
5. Pilih **Deploy site**. Cloudflare akan menyediakan alamat `*.pages.dev`.

ZIP unggahan berisi hasil build, dengan `index.html` langsung di dalam ZIP. Jangan unggah ZIP source React sebagai hasil build.

## Edit dan jalankan di komputer

Gunakan Node.js 22 atau lebih baru. Di folder proyek, jalankan:

```sh
npm install
npm run dev
```

- Ubah konten dan interaksi di `src/App.jsx`.
- Ubah desain di `src/styles.css`.
- Ganti foto di `public/images/agung-natalia.jpg` dan `public/images/ultrasound.jpg`.
- Ubah judul halaman di `index.html`.

Sesudah mengedit:

```sh
npm run build
npm run preview
```

Unggah folder `dist`, atau ZIP seluruh isi folder `dist`, ke Cloudflare Pages.

## Alternatif: deploy melalui GitHub/GitLab

Unggah isi proyek React ke repository lalu hubungkan repository ke Cloudflare Pages:

| Pengaturan | Nilai |
| --- | --- |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Kosong bila proyek di root repository |

Jika proyek ditempatkan dalam subfolder repository, sesuaikan Root directory dengan nama subfolder tersebut. Environment variable aplikasi tidak diperlukan.

## Rujukan

- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
