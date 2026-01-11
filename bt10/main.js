animals = [
    { ten: "Sói", anh: "image/wolf/wolfbgr.jfif", thuvien: ["image/wolf/wolf_1.PNG", "image/wolf/wolf_2.PNG", "image/wolf/wolf_3.PNG",
        "image/wolf/wolf_4.PNG", "image/wolf/wolf_5.PNG", "image/wolf/wolf_6.PNG", "image/wolf/wolf_7.PNG","image/wolf/wolf_8.PNG"
    ] },
    { ten: "Cáo", anh: "image/Fox/foxbgr.PNG", thuvien: ["image/Fox/fox_1.PNG", "image/Fox/fox_2.PNG", "image/Fox/fox_3.PNG",
        "image/Fox/fox_4.PNG", "image/Fox/fox_5PNG.PNG", "image/Fox/fox_6PNG.PNG", "image/Fox/fox_7PNG.PNG","image/Fox/fox_8.PNG"
    ] },
    { ten: "Chó", anh: "image/dog/dogbgr.PNG", thuvien: ["image/dog/dog_1.PNG", "image/dog/dog_2.PNG", "image/dog/dog_3.PNG",
        "image/dog/dog_4.PNG", "image/dog/dog_5.PNG", "image/dog/dog_6.PNG", "image/dog/dog_7.PNG","image/dog/dog_8.PNG"
    ] },
    { ten: "Dê", anh: "image/goat/goatbgr.PNG", thuvien: ["image/goat/goat_1.PNG", "image/goat/goat_2.PNG", "image/goat/goat_3.PNG",
        "image/goat/goat_4.PNG", "image/goat/goat_5.PNG", "image/goat/goat_6.PNG", "image/goat/goat_7.PNG","image/goat/goat_8.PNG"
    ] },
    { ten: "Rồng", anh: "image/dragon/dragonbgr.PNG", thuvien: ["image/dragon/dragon_1.PNG", "image/dragon/dragon_2.PNG", "image/dragon/dragon_3.PNG",
        "image/dragon/dragon_4.PNG", "image/dragon/dragon_5.PNG", "image/dragon/dragon_6.PNG", "image/dragon/dragon_7.PNG","image/dragon/dragon_8.PNG"
    ] }
];

const danhSachDiv = document.getElementById('danhsach');
const thuVienDiv = document.getElementById('thuvienanh');
//Đoàn Trọng Nghĩa-24NT01030//
function hienThiDanhSach() {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        
        card.onclick = () => hienThiThuVien(animal.thuvien);
        
        danhSachDiv.appendChild(card);
    });
}
function hienThiThuVien(danhSachAnh) {
    thuVienDiv.innerHTML = "";
    
    danhSachAnh.forEach(duongDan => {
        const img = document.createElement('img');
        img.src = duongDan;
        img.className = 'gallery-item';
        thuVienDiv.appendChild(img);
    });
}

hienThiDanhSach();