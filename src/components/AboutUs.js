import React from 'react';
import admin1 from '../assets/images/Admin 1.png';
import admin2 from '../assets/images/Admin 2.png';
import admin3 from '../assets/images/Admin 3.png';
import admin4 from '../assets/images/Admin 4.png';

function AboutUs() {
    return (
        <div className="about">
            <div className="about-list m-3 ms-4 me-4">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center bg-dark">
                        <div className="about-content col-12">
                            <h4>KamarSinau</h4>
                            <p>Kamar<span className="sinau">Sinau</span> merupakan inovasi dalam dunia pendidikan yang sangat berkontribusi tinggi dalam hal proses pembelajaran. KamarSinau merupakan website yang dapat membantu para pelajar dalam mempelajari dan memahami materi yang sedang di pelajari dengan lebih mudah.</p>
                        </div>
                        <div className="about-content col-md-12">
                            <h4>Tujuan Dari KamarSinau</h4>
                            <p> Tujuan dari website ini adalah dapat memberikan peningkatan pengetahuan bagi pelajar. Dan Menyediakan berbagai materi yang dapat diakses tanpa batas usia dengan harapan memberikan kelancaran dan kemudahan bagi para pengguna.</p>
                        </div>
                        <div className="about-content col-12">
                            <h4>Manfaat dari Aplikasi ini:</h4>
                            <p>Di Zaman yang serba canggih ini, tak hanya berbelanja saja yang mudah, namun dalam hal mencari dan menambah ilmu pun sekarang sangat mudah. Terkadang-kadang  tak jarang orang-orang sulit menemukan media pembelajaran yang baik, maka dari itu kami membuat sebuah website yang dapat digunakan untuk mempermudah memahami materi yang dapat meningkatkan ilmu pengetahuan. Tak hanya itu, manfaat lainnya adalah : Terdapat beberapa layanan yang kami sediakan untuk anda agar mendapatkan pengalaman yang baik selama menggunakan website ini.</p>
                        </div>
                        <div className="category-content">
                            <div className="row mx-0 p-0">
                                <div className="container-fluid">
                                    <div className="col-12 bg-dark">
                                        <div className="choice-about">
                                            <h4>Admin</h4>
                                            <div className="list-category d-flex row justify-content-center align-items-center mb-3">
                                                <div className="col-12 col-md-3 col-lg-3">
                                                    <div className="category-card mb-3">
                                                        <div className="admin">
                                                            <img className="d-block w-100" src={admin1} alt="Foto Admin 1" />
                                                        </div>
                                                        <span className="about-content p">Intan Nuzulina</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3 col-lg-3">
                                                    <div className="category-card mb-3">
                                                        <div className="admin">
                                                            <img className="d-block w-100" src={admin2} alt="Foto Admin 2" />
                                                        </div>
                                                        <span className="about-content p">Elsa Syakira</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3 col-lg-3">
                                                    <div className="category-card mb-3">
                                                        <div className="admin">
                                                            <img className="d-block w-100" src={admin3} alt="Foto Admin 3" />
                                                        </div>
                                                        <span className="about-content p">Agil Salahudin</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3 col-lg-3">
                                                    <div className="category-card mb-3">
                                                        <div className="admin">
                                                            <img className="d-block w-100" src={admin4} alt="Foto Admin 4" />
                                                        </div>
                                                        <span className="about-content p">Ridho Akbar Nuryadin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;