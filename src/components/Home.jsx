import '../css/home.css';
import htmlImage from '../assets/img/html.svg';
import cssImage from '../assets/img/css.svg';
import railsImage from '../assets/img/rails.svg';
import reactImage from '../assets/img/react.svg';
import jsImage from '../assets/img/js.png';

function Home(){
    return (
        <>
            <div className="container-fluid w-75 home-container">
                <div className="row d-flex flex-row flex-wrap">
                    <div className='main-content-container w-75'>
                        <h1 className="home-heading">Abhishek Dave,</h1>
                        <p className="home-para">Code whisperer by day, problem-solver by night — I craft web experiences that don’t just work, they wow. From building smooth backends to creating intuitive front-ends, I love turning complex ideas into simple, elegant solutions. Whether it’s optimizing performance or making user flows effortless, I thrive on solving puzzles that make technology feel like magic.</p>
                        <div className="social-media-handles row">
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="">
                                <i className="fa-solid fa-at"></i>
                            </a>
                            <a href="">
                                <i className="fa-solid fa-file"></i>
                            </a>
                        </div>
                    </div>
                    <div className="side-content-container w-25">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={htmlImage} className="d-block carousel-image" alt="..." />
                                    <p>HTML</p>
                                </div>
                                <div className="carousel-item">
                                    <img src={cssImage} className="d-block carousel-image" alt="..." />
                                    <p>CSS</p>
                                </div>
                                <div className="carousel-item">
                                    <img src={reactImage} className="d-block carousel-image" alt="..." />
                                    <p>React</p>
                                </div>
                                <div className="carousel-item">
                                    <img src={railsImage} className="d-block carousel-image" alt="..." />
                                    <p>Rails</p>
                                </div>
                                <div className="carousel-item">
                                    <img src={jsImage} className="d-block carousel-image" alt="..." />
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;