// ==========================================
// We Are Safe Zone - Core JavaScript (v4)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('พรรค We Are Safe Zone: เว็บไซต์พร้อมใช้งาน');

    // 1. เอฟเฟกต์พิมพ์ข้อความสโลแกนทีละตัว (Typewriter Effect)
    const sloganElement = document.querySelector('main p.text-xl');
    if (sloganElement) {
        const sloganText = '“ เซฟทุกเสียง เคียงข้างทุกคน ”';
        sloganElement.textContent = ''; // ล้างข้อความเดิมออกก่อน
        
        let index = 0;
        function typeWriter() {
            if (index < sloganText.length) {
                sloganElement.textContent += sloganText.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // ความเร็วในการพิมพ์ (มิลลิวินาที)
            }
        }
        // เริ่มทำงานหลังจากหน้าเว็บโหลดเสร็จ 500ms
        setTimeout(typeWriter, 500);
    }

    // 2. เอฟเฟกต์การตรวจจับการกดปุ่ม (Button Click Feedback)
    const actionButtons = document.querySelectorAll('main a');
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // สามารถเพิ่มการทำดาวน์โหลดข้อมูล หรือตัวอนิเมชั่นเปลี่ยนหน้า (Page Transition) ตรงนี้ได้
            console.log(`กำลังนำทางไปที่: ${button.getAttribute('href')}`);
        });
    });

    // 3. (แถม) ตัวอย่างฟังก์ชันสำหรับเปิด-ปิดเมนูบนมือถือในอนาคต
    // หากวันไหนคุณเพิ่มปุ่ม Hamburger Menu บนมือถือ สามารถมาเปิดโค้ดส่วนนี้ใช้ได้เลย
    /*
    const menuButton = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
    }
    */
});