**Teknologi yang digunakan Untuk Backend**

 1. Framework laravel versi 8
 2. Database postgreSQL
 3. PHP versi 7.3
 
 Untuk instalasi backend pada computer local
 
 4. clone repo github diatas
 5. masuk pada directory laravel backend
 6. ubah file .env.example menjadi .env
 7. buat database baru pada postgreSQL
 8. sesuaikan nama database, host dan password dari database yang sudah ada pada komputer local anda pada file .env
 9. jalankan perintah composer install pada terminal (pastikan sudah terinstal composer pada komputer local)
 10. jalankan perintah php artisan migrate pada terminal
 11. jalankan perintah php artisan db:seed pada terminal
 12. jalankan perintah php artisan serve pada terminal
 13. backend telah berjalan
 
 jika sudah berhasil maka restfull api sudah bisa digunakan oleh frontend untuk dokumentasi dari rest api dapat diakses pada url berikut  [ini](https://documenter.getpostman.com/view/12361718/2s9YXb8QYw)

 **Teknologi yang digunakan untuk Frontend**
 
 1. React JS
 2. Tailwind

untuk menjalankan project frontend dibutuhkan beberapa software yang harus sudah terinstall yaitu node js dan npm node yang saya gunakan adalah versi 18 dan npm yang saya gunakan adalah versi 9.8.1

cara instalasi setelah clone repo

 1. masuk pada diretory react-frontend
 2. jalankan perintah npm install dan tunggu hingga selesai
 3. ubah file env.example menjadi .env
 4. ubah base url api pada .env sesuai dengan base url rest api laravel anda
 5. jalankan perintah npm run dev
 6. pada saat login masukan email dan password yang ada pada database yaitu yang telah diinput melalui seeder dengan email : **doddy@gmail.com** dan password : **lavender**
 


 **Fitur Aplikasi Inventory**
 -
 
 1. Mengelola User (CRUD)
 2. Mengelola Product (CRUD)
 3. Pagination server side
 4. Auth dengan token
 
	 

 

 

 

