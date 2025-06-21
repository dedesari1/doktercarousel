document.getElementById("year").textContent = new Date().getFullYear();

function toogleOne() {
    var hideElement = document.querySelector('.hide');
    var button = document.getElementById('viewHide');
    
    // Cek jika elemen hideNew disembunyikan, tampilkan dan ubah teks tombol
    if (hideElement.style.display === 'none' || hideElement.style.display === '') {
        hideElement.style.display = 'inline';  // Menampilkan hideNew
    } else {
        hideElement.style.display = 'none';  // Menyembunyikan hideNew
        button.textContent = 'View More';  // Ubah teks tombol kembali
    }
}

// awal hide carousel
function hiDeDokterJs4(button) {
    var hiddenText2 = document.querySelector('.hideDokter4');
    if (hiddenText2.style.display === 'none' || hiddenText2.style.display === '') {
        hiddenText2.style.display = 'inline';
        button.textContent = 'View less';
    } else {
        hiddenText2.style.display = 'none';
        button.textContent = 'View more';
    }
}

function hiDeDokterJs1(button) {
    var hiddenText1 = document.querySelector('.hideDokter1');
    if (hiddenText1.style.display === 'none' || hiddenText1.style.display === '') {
        hiddenText1.style.display = 'inline';
        button.textContent = 'View less';
    } else {
        hiddenText1.style.display = 'none';
        button.textContent = 'View more';
    }
}

function hiDeDokterJs2(button) {
    var hiddenText2 = document.querySelector('.hideDokter2');
    if (hiddenText2.style.display === 'none' || hiddenText2.style.display === '') {
        hiddenText2.style.display = 'inline';
        button.textContent = 'View less';
    } else {
        hiddenText2.style.display = 'none';
        button.textContent = 'View more';
    }
}


function hiDeDokterJs0(button) {
    var hiddenText2 = document.querySelector('.dokJs');
    if (hiddenText2.style.display === 'none' || hiddenText2.style.display === '') {
        hiddenText2.style.display = 'inline';
        button.textContent = 'View less';
    } else {
        hiddenText2.style.display = 'none';
        button.textContent = 'View more';
    }
}
// akhir hide carousel