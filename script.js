// Logika Pilih Nominal Card
function selectCard(element, title, price) {
    const cards = document.querySelectorAll('.nominal-card');
    cards.forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('summaryPrice').innerText = price;
    document.getElementById('summaryTitle').innerText = title;
}

// Logika Checkbox Ingat Saya
const checkbox = document.getElementById('rememberCheckbox');
const checkboxVisual = document.getElementById('checkboxVisual');

if(checkbox && checkboxVisual) {
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            checkboxVisual.style.backgroundColor = 'var(--color-yellow)';
            checkboxVisual.innerHTML = '<i class="ph-bold ph-check text-black text-[14px] font-bold"></i>';
            checkboxVisual.style.border = 'none';
        } else {
            checkboxVisual.style.backgroundColor = '#4417ac';
            checkboxVisual.innerHTML = '';
            checkboxVisual.style.border = '1px solid rgba(255,255,255,0.2)';
        }
    });
}

// Logika Floating Bottom Sheet Menu
const floatingBtn = document.querySelector('.floating-all-btn');
const floatingIcon = floatingBtn ? floatingBtn.querySelector('i') : null;
const bottomSheet = document.querySelector('.bottom-sheet-menu');
const sheetOverlay = document.querySelector('.sheet-overlay');

function toggleMenu() {
    if(!floatingBtn || !bottomSheet || !sheetOverlay) return;
    
    floatingBtn.classList.toggle('active');
    bottomSheet.classList.toggle('open');
    sheetOverlay.classList.toggle('active');
    
    if (floatingBtn.classList.contains('active')) {
        floatingIcon.classList.remove('ph-squares-four');
        floatingIcon.classList.add('ph-x-circle');
    } else {
        floatingIcon.classList.remove('ph-x-circle');
        floatingIcon.classList.add('ph-squares-four');
    }
}

if(floatingBtn) floatingBtn.addEventListener('click', toggleMenu);
if(sheetOverlay) sheetOverlay.addEventListener('click', toggleMenu);

// Logika Tab Deskripsi & Panduan
function toggleDescription() {
    const tabDeskripsi = document.getElementById('tab-deskripsi');
    const readMoreText = document.getElementById('readMoreText');
    if(!tabDeskripsi || !readMoreText) return;
    
    tabDeskripsi.classList.toggle('expanded');
    if (tabDeskripsi.classList.contains('expanded')) {
        readMoreText.innerText = 'Tutup deskripsi';
    } else {
        readMoreText.innerText = 'Baca selengkapnya';
    }
}

function toggleGuide() {
    const tabPanduan = document.getElementById('tab-panduan');
    const readMoreGuideText = document.getElementById('readMoreGuideText');
    if(!tabPanduan || !readMoreGuideText) return;
    
    tabPanduan.classList.toggle('expanded');
    if (tabPanduan.classList.contains('expanded')) {
        readMoreGuideText.innerText = 'Tutup panduan';
    } else {
        readMoreGuideText.innerText = 'Baca selengkapnya';
    }
}

function switchTab(tabId, element) {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
    });
    
    const selectedTab = document.getElementById('tab-' + tabId);
    if(selectedTab) {
        selectedTab.classList.add('active');
        selectedTab.classList.remove('hidden');
    }
}

// Logika Flash Sale Timer
function startFlashSaleTimer() {
    let hours = 2, minutes = 15, seconds = 45;
    const hourEl = document.getElementById('fs-hours');
    const minEl = document.getElementById('fs-mins');
    const secEl = document.getElementById('fs-secs');
    
    if(!hourEl || !minEl || !secEl) return;
    
    setInterval(() => {
        if (seconds > 0) { seconds--; } 
        else {
            seconds = 59;
            if (minutes > 0) { minutes--; } 
            else { minutes = 59; if (hours > 0) hours--; }
        }
        hourEl.innerText = hours.toString().padStart(2, '0');
        minEl.innerText = minutes.toString().padStart(2, '0');
        secEl.innerText = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Eksekusi pas DOM udah ready (Animasi Salju & Flash Sale Timer)
document.addEventListener('DOMContentLoaded', function() {
    startFlashSaleTimer();

    const snowContainers = document.querySelectorAll('.has-snow');
    snowContainers.forEach(container => {
        const snowWrapper = document.createElement('div');
        snowWrapper.classList.add('snow-wrapper');
        container.appendChild(snowWrapper);
        
        const snowCount = 25; 
        for (let i = 0; i < snowCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            const size = Math.random() * 3 + 2; 
            const left = Math.random() * 100; 
            const duration = Math.random() * 2.5 + 2; 
            const delay = Math.random() * 5; 
            
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.left = `${left}%`;
            snowflake.style.animationDuration = `${duration}s`;
            snowflake.style.animationDelay = `${delay}s`;
            
            snowWrapper.appendChild(snowflake);
        }
    });
});
