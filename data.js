// Course data for the student registration system
const courseData = [
    {
        code: 'CS101',
        name: 'วิทยาการคอมพิวเตอร์เบื้องต้น',
        section: 1,
        time: [
            { day: 'Monday', start: '09:00', end: '12:00' },
            { day: 'Thursday', start: '13:00', end: '15:00' }
        ],
        room: 'CS-201',
        instructor: 'ดร.สมชาย ใจดี',
        seats: { total: 40, available: 15 },
        credits: 3,
        students: Array.from({ length: 25 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS102',
        name: 'การเขียนโปรแกรมคอมพิวเตอร์',
        section: 1,
        time: [
            { day: 'Tuesday', start: '09:00', end: '12:00' },
            { day: 'Friday', start: '13:00', end: '15:00' }
        ],
        room: 'CS-202',
        instructor: 'ผศ.ดร.วิชัย เรียนเก่ง',
        seats: { total: 35, available: 10 },
        credits: 3,
        students: Array.from({ length: 25 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS103',
        name: 'การพัฒนาเว็บ',
        section: 1,
        time: [
            { day: 'Wednesday', start: '09:00', end: '12:00' }
        ],
        room: 'CS-301',
        instructor: 'อ.สุดา เว็บเก่ง',
        seats: { total: 30, available: 5 },
        credits: 3,
        students: Array.from({ length: 25 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS104',
        name: 'โครงสร้างข้อมูลและอัลกอริทึม',
        section: 1,
        time: [
            { day: 'Monday', start: '13:00', end: '16:00' },
            { day: 'Thursday', start: '09:00', end: '11:00' }
        ],
        room: 'CS-203',
        instructor: 'รศ.ดร.ปัญญา คิดเร็ว',
        seats: { total: 35, available: 12 },
        credits: 3,
        students: Array.from({ length: 23 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS105',
        name: 'ระบบฐานข้อมูล',
        section: 1,
        time: [
            { day: 'Tuesday', start: '13:00', end: '16:00' },
            { day: 'Friday', start: '09:00', end: '11:00' }
        ],
        room: 'CS-204',
        instructor: 'ดร.ฐานข้อมูล จัดเก็บดี',
        seats: { total: 30, available: 8 },
        credits: 3,
        students: Array.from({ length: 22 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS106',
        name: 'วิศวกรรมซอฟต์แวร์',
        section: 1,
        time: [
            { day: 'Wednesday', start: '13:00', end: '16:00' }
        ],
        room: 'CS-302',
        instructor: 'ผศ.ดร.พัฒนา ซอฟต์แวร์',
        seats: { total: 30, available: 7 },
        credits: 3,
        students: Array.from({ length: 23 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS107',
        name: 'ระบบปฏิบัติการ',
        section: 1,
        time: [
            { day: 'Monday', start: '16:00', end: '18:00' },
            { day: 'Wednesday', start: '16:00', end: '18:00' }
        ],
        room: 'CS-205',
        instructor: 'อ.ระบบ ปฏิบัติการ',
        seats: { total: 35, available: 15 },
        credits: 3,
        students: Array.from({ length: 20 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS108',
        name: 'เครือข่ายคอมพิวเตอร์',
        section: 1,
        time: [
            { day: 'Tuesday', start: '16:00', end: '18:00' },
            { day: 'Thursday', start: '16:00', end: '18:00' }
        ],
        room: 'CS-206',
        instructor: 'อ.เครือข่าย คอมพิวเตอร์',
        seats: { total: 30, available: 10 },
        credits: 3,
        students: Array.from({ length: 20 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS109',
        name: 'ปัญญาประดิษฐ์',
        section: 1,
        time: [
            { day: 'Friday', start: '13:00', end: '17:00' }
        ],
        room: 'CS-303',
        instructor: 'รศ.ดร.ปัญญา ประดิษฐ์',
        seats: { total: 25, available: 3 },
        credits: 3,
        students: Array.from({ length: 22 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS110',
        name: 'ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์',
        section: 1,
        time: [
            { day: 'Thursday', start: '09:00', end: '12:00' }
        ],
        room: 'CS-304',
        instructor: 'อ.ปฏิสัมพันธ์ มนุษย์คอม',
        seats: { total: 30, available: 12 },
        credits: 3,
        students: Array.from({ length: 18 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS111',
        name: 'พัฒนาแอปพลิเคชันมือถือ',
        section: 1,
        time: [
            { day: 'Wednesday', start: '09:00', end: '12:00' }
        ],
        room: 'CS-305',
        instructor: 'ผศ.แอพ มือถือ',
        seats: { total: 25, available: 5 },
        credits: 3,
        students: Array.from({ length: 20 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS112',
        name: 'พื้นฐานความปลอดภัยไซเบอร์',
        section: 1,
        time: [
            { day: 'Friday', start: '09:00', end: '12:00' }
        ],
        room: 'CS-306',
        instructor: 'อ.ความปลอดภัย ไซเบอร์',
        seats: { total: 25, available: 8 },
        credits: 3,
        students: Array.from({ length: 17 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS113',
        name: 'คลาวด์คอมพิวติ้ง',
        section: 1,
        time: [
            { day: 'Tuesday', start: '13:00', end: '16:00' }
        ],
        room: 'CS-307',
        instructor: 'ดร.คลาวด์ คอมพิวติ้ง',
        seats: { total: 25, available: 10 },
        credits: 3,
        students: Array.from({ length: 15 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS114',
        name: 'กราฟิกคอมพิวเตอร์',
        section: 1,
        time: [
            { day: 'Monday', start: '09:00', end: '12:00' }
        ],
        room: 'CS-308',
        instructor: 'ผศ.ดร.กราฟิก คอมพิวเตอร์',
        seats: { total: 25, available: 7 },
        credits: 3,
        students: Array.from({ length: 18 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS115',
        name: 'โครงงานคอมพิวเตอร์ขั้นสุดท้าย',
        section: 1,
        time: [
            { day: 'Thursday', start: '13:00', end: '16:00' }
        ],
        room: 'CS-309',
        instructor: 'รศ.ดร.โครงงาน วิจัย',
        seats: { total: 20, available: 5 },
        credits: 3,
        students: Array.from({ length: 15 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    }
];