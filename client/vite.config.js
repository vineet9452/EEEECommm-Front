// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure Vite recognizes the correct root directory
  base: '/',  // Ensure correct path handling
  build: {
    outDir: 'dist',  // Output directory for build files
    emptyOutDir: true,
  },
});




// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000", // बैकएंड सर्वर का URL (जहां आपका Express API चलता है)
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // Vite Configuration
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "build", // डिफ़ॉल्ट "dist" होता है, लेकिन इसे "build" में बदल सकते हैं
//   },
// });
