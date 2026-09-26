# Bài tập môn lập trình web 

Họ và tên: Phan Văn Hải

Lớp: K59.KMT.K01

GVHD: Đỗ Duy Cốp

Bài tập 1:

1. Giả lập linux os: hyperV, virtualBox, vmware, wsl

Cài đặt vmware tại đường dẫn: https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/48f1ca1c-5111-4e70-b9e5-b6a47d610aed" />

Cài đặt ubutu Desktop

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/ba047d79-b341-4b24-9d4d-d3fbc0c22ea1" />

Giả lập hệ điều hành ubutu trên vmware

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/57599eed-d794-40ff-8981-eebcb7fc427b" />


2. Cài đặt docker compose trên os đó

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/92f880dc-6d6d-4be3-94b4-5a7bf3fafa1f" />


3. Cài trên docker compose : các dịch vụ: nginx, nodered, mariadb, phpmyadmin, cloudflared 

Tạo file docker-compose.yml

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/9888775b-a6d5-4232-8a2b-0c47f98d2af2" />

Cài đặt các dịch vụ và khởi chạy 

<img width="1917" height="1072" alt="image" src="https://github.com/user-attachments/assets/eb9b665b-2cdd-4380-88de-537ea076381a" />


4. Cấu hình nginx có thể chạy 2 website  với 2 domain khác nhau.

Kết nối tới tên miền 

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/07e4977d-a1d6-447f-a8d0-87edfb412d49" />

Tạo đường hầm tới cloudflared

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/1f9d01ce-171b-4201-b179-67f627a7d553" />


Tạo 2 thư mục và chèn nội dung đơn giản

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/e308d49b-00bf-4feb-bd18-6738e62686aa" />

Cấu hình nginx

Khởi chạy 2 trang web thử nghiệm chạy trên 2 domain phanhaiweb1.hfanweb.id.vn và phanhaiweb2.hfanweb.id.vn



Bài tập 2:

 Sử dụng nodered: dùng node http_in + http_response => tạo api đơn giản


Sử dụng http_in với phương thức get để lấy dữ liệu 

<img width="1917" height="1072" alt="image" src="https://github.com/user-attachments/assets/e73f93ef-a458-45cd-99fc-1377f88f04e6" />

Cấu hình nginx để web dùng js gọi đc API trên nodered, thuật toán cho api

Dùng function trả về dữ liệu api

<img width="1913" height="1078" alt="image" src="https://github.com/user-attachments/assets/43d0f4da-01ad-443d-bbbd-86a8de1b57ec" />

Kết nối tạo API và deloy 

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/fcf127c0-1dd7-40bb-9927-17efcfb6d938" />
