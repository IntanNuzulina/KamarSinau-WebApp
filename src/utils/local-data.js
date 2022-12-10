let Modules = [
    {
        id: 'module-1',
        title: 'Matematika',
        body: 'Matematika adalah bidang ilmu, yang mencakup studi tentang topik-topik seperti bilangan (aritmetika dan teori bilangan), rumus dan struktur terkait (aljabar), bangun dan ruang tempat mereka berada (geometri),dan besaran serta perubahannya (kalkulus dan analisis)',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-2',
        title: 'B.indonesia',
        body: 'Bahasa Indonesia merupakan salah satu mata pelajaran yang diajarkan mulai dari jenjang pendidikan dasar sampai pendidikan tinggi. Bahasa Indonesia merupakan salah satu ilmu yang mempunyai peranan penting dalam kehidupan manusia serta untuk menguasai ilmu dan teknologi.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-3',
        title: 'Pendidikan Agama',
        body: 'Pendidikan Agama Islam (PAI) yaitu usaha yang berupa pengajaran, bimbingan dan asuhan terhadap anak agar kelak selesai pendidikannya dapat memahami, menghayati, dan mengamalkan agama Islam, serta menjadikannya sebagai jalan kehidupan, baik pribadi maupun kehidupan masyarakat.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-4',
        title: 'B.Inggris',
        body: 'Bahasa Inggris merupakan salah satu mata pelajaran yang termasuk dalam mata pelajaran adaptif. Mata pelajaran Bahasa Inggris merupakan salah satu mata pelajaran yang diajarkan guna meningkatkan keterampilan anak didik untuk berbahasa. Inti dasar penguasaan bahasa adalah sebagai suatu alat untuk berkomunikasi.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-5',
        title: 'PPKN',
        body: 'Pendidikan Kewarganegaraan adalah suatu mata pelajaran yang merupakan satu rangkaian proses untuk mengarahkan peserta didik menjadi bertanggung jawab sehingga dapat berperan aktif dalam masyarakat sesuai ketentuan Pancasila dan UUD NKRI 1945',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-6',
        title: 'IPA',
        body: 'Pendidikan IPA adalah ilmu pengetahuan yang lahir dan berkembang dari observasi serta eksperimen, IPA mempunyai dua aspek penting, yaitu pengetahuan dan metode dalam memperoleh pengetahuan iti sendiri. Pengembangan konsep IPA dilakukan melalui pengamatan, percobaan atau eksperimen dan sikap ilmiah.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-7',
        title: 'IPS',
        body: 'Di sekolah, IPS merupakan mata pelajaran yang mempelajari kehidupan sosial yang didasarkan pada bahan kajian goegrafi, ekonomi, sejarah, antropologi, sosiologi dan tata negara dengan menampilkan permasalahan sehari-hari masyarakat.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-8',
        title: 'Sejarah',
        body: 'sejarah adalah pembelajaran peristiwa sejarah dan perkembangan masyarakat yang telah terjadi. Sementara itu, materi pokok pembelajaran adalah produk masa kini berdasarkan sumber-sumber sejarah yang ada..',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-9',
        title: 'Seni Budaya',
        body: 'Pendidikan seni budaya mampu memberikan rasa keindahan, ketenteraman, dan kedamaian bagi individu saat menjalani kehidupan sosial. Pentingnya siswa-siswi mempelajari pendidikan seni budaya juga karena mengandung pesan moral dan budi pekerti. Kata seni dan budaya memiliki makna sangat luas, oleh karena itu di Indonesia, perhatian pada seni dan budaya dijalankan pula secara khusus oleh Kementerian Pendidikan dan Kebudayaan (Kemdikbud) yang menangani segala urusan yang berkaitan dengan pendidikan dan budaya.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-10',
        title: 'PJOK',
        body: 'PJOK adalah Pendidikan Jasmani, Olahraga, dan Kesehatan yang hakikatnya adalah proses pendidikan yang memanfaatkan aktivitas fisik untuk mendapatkan perubahan. Sebagai salah satu mata pelajaran, PJOK menjadi media yang efektif untuk mendukung pertumbuhan, perkembangan psikis, keterampilan motorik, pengetahuan dan penalaran, serta pembiasaan pola hidup sehat yang berguna untuk mendukung perkembangan dan pertumbuhan kualitas fisik.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
];

function getAllModules() {
    return Modules;
}

function getModule(id) {
    const foundedModule = Modules.find((module) => module.id === id);
    return foundedModule;
}

function getActiveModules() {
    const activeModules = Modules.filter((module) => !module.archived);
    return activeModules;
}

function editModule({ id, title, body }) {
    const moduleToEdit = Modules.find((module) => module.id === id);
    moduleToEdit.title = title;
    moduleToEdit.body = body;

    Modules = Modules.map((module) => {
        if (module.id === id) {
            return module;
        }
        return module;
    });
}

export {
    getAllModules,
    getActiveModules,
    editModule,
    getModule,
};