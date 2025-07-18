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
        exams: {
            midterm: {
                date: '2025-03-15',
                time: '09:00 - 12:00',
                room: 'CS-201'
            },
            final: {
                date: '2025-05-20',
                time: '13:00 - 16:00',
                room: 'CS-201'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-03-18',
                time: '14:00 - 17:00',
                room: 'CS-202'
            },
            final: {
                date: '2025-05-22',
                time: '09:00 - 12:00',
                room: 'CS-202'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-03-20',
                time: '10:00 - 13:00',
                room: 'CS-301'
            },
            final: {
                date: '2025-05-24',
                time: '14:00 - 17:00',
                room: 'CS-301'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-03-21',
                time: '13:00 - 16:00',
                room: 'CS-203'
            },
            final: {
                date: '2025-05-27',
                time: '09:00 - 12:00',
                room: 'CS-203'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-03-25',
                time: '08:00 - 11:00',
                room: 'CS-204'
            },
            final: {
                date: '2025-05-28',
                time: '13:00 - 16:00',
                room: 'CS-204'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-03-26',
                time: '15:00 - 18:00',
                room: 'CS-302'
            },
            final: {
                date: '2025-05-29',
                time: '10:00 - 13:00',
                room: 'CS-302'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-03-28',
                time: '16:00 - 19:00',
                room: 'CS-205'
            },
            final: {
                date: '2025-05-30',
                time: '08:00 - 11:00',
                room: 'CS-205'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-02',
                time: '14:00 - 17:00',
                room: 'CS-206'
            },
            final: {
                date: '2025-06-03',
                time: '13:00 - 16:00',
                room: 'CS-206'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-05',
                time: '13:00 - 16:00',
                room: 'CS-303'
            },
            final: {
                date: '2025-06-07',
                time: '09:00 - 12:00',
                room: 'CS-303'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-08',
                time: '09:00 - 12:00',
                room: 'CS-304'
            },
            final: {
                date: '2025-06-10',
                time: '14:00 - 17:00',
                room: 'CS-304'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-10',
                time: '11:00 - 14:00',
                room: 'CS-305'
            },
            final: {
                date: '2025-06-12',
                time: '08:00 - 11:00',
                room: 'CS-305'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-12',
                time: '09:00 - 12:00',
                room: 'CS-306'
            },
            final: {
                date: '2025-06-14',
                time: '15:00 - 18:00',
                room: 'CS-306'
            }
        },
        students: Array.from({ length: 17 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    },
    {
        code: 'CS113',
        name: 'คลาวด์ คอมพิวติ้ง',
        section: 1,
        time: [
            { day: 'Tuesday', start: '13:00', end: '16:00' }
        ],
        room: 'CS-307',
        instructor: 'ดร.คลาวด์ คอมพิวติ้ง',
        seats: { total: 25, available: 10 },
        credits: 3,
        exams: {
            midterm: {
                date: '2025-04-15',
                time: '13:00 - 16:00',
                room: 'CS-307'
            },
            final: {
                date: '2025-06-17',
                time: '10:00 - 13:00',
                room: 'CS-307'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-18',
                time: '09:00 - 12:00',
                room: 'CS-308'
            },
            final: {
                date: '2025-06-19',
                time: '14:00 - 17:00',
                room: 'CS-308'
            }
        },
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
        exams: {
            midterm: {
                date: '2025-04-22',
                time: '13:00 - 16:00',
                room: 'CS-309'
            },
            final: {
                date: '2025-06-21',
                time: '09:00 - 12:00',
                room: 'CS-309'
            }
        },
        students: Array.from({ length: 15 }, (_, i) => ({
            studentId: `6704101${String(i + 1).padStart(3, '0')}`,
            name: 'none none',
            grades: { semester1: '', semester2: '' }
        }))
    }
];

// Thai Religious Holidays for 2025
const thaiHolidays = [
    {
        date: '2025-01-01',
        name: 'วันขึ้นปีใหม่',
        type: 'national',
        description: 'วันหยุดราชการ'
    },
    {
        date: '2025-02-12',
        name: 'วันมาฆบูชา',
        type: 'buddhist',
        description: 'วันสำคัญทางพระพุทธศาสนา'
    },
    {
        date: '2025-04-06',
        name: 'วันจักรี',
        type: 'national',
        description: 'วันคล้ายวันสถาปนาราชวงศ์จักรี'
    },
    {
        date: '2025-04-13',
        name: 'วันสงกรานต์',
        type: 'traditional',
        description: 'วันปีใหม่ไทย'
    },
    {
        date: '2025-04-14',
        name: 'วันสงกรานต์',
        type: 'traditional',
        description: 'วันปีใหม่ไทย'
    },
    {
        date: '2025-04-15',
        name: 'วันสงกรานต์',
        type: 'traditional',
        description: 'วันปีใหม่ไทย'
    },
    {
        date: '2025-05-01',
        name: 'วันแรงงานแห่งชาติ',
        type: 'national',
        description: 'วันหยุดราชการ'
    },
    {
        date: '2025-05-05',
        name: 'วันฉัตรมงคล',
        type: 'royal',
        description: 'วันพระราชพิธีบรมราชาภิเษก'
    },
    {
        date: '2025-05-11',
        name: 'วันวิสาขบูชา',
        type: 'buddhist',
        description: 'วันสำคัญทางพระพุทธศาสนา'
    },
    {
        date: '2025-06-03',
        name: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสุทิดา',
        type: 'royal',
        description: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี'
    },
    {
        date: '2025-07-09',
        name: 'วันอาสาฬหบูชา',
        type: 'buddhist',
        description: 'วันสำคัญทางพระพุทธศาสนา'
    },
    {
        date: '2025-07-10',
        name: 'วันเข้าพรรษา',
        type: 'buddhist',
        description: 'วันเข้าพรรษา'
    },
    {
        date: '2025-07-28',
        name: 'วันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระเจ้าอยู่หัว',
        type: 'royal',
        description: 'วันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระปรเมนทรรามาธิบดีศรีสินทรมหาวชิราลงกรณ พระวชิรเกล้าเจ้าอยู่หัว'
    },
    {
        date: '2025-08-12',
        name: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสิริกิติ์',
        type: 'royal',
        description: 'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง และวันแม่แห่งชาติ'
    },
    {
        date: '2025-10-13',
        name: 'วันคล้ายวันสวรรคตพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช',
        type: 'royal',
        description: 'วันคล้ายวันสวรรคตพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช บรมนาถบพิตร'
    },
    {
        date: '2025-10-23',
        name: 'วันปิยมหาราช',
        type: 'royal',
        description: 'วันคล้ายวันสวรรคตพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว'
    },
    {
        date: '2025-12-05',
        name: 'วันคล้ายวันพระราชสมภพพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช',
        type: 'royal',
        description: 'วันคล้ายวันพระราชสมภพพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช บรมนาถบพิตร และวันชาติ และวันพ่อแห่งชาติ'
    },
    {
        date: '2025-12-10',
        name: 'วันรัฐธรรมนูญ',
        type: 'national',
        description: 'วันรัฐธรรมนูญ'
    },
    {
        date: '2025-12-31',
        name: 'วันสิ้นปี',
        type: 'national',
        description: 'วันหยุดราชการ'
    }
];