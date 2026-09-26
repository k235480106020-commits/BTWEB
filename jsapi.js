<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hệ Thống Năng Suất Dev</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f7f6; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); max-width: 600px; margin: auto; }
        button { background: #007bff; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 5px; font-size: 16px;}
        button:hover { background: #0056b3; }
        pre { background: #272822; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 14px;}
        .total { font-weight: bold; color: #d9534f; margin-top: 15px; }
    </style>
</head>
<body>

<div class="container">
    <h2>📊 Đánh Giá Năng Suất Developer</h2>
    <p>Thuật toán API sẽ tự động tính toán dựa trên số dòng code và số bug.</p>
    <button onclick="fetchApiData()">🔄 Lấy Dữ Liệu API</button>

    <div id="result">
        <!-- Kết quả JSON hoặc text sẽ hiển thị ở đây -->
        <p style="color: gray; margin-top: 20px;">Chưa có dữ liệu. Hãy bấm nút.</p>
    </div>
</div>

<script>
    function fetchApiData() {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "<p>Đang tải dữ liệu từ Node-RED...</p>";

        // Gọi API thông qua đường dẫn tương đối (đã được Nginx proxy sang Node-RED)
        fetch('/api/dev-score')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Lỗi mạng hoặc cấu hình Nginx: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if(data.ok === 1) {
                    // Trình bày dữ liệu JSON ra màn hình cho đẹp
                    let htmlOutput = `<p style="color: green; font-weight: bold;">✅ ${data.msg}</p>`;
                    htmlOutput += `<pre>${JSON.stringify(data.danh_sach, null, 4)}</pre>`;
                    htmlOutput += `<p class="total">💰 Tổng quỹ thưởng cần chi: $${data.tong_quy_thuong.toLocaleString()}</p>`;
                    
                    resultDiv.innerHTML = htmlOutput;
                } else {
                    resultDiv.innerHTML = "<p style='color:red'>Dữ liệu trả về không đúng định dạng.</p>";
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                resultDiv.innerHTML = `<p style="color: red;">❌ Có lỗi xảy ra: ${error.message}</p>`;
            });
    }
</script>

</body>
</html>