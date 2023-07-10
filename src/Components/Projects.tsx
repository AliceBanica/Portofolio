import React, { useState, useEffect } from 'react';
import "./Projects.css";

import spotifyImg1 from "../Images/spotify-1.png";
import spotifyImg2 from "../Images/spotify-2.png";
import spotifyImg3 from "../Images/spotify-3.png";

import shelter1 from "../Images/shelter-1.png";
import shelter2 from "../Images/shelter-2.png";
import shelter3 from "../Images/shelter-3.png";
import shelter4 from "../Images/shelter-4.png";
import shelter5 from "../Images/shelter-5.png";
import shelter6 from "../Images/shelter-6.png";

import detailing1 from "../Images/detailing-1.png";
import detailing2 from "../Images/detailing-2.png";
import detailing3 from "../Images/detailing-3.png";
import detailing4 from "../Images/detailing-4.png";
import detailing5 from "../Images/detailing-5.png";
import detailing6 from "../Images/detailing-6.png";

import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentImages, setCurrentImages] = useState<any>([]);
    const [currentDesc, setCurrentDesc] = useState<any>([]);
    const sliderRef = React.useRef<Slider | null>(null);

    const CustomPrevArrow = (props: any) => {
        const { onClick } = props;
        return <div className="custom-prev-arrow" onClick={onClick} />;
    };

    const CustomNextArrow = (props: any) => {
        const { onClick } = props;
        return <div className="custom-next-arrow" onClick={onClick} />;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };



    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);

    const spotifyProjectDesc = ["Spotify App", "React App created with Vite, based on Spotify API that allows users to search for their favourite artist and get basic information like Top Tracks (a preview of each track is available) and albums.", "https://github.com/AliceBanica/artists-explorer"];
    const dogShelterProjectDesc = ["Dogs Shelter App", "A fullstack project created with ReactJS and NodeJS that allows users to execute CRUD operations to get a list of dogs, to adopt or to bring a dog to the shelter.", "https://github.com/AliceBanica/Dog-Shelter"];
    const detailingProjectDesc = ["Car Detailing App", "ReactJS App created with Vite, which is used for providing detailing auto services.", "https://github.com/AliceBanica/Car-Detailing"]

    const spotifyProjectImgs = [spotifyImg1, spotifyImg2, spotifyImg3];
    const dogShelterImgs = [shelter1, shelter2, shelter3, shelter4, shelter5, shelter6];
    const detailingProjectImgs = [detailing1, detailing2, detailing3, detailing4, detailing5, detailing6];

    return (
        <section className='projects-section' id='projects'>
            <div className='projects-full-container'>
                <p className='projects-title'>Projects</p>
                <div className='projects-preview-container'>
                    <div className='project-container' onClick={() => { setIsModalOpen(true); setCurrentImages(spotifyProjectImgs); setCurrentDesc(spotifyProjectDesc) }}>
                        <div className='folder-preview'>
                            <div className='preview-photos'>
                                <img className="preview-photo photo-1" src={spotifyImg2} alt="" />
                                <img className="preview-photo photo-2" src={spotifyImg1} alt="" />
                                <img className="preview-photo photo-3" src={spotifyImg3} alt="" />
                            </div>
                            <div className='folder-display'>
                                <div className='folder-back'>
                                    <div className='folder-back-up'></div>
                                    <div className='folder-back-down'></div>
                                </div>
                                <div className='folder-contain'></div>
                                <div className='folder-front'></div>
                            </div>
                        </div>
                        <p className='project-title'>Spotify App</p>
                    </div>
                    <div className='project-container' onClick={() => { setIsModalOpen(true); setCurrentImages(dogShelterImgs); setCurrentDesc(dogShelterProjectDesc) }}>
                        <div className='folder-preview'>
                            <div className='preview-photos'>
                                <img className="preview-photo photo-1" src={shelter4} alt="" />
                                <img className="preview-photo photo-2" src={shelter1} alt="" />
                                <img className="preview-photo photo-3" src={shelter6} alt="" />
                            </div>
                            <div className='folder-display'>
                                <div className='folder-back'>
                                    <div className='folder-back-up'></div>
                                    <div className='folder-back-down'></div>
                                </div>
                                <div className='folder-contain'></div>
                                <div className='folder-front'></div>
                            </div>
                        </div>
                        <p className='project-title'>Dogs Shelter App</p>
                    </div>
                    <div className='project-container project-number-3' onClick={() => { setIsModalOpen(true); setCurrentImages(detailingProjectImgs); setCurrentDesc(detailingProjectDesc) }}>
                        <div className='folder-preview'>
                            <div className='preview-photos'>
                                <img className="preview-photo photo-1" src={detailing3} alt="" />
                                <img className="preview-photo photo-2" src={detailing1} alt="" />
                                <img className="preview-photo photo-3" src={detailing6} alt="" />
                            </div>
                            <div className='folder-display'>
                                <div className='folder-back'>
                                    <div className='folder-back-up'></div>
                                    <div className='folder-back-down'></div>
                                </div>
                                <div className='folder-contain'></div>
                                <div className='folder-front'></div>
                            </div>
                        </div>
                        <p className='project-title'>Car Detailing App</p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Slider Modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={700}
                className="modal-style"
            >
                <div className='modal-container'>
                    <Slider {...settings} ref={sliderRef} className='slider-style'>
                        {currentImages.map((img: any, index: number) => {
                            return <div className="slider-img-div" key={index}>
                                <img className='slider-img' style={{ objectFit: "cover" }} src={img} alt="slide" />
                            </div>
                        })}
                    </Slider>
                    <div className='project-desc-container'>
                        <h1>{currentDesc[0]}</h1>
                        <p>{currentDesc[1]}</p>
                        <p>Project can be found <a href={currentDesc[2]}>here.</a></p>
                    </div>
                    <div className='close-modal-button-container'>
                        <button className='close-modal-button boxShadow' onClick={() => setIsModalOpen(false)} data-animation="fadeOut" data-remove="3000"></button>
                    </div>

                </div>
            </Modal>

        </section>
    )


}

export default Projects
