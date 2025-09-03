export const sectionDataNotaris = {
    title: "Apa Itu Notaris?",
    description: "Notaris adalah pejabat umum yang berwenang untuk membuat akta otentik dan memiliki kewenangan lainnya sebagaimana dimaksud dalam Undang-Undang tentang Jabatan Notaris.",
    sections: [
        {
            title: "Wewenang Notaris",
            icon: "fa-scale-balanced",
            items: [
                "Membuat akta otentik mengenai semua perbuatan, perjanjian, dan penetapan yang diharuskan oleh peraturan perundang-undangan",
                "Mengesahkan tanda tangan dan menetapkan kepastian tanggal surat di bawah tangan dengan mendaftar dalam buku khusus",
                "Menyimpan akta sebagai bagian dari minuta akta",
                "Memberikan salinan dan kutipan akta sesuai dengan peraturan perundang-undangan"
            ],
            iconColor: "text-green-500"
        },
        {
            title: "Tugas dan Fungsi Notaris",
            icon: "fa-tasks",
            items: [
                "Melakukan pengesahan dan legalisasi dokumen",
                "Memberikan nasihat hukum terkait pembuatan akta",
                "Menjaga kerahasiaan isi akta dan dokumen klien",
                "Memastikan kepastian hukum bagi para pihak yang berkepentingan",
                "Membuat akta yang memenuhi syarat formil dan materil"
            ],
            iconColor: "text-blue-500"
        }
    ],
    authority: {
        title: "Kewenangan Notaris",
        icon: "fa-gavel",
        categories: [
            {
                title: "Kewenangan Umum:",
                items: [
                    "Membuat akta autentik (akta notaris) yang berkaitan dengan perbuatan hukum tertentu",
                    "Membuat akta yang berkaitan dengan tanah (bersama PPAT)",
                    "Membuat akta yang berkaitan dengan wasiat"
                ],
                icon: "fa-circle",
                iconColor: "text-blue-500"
            },
            {
                title: "Kewenangan Khusus:",
                items: [
                    "Membuat akta pendirian perseroan terbatas (PT)",
                    "Membuat akta perubahan anggaran dasar perusahaan",
                    "Membuat akta pengambilalihan saham dan merger"
                ],
                icon: "fa-circle",
                iconColor: "text-green-500"
            }
        ]
    }
};

export const sectionDataPPAT = {
    title: "Apa Itu PPAT?",
    description: "PPAT (Pejabat Pembuat Akta Tanah) adalah pejabat umum yang diberi kewenangan untuk membuat akta-akta autentik mengenai perbuatan hukum tertentu mengenai hak atas tanah atau Hak Milik Atas Satuan Rumah Susun.",
    sections: [
        {
            title: "Pejabat Pembuat Akta Tanah (PPAT)",
            icon: "fa-landmark",
            description: "PPAT adalah pejabat umum yang memiliki kewenangan khusus dalam pembuatan akta-akta terkait peralihan hak atas tanah dan pendaftarannya.",
            items: [
                "Diangkat dan diberhentikan oleh Badan Pertanahan Nasional (BPN)",
                "Bekerja di wilayah tertentu yang telah ditetapkan",
                "Bertanggung jawab kepada Kepala Kantor Pertanahan setempat",
                "Dapat merangkap sebagai Notaris jika memenuhi syarat"
            ],
            iconColor: "text-green-500"
        },
        {
            title: "Tugas Pokok PPAT",
            icon: "fa-list-check",
            items: [
                "Membuat akta-akta sebagai bukti telah dilakukannya perbuatan hukum tertentu mengenai hak atas tanah atau Hak Milik Atas Satuan Rumah Susun",
                "Mendaftarkan akta yang dibuatnya ke Kantor Pertanahan setempat untuk didaftar dalam buku tanah dan diterbitkan sertifikatnya",
                "Memberikan pelayanan konsultasi hukum terkait peralihan hak atas tanah",
                "Menjaga kerahasiaan dokumen dan data para pihak"
            ],
            iconColor: "text-blue-500"
        }
    ],
    authority: {
        title: "Kewenangan PPAT",
        icon: "fa-user-tie",
        categories: [
            {
                title: "Dalam Pembuatan Akta:",
                items: [
                    "Akta Jual Beli tanah dan bangunan",
                    "Akta Hibah tanah dan bangunan",
                    "Akta Pembagian Hak Bersama (APHBS)",
                    "Akta Pemberian Hak Tanggungan"
                ],
                icon: "fa-circle",
                iconColor: "text-blue-500",
                smallIcon: true
            },
            {
                title: "Dalam Pendaftaran:",
                items: [
                    "Mendaftarkan peralihan hak ke Kantor Pertanahan",
                    "Melaporkan pembuatan akta ke Kantor Pertanahan",
                    "Memverifikasi kelengkapan dokumen pendukung",
                    "Memberikan informasi proses pendaftaran ke BPN"
                ],
                icon: "fa-circle",
                iconColor: "text-green-500",
                smallIcon: true
            }
        ]
    }
};

export const servicesData = {
    title: "Layanan Profesional",
    description: "Berbagai layanan notaris dan PPAT yang saya sediakan untuk memenuhi kebutuhan hukum Anda.",
    services: [
        {
            title: "Layanan Notaris",
            icon: "fa-file-contract",
            color: "blue",
            description: "Pembuatan berbagai jenis akta otentik sesuai kebutuhan hukum Anda dengan proses yang jelas dan transparan.",
            items: [
                "Akta Pendirian Perusahaan",
                "Akta Perubahan Anggaran Dasar",
                "Akta Pernyataan Waris",
                "Akta Kuasa",
                "Legalisasi Dokumen"
            ],
            animationDelay: "100"
        },
        {
            title: "Layanan PPAT",
            icon: "fa-landmark",
            color: "green",
            description: "Pelayanan pembuatan akta terkait peralihan hak atas tanah dan bangunan serta pendaftarannya ke BPN.",
            items: [
                "Akta Jual Beli Tanah/Bangunan",
                "Akta Hibah Tanah/Bangunan",
                "Akta Pembagian Hak Bersama",
                "Akta Pemberian Hak Tanggungan",
                "Pendaftaran ke Kantor Pertanahan"
            ],
            animationDelay: "200"
        },
        {
            title: "Konsultasi Hukum",
            icon: "fa-balance-scale",
            color: "blue",
            description: "Layanan konsultasi hukum untuk membantu Anda memahami aspek legal dari berbagai transaksi dan perjanjian.",
            items: [
                "Review Kontrak dan Perjanjian",
                "Pendirian dan Perubahan Perusahaan",
                "Sengketa Properti dan Tanah",
                "Hukum Waris dan Keluarga",
                "Hukum Perbankan dan Jaminan"
            ],
            animationDelay: "300"
        }
    ]
};

export const aboutData = {
    header: {
        title: "Profil Lengkap",
        description: "Profil profesional dan pengalaman kerja sebagai Notaris dan PPAT."
    },
    profile: {
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto,w_800/v1756899416/IMG_20250903_183535_wqydjs.jpg",
        altText: "Photo Profile",
        title: "Tentang Saya",
        description: "Saya adalah seorang Notaris dan PPAT yang telah berpengalaman lebih dari 2 tahun dalam memberikan pelayanan hukum kepada masyarakat. Dengan latar belakang pendidikan hukum yang kuat dan berbagai sertifikasi profesional, saya berkomitmen untuk memberikan pelayanan terbaik dengan integritas tinggi."
    },
    skills: [
        {
            icon: "fa-file-contract",
            color: "blue",
            title: "Pembuatan Akta Otentik",
            description: "Akta jual beli, hibah, perjanjian, pendirian perusahaan, dan lainnya"
        },
        {
            icon: "fa-landmark",
            color: "green",
            title: "Pelayanan PPAT",
            description: "Pendaftaran tanah, balik nama, pembebanan hak tanggungan"
        },
        {
            icon: "fa-handshake",
            color: "purple",
            title: "Konsultasi Hukum",
            description: "Konsultasi masalah hukum perdata dan bisnis"
        },
        {
            icon: "fa-scale-balanced",
            color: "yellow",
            title: "Legal Drafting",
            description: "Penyusunan kontrak dan perjanjian hukum"
        }
    ],
    experience: {
        title: "Pengalaman Kerja",
        items: [
            {
                role: "Kepala Desa",
                details: "Kepala Desa Wangandawa (2007 - 2023)"
            },
            {
                role: "Notaris & PPAT",
                details: "Notaris & PPAT Wilayah Kerja Kabupaten Tegal"
            }
        ]
    }
};

export const educationData = {
    header: {
        title: "Riwayat Pendidikan",
        description: "Pendidikan formal yang telah ditempuh."
    },
    formalEducation: {
        title: "Pendidikan Formal",
        items: [
            {
                degree: "Sarjana Ilmu Pemerintahan (S.IP)",
                institution: "2012",
            },
            {
                degree: "Sarjana Hukum (S1)",
                institution: "2014",
            },
            {
                degree: "Magister Kenotariatan (M.Kn.)",
                institution: "2017",
            },
        ]
    },
};

export const sectionDataVision = {
    title: "Visi & Misi",
    description: "Prinsip dan komitmen dalam memberikan pelayanan notaris dan PPAT.",
    vision: {
        title: "Visi",
        icon: "fas fa-eye",
        content: "Menjadi kantor notaris dan PPAT terdepan yang memberikan pelayanan hukum profesional dengan integritas tinggi, berorientasi pada kepuasan klien, dan berkontribusi pada pembangunan hukum nasional.",
        quote: "\"Pelayanan hukum yang profesional adalah hak setiap warga negara, dan kami hadir untuk mewujudkannya.\"",
        color: "blue"
    },
    mission: {
        title: "Misi",
        icon: "fas fa-bullseye",
        items: [
            "Memberikan pelayanan notaris dan PPAT yang cepat, akurat, dan sesuai dengan ketentuan hukum yang berlaku.",
            "Menjunjung tinggi etika profesi dan integritas dalam setiap pelayanan.",
            "Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan dan profesionalisme.",
            "Berkontribusi aktif dalam pengembangan ilmu kenotariatan melalui penelitian dan pendidikan.",
            "Meningkatkan kesadaran hukum masyarakat melalui program edukasi dan sosialisasi."
        ],
        color: "green"
    }
};

export const galleryItems = [
    {
        id: 1,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto,w_800/v1756898375/WhatsApp_Image_2025-09-03_at_5.32.10_PM_1_vvbka1.jpg",
        title: "Tampak Depan Kantor",
        description: "Fasad bangunan yang mudah dikenali dan strategis."
    },
    {
        id: 2,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto,w_800/v1756898290/WhatsApp_Image_2025-09-03_at_5.32.10_PM_ijxe3j.jpg",
        title: "Papan Nama Kantor",
        description: "Informasi lengkap mengenai Alamat Kantor dan Kontak"
    },
    {
        id: 4,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto,w_800/v1756898454/WhatsApp_Image_2025-09-03_at_5.32.09_PM_yyg09o.jpg",
        title: "Ruang Kerja Notaris",
        description: "Area kerja resmi yang tertata rapi dan profesional."
    },
    {
        id: 5,
        imageUrl: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto,w_800/v1756898406/WhatsApp_Image_2025-09-03_at_5.32.10_PM_2_vojzkz.jpg",
        title: "Tampak Samping Kantor",
        description: "Tampak samping kantor dengan desain modern dan ornamen dekoratif."
    }
];