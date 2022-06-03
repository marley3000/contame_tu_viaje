import landscape01 from '../images/landscape01.jpg';
import landscape02 from '../images/landscape02.jpg';
import landscape03 from '../images/landscape03.jpg';


const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="relative w-2/6 pb-8 left-1/3 carousel slide" data-bs-ride="carousel">
            <div className="relative overflow-hidden border rounded-2xl carousel-inner">
                <div className="relative float-left w-full carousel-item active">
                    <img
                    src={landscape01}
                    className="block w-full h-full"
                    alt="Landscape"
                    />
                </div>
                <div className="relative float-left w-full carousel-item">
                    <img
                    src={landscape02}
                    className="block w-full"
                    alt="Landscape"
                    />
                </div>
                <div className="relative float-left w-full carousel-item">
                    <img
                    src={landscape03}
                    className="block w-full"
                    alt="Landscape"
                    />
                </div>
            </div>
        </div>
    )
}

export default Carousel