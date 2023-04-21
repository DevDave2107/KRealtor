import './welcome.css';
const Welcome = () => {

    return (
        <div className='section__padding welcome'>
            <div className="welcome__title">
                <h1 className='welcome__title-name'>KRISTINA RENZ</h1>
                <h2 className='welcome__title-subtitle'>REALTOR</h2>
            </div>
            <span className='welcome__section'></span>
            <div className="welcome__links">
                <a href="#about"><li>About</li></a>
                <a href="#listings"><li>Listings</li></a>
                <a href="#faq"><li>FAQ</li></a>
                <a href="#contact"><li>Contact</li></a>
                <a href="#blog"><li>Blog</li></a>
            </div>
            <div className="welcome__image">
                <div className="welcome__image-banner">
                    <p className='welcome__image-banner-title'>REAL ESTATE PROFESSIONAL IN</p>
                    <p className='welcome__image-banner-body'>MANITOBA</p>
                    <p className='welcome__image-banner-subtitle'>Find Your Dream Home</p>
                </div>
            </div>
        </div>
    )

}

export default Welcome