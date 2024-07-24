import React, { useEffect, useState } from 'react'
import { ScrollToTopButtonStyled } from './ScrollToTopButton.style';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTopButton() {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300){
          setVisible(true);
        } else {
          setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if(!visible) return null;
    return (
        <ScrollToTopButtonStyled onClick={scrollToTop}>
            <ArrowUpwardIcon className='scroll-button-icon'/>
        </ScrollToTopButtonStyled>
    )
}

export default ScrollToTopButton