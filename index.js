var itemsFirst = [
    {
        name : 'item/1.webp',
        title: 'Tất của ông già Noel đi trong đêm giáng sinh',
        cost: 809000,
        style : 'a'
    },
    {
        name : 'item/2.webp',
        title: '2 chiếc tất xanh tam sắc Gucci',
        cost: 599000,
        style : 'a',
    },
    {
        name : 'item/3.jpg',
        title: '2 chiếc tất đỏ hình unicorn bị cắm sừng',
        style : 'a',
        cost: 299000,
    },
    {
        name : 'item/4.webp',
        title: 'Chiếc tất đỏ ông già Noel mũ xanh',
        cost: 729000,
        style : 'a',
        
    },
    {
        name : 'item/5.webp',
        title: 'Cặp tất màu xanh lá cây kết hợp hoa văn đỏ',
        cost: 499000,
        style : 'a',
    },
    {
        name : 'item/6.jpg',
        title: '2 chiếc tất đỏ họa tiết tuần lộc',
        cost: 219000,
        style : 'a',
    },
    {
        name : 'item/7.webp',
        title: 'Chiếc tất tuần lộc đáng yêu',
        cost: 999999,
        style : 'a',
    },
    {
        name : 'item/8.webp',
        title: 'Bộ 3 tất thần thoại trong truyền thuyết',
        cost: 299000,
        style : 'a',
    },
    {
        name : 'item/9.webp',
        cost: 469000,
        title: 'Tất nâu hoa văn tinh xảo',
        style : 'a',
    },
    {
        name : 'item/10.webp',
        title: '2 chiếc tất màu của đại dương',
        cost: 899000,
        style : 'a',
    },
    {
        name : 'item/11.webp',
        title: 'Tất xanh đậm hoa văn của Thổ Nhĩ Kỳ',
        cost: 449000,
        style : 'a',
    },
    {
        name : 'item/12.webp',
        title: 'Cặp tất màu da của gấu Pooh',
        cost: 599000,
        style : 'a',
    },
]
loadDataFirst()
function loadDataFirst()
{   
    let dataFirst = ''
    
    for(let i = 0 ; i < itemsFirst.length ; i++)
    {
    let item = `<div class='items'>
    <a onclick='callGioHang()'><img src="${itemsFirst[i].name}" id='imgfirst${i}'> </a> 
    <div style ='padding-left: 10px;'>
    <a href='' style= 'text-decoration: none;'>${itemsFirst[i].title}</a></div>
    <div style ='color: burlywood; padding-left:60px;' >${itemsFirst[i].cost} VND
    <button id="nutMua" type="submit" style="height: 30px; width: 60px; background-color:black; color:white;" onclick='callGioHang(${i})'>Mua</button>
    </div>
    </div>
    `
    dataFirst+=item
    }
    console.log(dataFirst)
    document.getElementById('first').innerHTML = dataFirst
}

listnews = [
    {
        title : 'Thuộc “nằm lòng” 6 gợi ý phối đồ sành điệu với tất thời trang',
        link : 'https://www.elle.vn/xu-huong-phong-cach/phoi-do-sanh-dieu-tat-thoi-trang',
        sub: 'Sự quay trở lại của thời trang retro mở ra khả năng phối đồ đa dạng hơn cho những kiểu tất quen thuộc như tất lửng thể thao, tất giấy, tất lưới…',
    },
    {
        title : 'Học cách mix đồ với tất cao từ sao Hàn',
        link : 'https://kenh14.vn/fashion/hoc-cach-mix-do-voi-tat-cao-tu-sao-han-2011102903321654.chn   ',
        sub: 'Học lỏm những cách mix đồ hiệu quả của sao với kiểu tất này nhé!',
    },
    {
        title : 'Thuộc “nằm lòng” 6 gợi ý phối đồ sành điệu với tất thời trang',
        link : 'https://www.elle.vn/xu-huong-phong-cach/phoi-do-sanh-dieu-tat-thoi-trang',
        sub: 'Sự quay trở lại của thời trang retro mở ra khả năng phối đồ đa dạng hơn cho những kiểu tất quen thuộc như tất lửng thể thao, tất giấy, tất lưới…',
    },
   
  
]
loadDataSecond()
function loadDataSecond()
{   
    let dataSecond = ''
    
    for(let i = 0 ; i < listnews.length ; i++)
    {
    let item = `<div class='listnews'><img src='${itemsFirst[i].name}'><a href="${listnews[i].link}"> ${listnews[i].title}  </a></div>`
    dataSecond+=item
    }
   
    document.getElementById('second').innerHTML = dataSecond
}
var itemsThird = [
    {
        name : 'item/1.webp',
        style : 'a'
    },
    {
        name : 'item/2.webp',
        style : 'a',
    },
    {
        name : 'item/3.jpg',
        style : 'a',
    },
    {
        name : 'item/4.webp',
        style : 'a',
    },
    {
        name : 'item/5.webp',
        style : 'a',
    },
    {
        name : 'item/6.jpg',
        style : 'a',
    },
    {
        name : 'item/3.jpg',
        style : 'a',
    },
    {
        name : 'item/4.webp',
        style : 'a',
    },
]
loadDataThird()
function loadDataThird()
{   
    let dataThird = ''
    
    for(let i = 0 ; i < itemsThird.length ; i++)
    {
        let item = `<div class='trends'><a href=''><img src="${itemsFirst[i].name}" id='imgfirst${i}'> </a> <div style ='padding-left: 10px;'><a href='' style= 'text-decoration: none;'>${itemsFirst[i].title}</a></div><div style ='color: burlywood; padding-left: 60px;' >${itemsFirst[i].cost} VND</div></div>`
    dataThird+=item
    }
   
    document.getElementById('third').innerHTML = dataThird
}

var imgSlides = document.getElementsByClassName('imgss');
var indexImgs = 0;

showSlides(0)
function nextImgs() {
    indexImgs++;
    if(indexImgs>1){indexImgs=0}
  showSlides(indexImgs);
}
function prevImgs() {
    indexImgs--;
    if(indexImgs>0){indexImgs=1}
  showSlides(indexImgs);
}

function showSlides(n) {
  for (i = 0; i < imgSlides.length; i++) {
      imgSlides[i].style.display = "none";  
  }
  imgSlides[n].style.display = 'block'; 
}



setInterval(function (){
    nextImgs()
},3000)


var modalbox = document.getElementById('modalbox')
var bnt = document.getElementById('giohang');


function callGioHang(i){
    var muaHang = '';
    let item =  `<div id='modalbox'>
    <div id='modalboxback'>
        <button id='close1' onclick="closeModal()">&times</button>
        <h2>Giỏ hàng</h2>
        <div class="row">
            <div class="gioHangCot1">
                <p style="font-weight: bold;">Sản Phẩm</p>
                <p>${itemsFirst[i].title}</p>
            </div>
            <div class="gioHangCot2">
                <p style="font-weight: bold;">Số Lượng</p>
                <form><input id='amount${i}' type="number" name="quantity" min="1" max="10000" value="1"></form>
                <p id="laysoluong"></p>
            </div>
            <div class="gioHangCot3">
                <button type="submit" id="kiemTra" style= "font-weight: bold; height: 60px; background-color: red; color: white; " onclick="tinhTien(${i})">Kiểm Tra Tổng Tiền</button><br/><br/>
                <h3>Tổng Tiền</h3>
                <h3 id="tinhtien${i}">${itemsFirst[i].cost} VND</h3>
            </div>
            </div>
            <button type="submit" id="thanhtoan" style="margin-top: 140px;" onclick="thanhCong(${i})">Đặt Hàng</button>
        </div>
        </div>`
    
    muaHang += item;
    modalbox.innerHTML = muaHang; 
    modalbox.style.display = "block";
}

function tinhTien(i) {
    var tong_sanpham = document.getElementById(`amount${i}`).value;
    let item = `<span>${tong_sanpham*itemsFirst[i].cost} VND </span>`
    document.getElementById(`tinhtien${i}`).innerHTML = item;
}


function closeModal(){
    modalbox.style.display = "none";
}


var check_name1 = JSON.parse(sessionStorage.getItem('user_name123'));
document.getElementById('hello').innerHTML = `<span>Xin chào ${check_name1}</span>`;

function comPlete() {
    modalbox.style.display = "none";
}

function logOut(){
    sessionStorage.clear();
}

function xacNhan() {
    modalbox.style.display= "block";
    var gioHangFinal = JSON.parse(localStorage.getItem("gio_hang_tong"));
    console.log(gioHangFinal)
    var giaFinal = JSON.parse(localStorage.getItem('final_price'));
    var temp ='';
    for (let j = 0; j < gioHangFinal.length; j++) {
        var noiDung =  `<div> Tên sản phẩm : ${gioHangFinal[j].name}</div>
                        <div> Số lượng: ${gioHangFinal[j].soLuong} </div>
                        <div> Giá: ${gioHangFinal[j].price} VND</div><br/>`
        temp += noiDung;
    }   
    let item = `
    <div id='modalbox' style="height: 70%;">
    <div id=''
    <div><button id='close1' onclick="closeModal()">&times</button></div><br/>
    <div style="text-align: center; display: flex; align-items: center; justify-content: center;">
    <div><h3 style="font-size: 30px;">Xác Nhận Mua Hàng</h3></div>
    </div>
    <div><h3>Các sản phẩm bạn đặt hàng bao gồm:</h3></div>
    <div>${temp}</div>
    <div><h3>Tổng: ${giaFinal} VND</h3></div>
    <button id="xong" type="submit" style="color: white; background-color: black; height: 60px; width: 120px; margin-top: 70px;" onclick="comPlete()">Xác Nhận</button>
    </div>`
    modalbox.innerHTML = item;
}

var gioHangTong = [];
function thanhCong(i){
    var temp = 0;
    var tong_sanpham = document.getElementById(`amount${i}`).value;
    var tonghangHoa = {
        name: itemsFirst[i].title,
        price: itemsFirst[i]. cost * tong_sanpham,
        soLuong: tong_sanpham
    }
    gioHangTong.push(tonghangHoa);
    localStorage.setItem("gio_hang_tong", JSON.stringify(gioHangTong));

    var final_price;
    for (let j = 0; j < gioHangTong.length; j++) {
        final_price = gioHangTong[j].price;
        temp += final_price;
    }
    localStorage.setItem("final_price", JSON.stringify(temp));

    modalbox.style.display = "none";
    let item = `
    <div id='modalbox'>
    <div><button id='close1' onclick="closeModal()">&times</button></div><br/>
    <div style="text-align: center; display: flex; align-items: center; justify-content: center;">
    <div><h2 style="font-size: 30px;">Cảm ơn bạn đã đặt hàng!</h2></div>
    <div><h1 style="color: green; font-size: 60px;">&#9745</h1></div>
    </div>

    <div>
    <button id="xong" type="submit" style="float: right; margin-right: 5px; margin-top: 210px; color: white; background-color: black; height: 60px; width: 120px;" onclick="comPlete()">Hoàn Tất</button>
    </div>
    </div>`
    modalbox.innerHTML = item;
    modalbox.style.display = "block";
}

function gioiThieu() {
    modalbox.style.display = "block";
}
