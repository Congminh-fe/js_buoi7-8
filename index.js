var soArray = [];

// them so vo array
document.getElementById("themSo").onclick = function inputValue(x) {
  x.preventDefault();
  var numInput = document.getElementById("number_value").value * 1;
  soArray.push(numInput);

  document.getElementById(
    "addNum_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Số bạn nhập: ${soArray} </h4>`;
};

//1.tinh tong so duong

document.getElementById("tongSoDuong").onclick = function () {
  var tongSoDuong = 0;
  for (var i = 0; i < soArray.length; i++) {
    if (soArray[i] > 0) {
      tongSoDuong += soArray[i];
    }
  }
  document.getElementById(
    "tongSo_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Tổng số dương: ${tongSoDuong} </h4>`;
};

//2.dem so duong
document.getElementById("demSoDuong").onclick = function () {
  var demSoDuong = 0;
  for (var i = 0; i < soArray.length; i++) {
    if (soArray[i] > 0) {
      demSoDuong++;
    }
  }
  document.getElementById(
    "demSo_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Số dương: ${demSoDuong} </h4>`;
};

//3. tìm so nhỏ nhất

document.getElementById("timSoNhoNhat").onclick = function () {
  var soNhoNhat = soArray[0];
  for (var i = 1; i < soArray.length; i++) {
    if (soNhoNhat > soArray[i]) {
      soNhoNhat = soArray[i];
    } //vd soNhoNhat = 5; soArray[1] =3 => soNhoNhat > soArray => soNhoNhat = 3
  }
  document.getElementById(
    "soNhoNhat_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Số nhỏ nhất: ${soNhoNhat} </h4>`;
};

//4. tìm so duong nho nhat

 document.getElementById("timSoDuongSmallest").onclick = function () {
   var soDuong = [];
   for (var i = 0; i < soArray.length; i++) {
     if (soArray[i] > 0) {
       soDuong.push(soArray[i]);
     }
   }
   var duongNhoNhat = soDuong[0];

//   //tinh duong nho nhat

   for (var j = 1; j < soDuong.length; j++) {
     if (duongNhoNhat > soDuong[j]) {
       duongNhoNhat = soDuong[j];
     }
   }

   document.getElementById(
     "duongNhoNhat_display"
   ).innerHTML = `<h4 class="text-center pt-2 "> Số dương nhỏ nhất: ${duongNhoNhat} </h4>`;
 };

//tim so chan cuoi cung
document.getElementById("timSoChanCuoiCung").onclick = function(){
  var soChan = [];
  for(var i = 0; i < soArray.length;i++){
    if(soArray[i] % 2 == 0){
      soChan.push(soArray[i])
    }
  }
  var soChanCuoi = soChan[(soChan.length) - 1];
  document.getElementById(
    "soChanCuoiCung_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Số chẵn cuối cùng: ${soChanCuoi} </h4>`;
};

//xap xep tang dan
document.getElementById("xepTangDan").onclick = function(){
  var xapXepTangDan = [];
  for(var i = 0; i < soArray.length; i++){
    xapXepTangDan.push(soArray[i])

  }
  var ketQua = xapXepTangDan.sort(function(a,b){
    return a - b
  })
  document.getElementById(
    "xepTangDan_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Các số sau khi đã xắp xếp : ${ketQua} </h4>`;
};


// tim so nguyen to dau tien
document.getElementById("timSoNguyenDauTien").onclick = function(){
  var SoNguyenTo = [];
  //them so nguyen to vo 1 array
  for(var i = 0; i < soArray.length; i++){
    var isCheck = tinhSoNguyenTo(soArray[i])
    if( isCheck == true){
      SoNguyenTo.push(soArray[i])
      break
    }
  }
  document.getElementById(
    "timSoNguyenToDauTien_display"
  ).innerHTML = `<h4 class="text-center pt-2 "> Số nguyên tố đầu tiên: ${SoNguyenTo} </h4>`;

  
  
};
//tinh so nguyen to
function tinhSoNguyenTo(so){
  var flagSNT = true;
  if ( so < 2){
    flagSNT = false
  }else if( so == 2){
    flagSNT == true;
  }else if ( so % 2 == 0){
    flagSNT = false;
  }else{
    for( var i = 3; i < Math.sqrt(so); i += 2){
      if( so % i == 0){
        flagSNT = false;
        break;
      }
    }
  }
  if(flagSNT == true){
    return true
  }else{
    return false
  }

  }

  // dem so nguyen

  //b1. them so nguyen
  var nguyenToArr = []
  document.getElementById("themSoNguyen_btn").onclick = function () {
    var addSoNguyen = document.getElementById("numberSoNguyen_value").value * 1;
    nguyenToArr.push(addSoNguyen)

    document.getElementById(
      "themSoNguyen_display"
    ).innerHTML = `<h4 class="text-center pt-2 "> Các số bạn đã nhập: ${nguyenToArr} </h4>`;
    
  };

  document.getElementById("DemSoNguyen_btn").onclick = function(){
    var tongSoNguyen = 0;
    for(var i =0; i < nguyenToArr.length; i++){
      var isIntergers = Number.isInteger(nguyenToArr[i])
      if(isIntergers == true){
        tongSoNguyen++
      }
    }
    document.getElementById(
      "demSoNguyen_display"
    ).innerHTML = `<h4 class="text-center pt-2 "> Tổng số nguyên: ${tongSoNguyen} </h4>`;
  };

  // so sanh so duong va am
  document.getElementById("soSanhAmDuong").onclick = function(){
    var soDuong = 0;
    var soAm = 0;
    for(var i = 0; i < soArray.length;i++){
      if(soArray[i] < 0){
        soAm++
      }else if(soArray[i] > 0){
        soDuong++
      }
    }
    
    var ketQua2 =''
    if(soAm > soDuong){
      ketQua2 = 'Số âm > Số dương'
    }else if(soAm < soDuong){
      ketQua2 = 'Số dương > Số âm'
    }else{
      ketQua2 = ' Số âm = Số dương'
    }
    document.getElementById(
      "soSanhAmDuong_display"
    ).innerHTML = `<h4 class="text-center pt-2 "> Kết quả: ${ketQua2} </h4>`;
  };


  //doi cho mang

  document.getElementById("doiCho").onclick = function(){
    var swapIndex1 = document.getElementById("viTri1").value*1;
    var swapIndex2 = document.getElementById("viTri2").value*1;
    var temp = soArray[swapIndex1];
    soArray[swapIndex1] = soArray[swapIndex2];

    soArray[swapIndex2] = temp

    document.getElementById(
      "doiCho_display"
    ).innerHTML = `<h4 class="text-center pt-2 "> Mảng sau khi đổi: ${soArray} </h4>`;
    
    
  };





