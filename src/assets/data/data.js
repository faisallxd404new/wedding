export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Syahril Imanuel',
            child: 'Putra ke 1',
            father: 'Fahri',
            mother: 'Mika',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Servira Aurora',
            child: 'Putri ke 2',
            father: 'Fachri',
            mother: 'Adeliaa',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'November',
            date: '21',
            day: 'Jumat',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'November',
            date: '21',
            day: 'Jumat',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl. Raya Tugu Proklamasi, R.Dengklok Sel., Kec. R.Dengklok, Karawang, Jawa Barat 41352'
    },

    link: {
        calendar: 'https://calendar.app.google/3doSVrzidQc4SfdP8',
        map: 'https://maps.app.goo.gl/K6KYYMRs8j14VXoS9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Syahrill',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
