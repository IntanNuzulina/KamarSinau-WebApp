let Modules = [
    {
        id: 'module-1',
        title: 'Matematika',
        body: 'Materi yang dipelajari adalah bilangan bulat, bilangan pecahan, operasi hitung bentuk aljabar, persamaan dan pertidaksamaan linear, perbandingan dan aritmetika sosial, himpunan, garis dan sudut, segitiga dan segiempat, faktorisasi aljabar, fungsi, persamaan garis lurus, sistem persamaan linear dua variabel, toerema phytagoras, lingkaran, bangun ruang, kesebangunan, statistika, peluang, bentuk akar, barisan dan deret bilangan.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-2',
        title: 'B.indonesia',
        body: 'Materi yang dipelajari adalah belajar mendeskripsikan, memahami dan mencipta cerita fantasi, mengapresiasi mengkreasi fabel, teks hasil observasi, puisi, teks prosedur, teks eksplanasi, iklan, teks berita, teks eksposisi, menyusun cerpen, pidato persuasif, surat pribadi dan dinas.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-3',
        title: 'Pendidikan Agama',
        body: 'Materi yang dipelajari adalah iman kepada Allah, Jujur, amanah, istiqamah, toharoh, shalat berjamaan, malaikat, hijrah ke madinah, khalifah, kitab Allah, rendah hati, hemat dan sederhana, nabi dan rasul, puasa, masa abasiyah, hari akhir, qurban, sejara islam, zakat, haji, tradisi islam di nusantara.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-4',
        title: 'B.Inggris',
        body: 'Materi yang dipelajari adalah greetings and leave takings, expressing, grammer, possessive, days and months, telling time, descriptive, article, simple present tense, adjective, verb, instruction, recount text, label, procedure text, narrative text, advertisement.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-5',
        title: 'PPKN',
        body: 'Materi yang dipelajari adalah perumusan dan penetapan pancasila, norma dan keadilan, perumusan UUD 1945, keberagaman, kerjasama, NKRI, Pancasila, peraturan perundang-undangan, semangat kebangkitan nasional, sumpah pemuda, pokok pikiran UUD 1945, hukum, berbudi pekerti luhur, keutuhan NKRI.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-6',
        title: 'IPA',
        body: 'Materi yang dipelajari adalah kalor dan perpindahanya, objek ipa dan pengamatannya, suhu dan perubahannya, gerak benda, makhluk hidup, sistem pencernaan manusia, sistem peredaran darah manusia, struktur tumbuhan, zat adiktif, listrik dinamis dan statis, pewarisan sifat, sistem perkembangbiasan tumbuhan dan hewan, sistem reproduksi manusia, pencemaran lingkugan, struktur bumi, .',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-7',
        title: 'IPS',
        body: 'Materi yang dipelajari adalah manusia, tempat dan lingkungan, interaksi sosial dan lembaga sosial, aktivitas memenuhi kebutuhan, masa praaksara, hindu-budha dan islam, interaksi keruangan negara ASEAN, interaksi sosial, indonesia masa penjajahan, perubahan sosial budaya dan globalisasi, masa reformasi.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-8',
        title: 'Seni Budaya',
        body: 'Materi yang dipelajari adalah menggambar flora, fauna, alam benda, ragam hias, model, ilustrasi, seni lukis, grafis dan patung, tekhnik vokal, musik ansambel, tari tradisional dan modern, teater, lagu daerah dan modern, pameran.',
        createdAt: 'Sabtu, 10 Desember 2022',
    },
    {
        id: 'module-9',
        title: 'PJOK',
        body: 'Materi yang dipelajari adalah sepak bola, bola voli, bola basket, bulu tangkis, tenis lapangan, tenis meja, softball.',
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