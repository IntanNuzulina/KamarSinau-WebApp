import React from 'react';
import image1 from '../assets/images/SD.png';
import image2 from '../assets/images/SMP.png';
import image3 from '../assets/images/SMA.png';
import image4 from '../assets/images/Pengguruan Tinggi.png';

function CardCategory() {
    return (
        <>
            <div className="col-12 col-md-3 col-lg-3">
                <div className="category-card mb-3">
                    <div className="category-img">
                        <img className="d-block w-100" src={image1} alt="gambar kategori SD" />
                    </div>
                    <span className="category-name">SD</span>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
                <div className="category-card mb-3">
                    <div className="category-img">
                        <img className="d-block w-100" src={image2} alt="gambar kategori SMP" />
                    </div>
                    <span className="category-name">SMP</span>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
                <div className="category-card mb-3">
                    <div className="category-img">
                        <img className="d-block w-100" src={image3} alt="gambar kategori SMA" />
                    </div>
                    <span className="category-name">SMA</span>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
                <div className="category-card mb-3">
                    <div className="category-img">
                        <img className="d-block w-100" src={image4} alt="gambar kategori Penggruan Tinggi" />
                    </div>
                    <span className="category-name">Pengguruan Tinggi</span>
                </div>
            </div>
        </>
    );
}

export default CardCategory;