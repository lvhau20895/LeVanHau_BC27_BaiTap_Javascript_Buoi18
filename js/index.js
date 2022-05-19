function getId(id) {
    return document.getElementById(id);
}

// Tạo hàm in số nhập từ bàn phím
var nums = [];
function inSoN() {
    var nhapN = +getId("nhapSoN").value;
    nums.push(nhapN);
    getId("showN").style.display = "block";
    getId("showN").innerHTML = nums.join(", ");
    getId("nhapSoN").value = "";
}

// Câu 1: Tính tổng các số dương trong mảng
function totalArr() {
    // B1: Tạo biến sum để gán giá trị tổng số dương
    var sum = 0;
    
    // B2: Duyệt mảng, nếu phần tử trong mảng lớn hơn 0 thì cộng dồn vào biến sum
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            sum += nums[i];
        }
    }

    // B3: Hiển thị
    getId("showSum").innerHTML = `Tổng số dương là: ${sum}`;
}


// Câu 2: Có bao nhiêu số dương trong mảng
function inSoDuong() {
    // B1: Tạo biến total để đếm số lượng số dương trong mảng
    var total = 0;

    // B2: Duyệt mảng từ 0, nếu phần tử trong mảng lớn hơn 0 thì + thêm 1 cho biến total
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total++;
        }
    }

    // B3: Hiển thị
    getId("showSoDuong").innerHTML = `Có ${total} số dương`;
}


// Câu 3: Tìm số nhỏ nhất trong mảng
function soNhoNhat() {
    // B4: Thêm trường hợp không nhập gì, nếu phần tử lớn hơn 0 thì thực hiện tìm số nhỏ nhất, nếu ngược lại thì in "Vui lòng nhập số"
    if (nums.length > 0) {
        // B1: Tạo biến minN gán giá trị là phần tử đầu tiên trong mảng
        var minN = nums[0];

        // B2: Duyệt mảng bắt đầu từ chỉ mục 1, nếu có phần tử nào nhỏ hơn phần tử ban đầu thì gán nó cho phần tử ban đầu
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] < minN) {
                minN = nums[i];
            }
        }

        // B3: Hiển thị
        getId("showMin").style.color = "green";
        getId("showMin").innerHTML = `Số nhỏ nhất là: ${minN}`;
    } else {
        getId("showMin").style.color = "red";
        getId("showMin").innerHTML = "Vui lòng nhập số";
    }
}


// Câu 4: Tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat() {
    // B1: Tạo biến minD để gán giá trị là số dương nhỏ nhất
    var minD;

    // B2: duyệt mảng từ 0
    for (var i = 0; i < nums.length; i++) {
        // Tìm số dương: nếu minD là true && minD khác 0 && phần tử trong mảng lớn hơn 0 thì phần tử đó là số dương và gán cho biến minD
        if (!minD && minD !== 0 && nums[i] > 0) {
            minD = nums[i];
        }

        // Tìm số nhỏ nhất: nếu phần tử trong mảng qua từng lần lặp < minD && phần tử đó > 0 thì gán phần tử đó cho biến minD
        if (nums[i] < minD && nums[i] > 0) {
            minD = nums[i];
        }
    }

    // B3: Hiển thị
    // Nếu minD là true thì hiển thị kết quả, ngược lại thì thông báo "Không có số dương trong mảng"
    if (minD) {
        getId("showMinDuong").style.color = "green";
        getId("showMinDuong").innerHTML = `Số dương nhỏ nhất là ${minD}`;
    } else {
        getId("showMinDuong").style.color = "red";
        getId("showMinDuong").innerHTML = `Không có số dương trong mảng`;
    }
}


// Câu 5: Tìm số chẵn cuối cùng trong mảng
function lastEven() {
    // B1: Tạo biến even để gán giá trị là số chẵn cuối cùng trong mảng
    var even;

    // B2: Duyệt mảng với biến i = độ dài mảng - 1, i >= 0 và bước nhảy là i-- để bắt đầu duyệt từ phần tử cuối
    // Trường hợp biến even là true && phần tử trong mảng chia hết cho 2 thì gán phần tử đó cho biến even
    for (var i = nums.length - 1; i >= 0; i--) {
        if (!even && nums[i] % 2 === 0) {
            even = nums[i];
            break; // Nếu có phần tử là số chẵn thì lập tức ngừng vòng lặp
        }
    }

    // B3: Hiển thị
    // Trường hợp biến even là true thì in kết quả
    // Trường hợp biến even là 0 thì in kết quả "Số chẵn cuối cùng là 0"
    // Trường hợp khác thì trả về -1
    if (even) {
        getId("showEven").style.color = "green";
        getId("showEven").innerHTML = `Số chẵn cuối cùng là: ${even}`;
    } else if (even === 0) {
        getId("showEven").style.color = "green";
        getId("showEven").innerHTML = "Số chẵn cuối cùng là 0";
    } else {
        getId("showEven").style.color = "red";
        getId("showEven").innerHTML = "-1";
    }
}


// Câu 6: Đổi vị trí 2 giá trị trong mảng
function changeEl() {
    // B4: Thêm trường hợp nếu đã thêm giá trị thì thực hiện đổi vị trí
    // Ngược lại thì thông báo "Vui lòng nhập giá trị muốn thay đổi"
    if (nums.length > 0) {
        // B1: DOM tới 2 ô input có vị trí cần đổi
        var vt1 = getId("viTri1").value;
        var vt2 = getId("viTri2").value;

        // B2: 
        // Tạo biến x gán giá trị là vị trí thứ 1 trong mảng
        // Nếu vị trí 1 = vị trí 2 thì lúc này "vị trí 1" có giá trị của "vị trí 2"
        // Vị trí 2 = biến x thì lúc này "vị trí 2" có giá trị của "vị trí 1" @@
        var x = nums[vt1];
        nums[vt1] = nums[vt2];
        nums[vt2] = x;

        // B3: Hiển thị
        // Trường hợp vị trí 1 và 2 không phải là 1 chuỗi rỗng thì in ra kết quả
        // Ngược lại thì thông báo "Vui lòng nhập vị trí"
        if (vt1 !== "" && vt2 !== "") {
            getId("showEl").style.color = "green";
            getId("showEl").innerHTML = `Mảng sau khi đổi: ${nums.join(", ")}`;
        } else {
            getId("showEl").style.color = "red";
            getId("showEl").innerHTML = `Vui lòng nhập vị trí`;
        }
    } else {
        getId("showEl").style.color = "red";
        getId("showEl").innerHTML = `Vui lòng nhập giá trị muốn thay đổi`;
    }
}


// Câu 7: Sắp xếp mảng theo thứ tự tăng dần
function sortEl() {
    // B3: Thêm trường hợp nếu nums.length > 0 thì thực hiện sắp xếp mảng
    // Ngược lại thì thông báo "Vui lòng nhập giá trị"
    if (nums.length > 0) {
        // B1: Sử dụng hàm sort kết hợp hàm có tham số a, b và trả về kết quả a - b để sắp xếp mảng tăng dần
        nums.sort(function(a, b) {
            return a - b;
        });

        // B2: Hiển thị
        getId("showSort").style.color = "green";
        getId("showSort").innerHTML = `Mảng sau khi sắp xếp: </br> ${nums.join(" -> ")}`;
    } else {
        getId("showSort").style.color = "red";
        getId("showSort").innerHTML = `Vui lòng nhập giá trị`;
    }
}


// Câu 8: Tìm số nguyên tố đầu tiên, nếu không có trả về -1
function inSoNT() {
    // B2: Tạo biến firstNum để gán giá trị là số nguyên tố đầu tiên
    var firstNum;

    // B3: Duyệt mảng, trường hợp là số nguyên tố thì lập tức ngừng vòng lặp
    for (var i = 0; i < nums.length; i++) {
        if (kiemTraSNT(nums[i])) {
            firstNum = nums[i];
            break;
        }
    }

    // B4: Hiển thị
    // Nếu firstNum = true thì hiển thị kết quả số nguyên tố đầu tiên
    // Ngược lại thì hiển thị -1
    if (firstNum) {
        getId("showSoNT").style.color = "green";
        getId("showSoNT").innerHTML = `Số nguyên tố đầu tiên là: ${firstNum}`;
    } else {
        getId("showSoNT").style.color = "red";
        getId("showSoNT").innerHTML = "-1";
    }
}

// B1: Tạo hàm kiểm tra n có phải số nguyên tố hay không
function kiemTraSNT(n) {
    // Tạo biến cờ hiệu trả về true
    var flag = true;
    // Trường hợp n < 2 thì không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else {
        // Tạo vòng lặp bắt đầu từ 2 kiểm tra nếu n chia hết cho i thì không phải số nguyên tố và lập tức ngừng vòng lặp
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}


// Câu 9: Nhập thêm 1 mảng số thực, tìm trong mảng có bao nhiêu số nguyên
// B1: Tạo biến nums2 với giá trị là 1 mảng rỗng mới
var nums2 = [];

// B2: Tạo hàm thêm phần tử vào mảng và hiển thị ra trình duyệt
function themSo() {
    var nhapSoT = +getId("nhapSoT").value;
    nums2.push(nhapSoT);
    getId("showSoT").style.display = "block";
    getId("showSoT").innerHTML = nums2.join(", ");
    getId("nhapSoT").value = "";
}

// B4: Tạo hàm đếm số nguyên trong mảng mới
function demSoNguyen() {
    // B5: Tạo biến soLuongSoNguyen = 0 để gán giá trị số lượng số nguyên trong mảng mới
    var soLuongSoNguyen = 0;

    // B6: Duyệt mảng trường hợp là số nguyên thì + thêm 1 cho biến soLuongSoNguyen
    for (var i = 0; i < nums2.length; i++) {
        if (kiemTraSoNguyen(nums2[i])) {
            soLuongSoNguyen++;
        }
    }

    // B7: Hiển thị
    getId("showSoNguyen").style.display ="block";
    getId("showSoNguyen").innerHTML = `Có ${soLuongSoNguyen} số nguyên`;
}

// B3: Tạo hàm kiểm tra số nguyên kết hợp với Number.isInteger để tìm số nguyên
function kiemTraSoNguyen(value) {
    return Number.isInteger(value);
}


// Câu 10: So sánh số lượng số âm & số dương
function soSanh() {
    // B1: Tạo 2 mảng số âm & số dương
    var soDuong = [];
    var soAm = [];

    // B2: Duyệt mảng nếu phần tử lớn hơn 0 thì thêm phần tử đó vào mảng số dương
    // Trường hợp nếu nhỏ hơn 0 thì thêm phần tử vào mảng số âm
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            soDuong.push(nums[i]);
        }
        if(nums[i] < 0) {
            soAm.push(nums[i]);
        }
    }

    // B3: Hiển thị
    // Nếu mảng số dương lớn hơn mảng số âm thì hiển thị "số dương > số âm"
    // Nếu mảng số dương nhỏ hơn mảng số âm thì hiển thị "số âm < số dương"
    // Trường hợp khác thì hiển thị "số dương = số âm"
    var ketQua = getId("showKetQua");
    ketQua.style.display = "block";
    if (soDuong.length > soAm.length) {
        ketQua.innerHTML = `Số dương > Số âm`;
    } else if (soDuong.length < soAm.length) {
        ketQua.innerHTML = `Số âm > Số dương`;
    } else {
        ketQua.innerHTML = `Số dương = Số âm`;
    }
}