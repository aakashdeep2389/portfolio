import React from 'react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <footer >
                <i class="fas fa-angle-double-up" onClick={scrollToTop}></i>

                <div class="icon-wrap ">
                    <a href="https://www.linkedin.com/in/aakash-deep-786346152/" target="_blank">
                        <div class="icon" id="icon-2">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/akash.d2389" target="_blank">
                        <div class="icon" id="icon-3">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/aakash.d2389/" target="_blank">
                        <div class="icon" id="icon-4">
                            <i class="fab fa-instagram"></i>
                        </div>
                    </a>
                    {/* <a href="http://codepen.io/matthewwilliams/">
                        <div class="flex icon" id="icon-5">
                            <i class="mdi mdi-codepen"></i>
                        </div>
                    </a> */}
                </div>
                <div class="info-box">
                    <div class="footnote">
                        Aakash Deep
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
