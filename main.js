var soNguyen = []; // Khởi tạo mảng trống

// Thêm sự kiện click cho nút "Thêm số"
document.getElementById("themSo").addEventListener("click", function () {
  var nhapSoN = document.getElementById("nhapSoN").value; // Lấy giá trị người dùng nhập
  nhapSoN = parseInt(nhapSoN); // Chuyển đổi giá trị nhập thành số nguyên

  if (!isNaN(nhapSoN)) {
    // Kiểm tra giá trị nhập có phải là số không
    soNguyen.push(nhapSoN); // Thêm giá trị vào mảng
    document.getElementById("soN").innerHTML = soNguyen.join(", "); // Hiển thị mảng trên màn hình
  } else {
    alert("Vui lòng nhập số nguyên!");
  }
});

/**
 * Tính tổng cho các số dương
 */

// Thêm sự kiện click cho nút "Tính tổng"
document.getElementById("tongSoDuong").addEventListener("click", function () {
  // Khởi tạo biến tongSoDuong với giá trị ban đầu là 0
  var tongSoDuong = 0;

  // Duyệt qua từng phần tử trong mảng
  for (var i = 0; i < soNguyen.length; i++) {
    // Kiểm tra nếu số hiện tại là số dương
    if (soNguyen[i] > 0) {
      // Cộng số hiện tại vào tổng
      tongSoDuong += soNguyen[i];
    }
  }

  // Hiển thị tổng số dương trong phần footer của thẻ "card"
  document.getElementById("resultTongSoDuong").innerHTML =
    "Tổng số dương: " + tongSoDuong;
});

/**
 * Đếm tổng số dương
 */

// Thêm sự kiện click cho nút "Đếm số"
document.getElementById("demSoDuong").addEventListener("click", function () {
  // Khởi tạo biến demSoDuong với giá trị ban đầu là 0
  var demSoDuong = 0;

  // Duyệt qua từng phần tử trong mảng
  for (var i = 0; i < soNguyen.length; i++) {
    // Kiểm tra nếu số hiện tại là số dương
    if (soNguyen[i] > 0) {
      // Nếu đúng, tăng biến đếm lên 1
      demSoDuong++;
    }
  }

  // Hiển thị số lượng số dương trong phần footer của thẻ "card"
  document.getElementById("resultDemSoDuong").innerHTML =
    "Số lượng số dương: " + demSoDuong;
});

/**
 * Tìm số nhỏ nhất
 */

// Thêm sự kiện click cho nút "Tìm số nhỏ nhất"
document.getElementById("timSoNhoNhat").addEventListener("click", function () {
  // Kiểm tra nếu mảng rỗng
  if (soNguyen.length === 0) {
    alert("Mảng không có phần tử nào");
    return;
  }
  // Khởi tạo biến soNhoNhat với giá trị ban đầu là phần tử đầu tiên của mảng
  var soNhoNhat = soNguyen[0];

  // Duyệt qua từng phần tử trong mảng, bắt đầu từ phần tử thứ hai
  for (var i = 1; i < soNguyen.length; i++) {
    // Kiểm tra nếu số hiện tại nhỏ hơn soNhoNhat
    if (soNguyen[i] < soNhoNhat) {
      // Nếu đúng, cập nhật soNhoNhat
      soNhoNhat = soNguyen[i];
    }
  }

  // Hiển thị số nhỏ nhất trong phần footer của thẻ "card"
  document.getElementById("resultSoNhoNhat").innerHTML =
    "Số nhỏ nhất: " + soNhoNhat;
});

/**
 * Tìm số dương nhỏ nhất
 */

// Thêm sự kiện click cho nút "Tìm số dương nhỏ nhất"
document
  .getElementById("timSoDuongNhoNhat")
  .addEventListener("click", function () {
    // Kiểm tra nếu mảng rỗng
    if (soNguyen.length === 0) {
      alert("Mảng không có phần tử nào");
      return;
    }

    // Khởi tạo biến soDuongNhoNhat là không có giá trị (undefined)
    var soDuongNhoNhat;

    // Duyệt qua từng phần tử trong mảng
    for (var i = 0; i < soNguyen.length; i++) {
      // Kiểm tra nếu số hiện tại là số dương và nếu soDuongNhoNhat chưa được gán hoặc số hiện tại nhỏ hơn soDuongNhoNhat
      if (
        soNguyen[i] > 0 &&
        (soDuongNhoNhat === undefined || soNguyen[i] < soDuongNhoNhat)
      ) {
        // Nếu đúng, cập nhật soDuongNhoNhat
        soDuongNhoNhat = soNguyen[i];
      }
    }

    // Kiểm tra nếu không tìm thấy số dương nào
    if (soDuongNhoNhat === undefined) {
      alert("Không có số dương nào trong mảng");
      return;
    }

    // Hiển thị số dương nhỏ nhất trong phần footer của thẻ "card"
    document.getElementById("resultSoDuongNhoNhat").innerHTML =
      "Số dương nhỏ nhất: " + soDuongNhoNhat;
  });

/**
 * Tìm số chẵn cuối cùng
 */

// Thêm sự kiện click cho nút "Tìm số chẵn cuối"
document.getElementById("timSoChanCuoi").addEventListener("click", function () {
  // Kiểm tra nếu mảng rỗng
  if (soNguyen.length === 0) {
    alert("Mảng không có phần tử nào");
    return;
  }

  // Khởi tạo biến soChanCuoi là không có giá trị (undefined)
  var soChanCuoi = undefined;

  // Duyệt qua từng phần tử trong mảng
  for (var i = 0; i < soNguyen.length; i++) {
    // Kiểm tra nếu số hiện tại là số chẵn
    if (soNguyen[i] % 2 === 0) {
      // Nếu đúng, cập nhật soChanCuoi
      soChanCuoi = soNguyen[i];
    }
  }

  // Kiểm tra nếu không tìm thấy số chẵn nào
  if (soChanCuoi === undefined) {
    soChanCuoi = -1; // Gán giá trị -1 nếu không tìm thấy số chẵn
  }

  // Hiển thị số chẵn cuối cùng hoặc -1 trong phần footer của thẻ "card"
  document.getElementById("resultSoChanCuoi").innerHTML =
    "Số chẵn cuối cùng: " + soChanCuoi;
});

/**
 * Đổi chỗ 2 giá trị trong mảng theo vị trí
 */

// Thêm sự kiện click cho nút "Đổi chỗ"
document.getElementById("doiCho").addEventListener("click", function () {
  var soViTri1 = parseInt(document.getElementById("soViTri1").value);
  var soViTri2 = parseInt(document.getElementById("soViTri2").value);

  // Kiểm tra xem liệu các vị trí đã được nhập hợp lệ không
  if (
    !isNaN(soViTri1) &&
    !isNaN(soViTri2) &&
    soViTri1 >= 0 &&
    soViTri1 < soNguyen.length &&
    soViTri2 >= 0 &&
    soViTri2 < soNguyen.length
  ) {
    // Đổi chỗ các giá trị tại các vị trí đã được nhập
    var temp = soNguyen[soViTri1];
    soNguyen[soViTri1] = soNguyen[soViTri2];
    soNguyen[soViTri2] = temp;

    // Hiển thị mảng sau khi đã đổi chỗ
    document.getElementById("outputDoiCho").innerHTML =
      "Mảng sau khi đổi: " + soNguyen.join(", ");
  } else {
    alert("Vui lòng nhập vị trí hợp lệ!");
  }
});

/**
 * Sắp xếp mảng theo thứ tự tăng dần
 */

// Thêm sự kiện click cho nút "Sắp xếp"
document.getElementById("sapXep").addEventListener("click", function () {
  // Kiểm tra nếu mảng rỗng
  if (soNguyen.length === 0) {
    alert("Mảng không có phần tử nào");
    return;
  }

  // Sắp xếp mảng tăng dần bằng cách dùng thuật toán Bubble Sort
  for (var i = 0; i < soNguyen.length; i++) {
    for (var j = 0; j < soNguyen.length - i - 1; j++) {
      if (soNguyen[j] > soNguyen[j + 1]) {
        // Đổi chỗ hai phần tử
        var temp = soNguyen[j];
        soNguyen[j] = soNguyen[j + 1];
        soNguyen[j + 1] = temp;
      }
    }
  }

  // Hiển thị mảng sau khi đã sắp xếp
  document.getElementById("resultSapXep").innerHTML =
    "Mảng sau khi sắp xếp: " + soNguyen.join(", ");
});

/**
 * Tìm số nguyên tố đầu tiên trong mảng
 */

// Hàm kiểm tra số nguyên tố
function isPrime(n) {
  // Số nguyên tố phải lớn hơn 1
  if (n <= 1) {
    return false;
  }
  // Kiểm tra từ 2 đến căn bậc hai của n
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Thêm sự kiện click cho nút "Tìm nguyên tố"
document.getElementById("timNguyenTo").addEventListener("click", function () {
  // Kiểm tra nếu mảng rỗng
  if (soNguyen.length === 0) {
    alert("Mảng không có phần tử nào");
    return;
  }

  // Duyệt mảng và tìm số nguyên tố đầu tiên
  for (var i = 0; i < soNguyen.length; i++) {
    if (isPrime(soNguyen[i])) {
      document.getElementById("resultTimNguyenTo").innerHTML =
        "Số nguyên tố đầu tiên trong mảng: " + soNguyen[i];
      return;
    }
  }

  // Nếu không tìm thấy số nguyên tố
  document.getElementById("resultTimNguyenTo").innerHTML =
    "Mảng không có số nguyên tố. Kết quả: -1";
});

/**
 * Đếm số nguyên
 */

var soThuc = []; // khởi tạo mảng số thực rỗng

// Thêm sự kiện click cho nút "Nhập số"
document.getElementById("nhapSo").addEventListener("click", function () {
  var nhapSoNguyen = document.getElementById("nhapSoNguyen").value; // lấy giá trị từ input

  // Kiểm tra xem liệu giá trị đã nhập có phải là số không
  if (!isNaN(nhapSoNguyen)) {
    soThuc.push(parseFloat(nhapSoNguyen)); // nếu là số, thêm nó vào mảng

    // Hiển thị mảng số thực
    document.getElementById("resultnhapSoNguyen").innerHTML =
      "Mảng số thực: " + soThuc.join(", ");
  } else {
    alert("Vui lòng nhập số!");
  }
});

// Thêm sự kiện click cho nút "Đếm số nguyên"
document.getElementById("demSoNguyen").addEventListener("click", function () {
  var count = 0; // khởi tạo biến đếm

  // Duyệt qua mảng số thực, nếu số nào có phần thập phân bằng 0 thì tăng biến đếm lên 1
  for (var i = 0; i < soThuc.length; i++) {
    if (soThuc[i] % 1 === 0) {
      count++;
    }
  }

  // Hiển thị số lượng số nguyên trong mảng số thực
  document.getElementById("resultDemSoNguyen").innerHTML =
    "Số lượng số nguyên trong mảng: " + count;
});

/**
 * So sánh số lượng số dương và số lượng số âm
 */

// Thêm sự kiện click cho nút "So Sánh"
document.getElementById("soSanh").addEventListener("click", function () {
  var soDuong = 0; // Biến đếm số dương
  var soAm = 0; // Biến đếm số âm

  // Duyệt qua mảng
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] > 0) {
      // Kiểm tra nếu số dương
      soDuong++;
    } else if (soNguyen[i] < 0) {
      // Kiểm tra nếu số âm
      soAm++;
    }
  }

  // So sánh và in ra kết quả
  if (soDuong > soAm) {
    document.getElementById("resultSoSanh").innerHTML =
      "Số lượng số dương nhiều hơn số lượng số âm";
  } else if (soDuong < soAm) {
    document.getElementById("resultSoSanh").innerHTML =
      "Số lượng số âm nhiều hơn số lượng số dương";
  } else {
    document.getElementById("resultSoSanh").innerHTML =
      "Số lượng số dương và số âm bằng nhau";
  }
});
