function getId(id) {
    return document.getElementById(id);
}

// In số nhập từ bàn phím
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
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            sum += nums[i];
        }
    }
    getId("showSum").innerHTML = `Tổng số dương là: ${sum}`;
}

// Câu 2: Có bao nhiêu số dương trong mảng
function inSoDuong() {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total++;
        }
    }
    getId("showSoDuong").innerHTML = `Có ${total} số dương`;
}

// Câu 3: Tìm số nhỏ nhất trong mảng
function soNhoNhat() {
    if (nums.length > 0) {
        var minN = nums[0];
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] < minN) {
                minN = nums[i];
            }
        }
        getId("showMin").style.color = "green";
        getId("showMin").innerHTML = `Số nhỏ nhất là: ${minN}`;
    } else {
        getId("showMin").style.color = "red";
        getId("showMin").innerHTML = "Vui lòng nhập số";
    }
}

// Câu 4: Tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat() {
    var minD;
    for (var i = 0; i < nums.length; i++) {
        if (!minD && minD !== 0 && nums[i] > 0) {
            minD = nums[i];
        }
        if (nums[i] < minD && nums[i] > 0) {
            minD = nums[i];
        }
    }
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
    var even;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (!even && nums[i] % 2 === 0) {
            even = nums[i];
            break;
        }
    }
    if (even) {
        getId("showEven").innerHTML = `Số chẵn cuối cùng là: ${even}`;
    } else if (even === 0) {
        getId("showEven").innerHTML = "Số chẵn cuối cùng là 0";
    } else {
        getId("showEven").innerHTML = "-1";
    }
}

// Câu 6: Đổi vị trí 2 giá trị trong mảng
function changeEl() {
    if (nums.length > 0) {
        var vt1 = getId("viTri1").value;
        var vt2 = getId("viTri2").value;
        var x = nums[vt1];
        nums[vt1] = nums[vt2];
        nums[vt2] = x;
        if (vt1 !== "" && vt2 !== "") {
            getId("showEl").style.color = "green";
            getId("showEl").innerHTML = `Mảng sau khi đổi: ${nums.join(", ")}`;
        } else {
            getId("showEl").style.color = "red";
            getId("showEl").innerHTML = `Vui lòng nhập vị trí`;
        }
    } else {
        getId("showEl").style.color = "red";
        getId("showEl").innerHTML = `Vui lòng nhập giá trị thay đổi`;
    }
}

// Câu 7: Sắp xếp mảng theo thứ tự tăng dần
function sortEl() {
    if (nums.length > 0) {
        nums.sort(function (a, b) {
            return a - b;
        });
        getId("showSort").style.color = "green";
        getId("showSort").innerHTML = `Mảng sau khi sắp xếp: </br> ${nums.join(" -> ")}`;
    } else {
        getId("showSort").style.color = "red";
        getId("showSort").innerHTML = `Vui lòng nhập giá trị`;
    }
}

// Câu 8: Tìm số nguyên tố đầu tiên, nếu không có trả về -1
function inSoNT() {
    var firstNum;
    for (var i = 0; i < nums.length; i++) {
        if (kiemTraSNT(nums[i])) {
            firstNum = nums[i];
            break;
        }
    }
    if (firstNum) {
        getId("showSoNT").style.color = "green";
        getId("showSoNT").innerHTML = `Số nguyên tố đầu tiên là: ${firstNum}`;
    } else {
        getId("showSoNT").style.color = "red";
        getId("showSoNT").innerHTML = "-1";
    }
}

function kiemTraSNT(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else {
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
var nums2 = [];
function themSo() {
    var nhapSoT = +getId("nhapSoT").value;
    nums2.push(nhapSoT);
    getId("showSoT").style.display = "block";
    getId("showSoT").innerHTML = nums2;
    getId("nhapSoT").value = "";
}

function demSoNguyen() {
    var tongSoNguyen = 0;
    for (var i = 0; i < nums2.length; i++) {
        if (kiemTraSoNguyen(nums2[i])) {
            tongSoNguyen++;
        }
    }
    getId("showSoNguyen").style.display ="block";
    getId("showSoNguyen").innerHTML = `Có ${tongSoNguyen} số nguyên`;
}

function kiemTraSoNguyen(value) {
    return Number.isInteger(value);
}

// Câu 10: So sánh số lượng số âm & số dương
function soSanh() {
    var soDuong = [];
    var soAm = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            soDuong.push(nums[i]);
        } else {
            soAm.push(nums[i]);
        }
    }

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