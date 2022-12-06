import React from 'react';
import CardCategory from './CardCategory';

function Category() {
    return (
        <div className="category-content mx-3">
            <div className="row mx-0 p-0">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="choice-category">
                            <h1>JENJANG PENDIDIKAN</h1>
                            <div className="list-category d-flex row justify-content-center align-items-center mb-3">
                                <CardCategory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;