import React, { useState, useEffect } from 'react'
import Header from '../../components/template/header'
import HomeContent from '../../components/template/HomeContent'
import Footer from '../../components/template/footer'
// import flipicon from '../../assets/img/flipicon.png'


const Home = () => {
    const [state, setstate] = useState({
        bannerAnim: true
    })
    let { bannerAnim } = state
    const fperspective = () => {
        setstate({ bannerAnim: !state.bannerAnim })
        if (state.bannerAnim == true) {
            document.body.classList.add('bannershow')
            document.body.classList.remove('bannerhide')
        }
        else {
            document.body.classList.remove('bannershow')
            setTimeout(document.body.classList.add('bannerhide'), 10000)
        }
    }
    useEffect(() => {
        fperspective()
    }, [])
    return (
        <>
            <div className={bannerAnim ? 'bannerAnim start' : 'bannerAnim end'}>
                <div className="banner-flip-inner">
                    <div id="pt" className="canvas">
                        <div id="particle-canvas"></div>
                        <div className="banner-caption">
                            <div class="flex">
                                <div class="text">
                                    Hello, I'm <span class="highlight" data-period="2000" data-rotate={["web development", "problem solving", "coding", "to learn new technology"]} >Aakash Deep</span>.
                                    <br />
                                    I'm a Software Engineer.
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resumewrapper">
                        <Header />
                        <HomeContent />
                        <Footer />
                    </div>

                </div>

            </div>
            <button className="flipbtn" onClick={fperspective}>
                <i class="fas fa-adjust"></i>
            </button>
        </>
    )
}

export default Home
