module.exports = {
    presets: [
      // Biên dịch mã ES6 trở về ES5 (hoặc môi trường tương thích hơn)
      ['@babel/preset-env', {
        // Cấu hình thêm các tính năng của môi trường nếu cần
        targets: "> 0.25%, not dead", // Mục tiêu trình duyệt
        useBuiltIns: "usage", // Chỉ import các polyfill khi cần thiết
        corejs: 3, // Chỉ sử dụng polyfill từ CoreJS phiên bản 3
      }],
      // Cấu hình để xử lý JSX trong React
      '@babel/preset-react',
      // Nếu sử dụng TypeScript, cấu hình này cũng cần thiết
      '@babel/preset-typescript',
    ],
    plugins: [
      // Cấu hình plugin nếu cần (ví dụ, cho tính năng mới của React)
      '@babel/plugin-transform-runtime',
    ],
  };
  