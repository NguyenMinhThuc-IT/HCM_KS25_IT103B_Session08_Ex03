* **Xác định chỉ số (Index Lookup):** Sử dụng `portIds.indexOf(id)` để tìm vị trí index của trụ sạc cần cập nhật.
* **Cập nhật dữ liệu (Update Operation):** Thay đổi giá trị tại đúng chỉ số index vừa tìm được trong mảng `portStatuses`, đảm bảo tính đồng bộ dữ liệu giữa 3 mảng `portIds`, `portStatuses`, và `portPowersKw`.
* **Thống kê & Tìm kiếm tối ưu:** Duyệt qua các mảng song song bằng vòng lặp `for`:
  1. Đếm các trụ có trạng thái `'AVAILABLE'`.
  2. So sánh và xác định trụ khả dụng có công suất lớn nhất (`maxPower`).

---

## 2. Bảng Ma Trận Kiểm Thử (Test Cases)

| Trường hợp kiểm thử | Thao tác / Dữ liệu đầu vào | Trạng thái sau cập nhật | Kết quả thống kê mong đợi |
| :--- | :--- | :--- | :--- |
| **Test Case 1**<br>*(Kịch bản gốc)* | • S01: Xe cắm sạc (`AVAILABLE` $\rightarrow$ `CHARGING`)<br>• S03: Sửa xong (`ERROR` $\rightarrow$ `AVAILABLE`) | • S01: `CHARGING`<br>• S03: `AVAILABLE` | • Tổng trụ AVAILABLE: `3` (S03, S04, S06)<br>• Trụ sẵn sàng CS lớn nhất: `S04` (250 kW) |
| **Test Case 2**<br>*(Tất cả trụ bận/lỗi)* | • S04: Xe cắm sạc (`CHARGING`)<br>• S06: Xe cắm sạc (`CHARGING`) | • S01, S02, S04, S05, S06: `CHARGING`<br>• S03: `ERROR` | • Tổng trụ AVAILABLE: `0`<br>• Trụ sẵn sàng CS lớn nhất: `Không có` |

---