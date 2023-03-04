'use client';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink);
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink);
      default:
        return ('/');
    }
  }

export default function Catering({ pageData }) {
  const { scrollY } = useScroll();
  const rotateStar = useTransform(
      scrollY,
      [0, 2000],
      [0, 90],
      { clamp: false }
  );

  const parallaxStar = useTransform(
    scrollY,
    [0, 2000],
    [0, -250],
    { clamp: false }
  );

    const heroImg = pageData.acf.hero_image.url;
    const hostingSectionImg = pageData.acf.hosting_section.image.url;
    const hostingSectionButtonLink = getButtonLink(pageData.acf.hosting_section.button.link_to_where, pageData.acf.hosting_section.button.onsite_link, pageData.acf.hosting_section.button.offsite_link, pageData.acf.hosting_section.button.file_link);
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <div className="relative max-w-10xl mx-auto py-3 z-20 hero-single-pic-section">
          <img src={heroImg} className="w-full" />
        </div>

        <div id="hosting-cta-section" className="relative pt-12 lg:pt-24 hosting-cta-section">
            <motion.svg className="lg:hidden absolute top-0 left-0 -mt-24 -ml-40 z-10" style={{ y: parallaxStar }} width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M405 196.379L220.638 200.112L399.626 155.924L396.491 144.206L219.369 195.484L380.891 106.512L374.845 95.9878L216.98 191.379L349.99 63.5938L341.406 55.0101L213.621 187.945L309.012 30.1548L298.488 24.1089L209.516 185.557L260.794 8.43439L249.001 5.29948L204.889 184.362L208.546 0H196.379L200.112 184.362L155.924 5.29948L144.206 8.43439L195.484 185.557L106.512 24.1089L95.9878 30.1548L191.379 187.945L63.5938 55.0101L55.0101 63.5938L187.945 191.379L30.1548 95.9878L24.1089 106.512L185.557 195.484L8.50903 144.206L5.29948 155.924L184.362 200.112L0 196.379V208.546L184.362 204.889L5.29948 249.001L8.50903 260.794L185.557 209.516L24.1089 298.488L30.1548 309.012L187.945 213.621L55.0101 341.406L63.5938 349.99L191.379 216.98L95.9878 374.845L106.512 380.891L195.484 219.369L144.206 396.491L155.924 399.626L200.112 220.638L196.379 405H208.546L204.889 220.638L249.001 399.626L260.794 396.491L209.516 219.369L298.488 380.891L309.012 374.845L213.621 216.98L341.406 349.99L349.99 341.406L216.98 213.621L374.845 309.012L380.891 298.488L219.369 209.516L396.491 260.794L399.626 249.001L220.638 204.889L405 208.546V196.379Z" fill="#FFE4DA"/>
            </motion.svg>
            <div className="relative lg:pb-32">
            <div className="relative md:grid grid-cols-12 items-start max-w-8xl mx-auto overflow-hidden z-30">
                    <div className="col-span-6 mt-16 lg:mt-32 mb-6 md:ml-6 xl:ml-32 2xl:ml-56 py-2 px-6 lg:pr-0 md:pl-10 text-center md:text-left catering-cta-content-section">
                        <h2 className="w-full text-5xl sm:text-6xl leading-none pb-6 lg:pb-3">{pageData.acf.hosting_section.title}</h2>
                        <p className="max-w-xs text-lg leading-tight mx-auto md:ml-0 pb-12 lg:pb-6">{pageData.acf.hosting_section.paragraph}</p>
                        <a href={hostingSectionButtonLink}>
                            <div className="mx-auto lg:ml-0 button">
                                {pageData.acf.hosting_section.button.text}
                            </div>
                        </a>
                    </div>
                    <div className="relative col-span-6 catering-section-circle">
                        <Image className="relative !left-20 -mt-16 z-20" src={hostingSectionImg} alt="image of meal at Tandoor" layout="fill" objectFit="contain" objectPosition="left" />
                        <motion.svg className="relative z-10" style={{ rotate: rotateStar }} width="660" height="660" viewBox="0 0 660 660" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M602 291.902L327.96 297.45L594.012 231.769L589.352 214.35L326.074 290.571L566.164 158.322L557.177 142.678L322.524 284.469L520.232 94.5271L507.473 81.7682L317.531 279.365L459.322 44.8227L443.678 35.836L311.429 275.815L387.65 12.537L370.12 7.87726L304.55 274.04L309.987 0H291.902L297.45 274.04L231.769 7.87726L214.35 12.537L290.571 275.815L158.322 35.836L142.678 44.8227L284.469 279.365L94.5271 81.7682L81.7682 94.5271L279.365 284.469L44.8227 142.678L35.836 158.322L275.815 290.571L12.648 214.35L7.87726 231.769L274.04 297.45L0 291.902V309.987L274.04 304.55L7.87726 370.12L12.648 387.65L275.815 311.429L35.836 443.678L44.8227 459.322L279.365 317.531L81.7682 507.473L94.5271 520.232L284.469 322.524L142.678 557.177L158.322 566.164L290.571 326.074L214.35 589.352L231.769 594.012L297.45 327.96L291.902 602H309.987L304.55 327.96L370.12 594.012L387.65 589.352L311.429 326.074L443.678 566.164L459.322 557.177L317.531 322.524L507.473 520.232L520.232 507.473L322.524 317.531L557.177 459.322L566.164 443.678L326.074 311.429L589.352 387.65L594.012 370.12L327.96 304.55L602 309.987V291.902Z" fill="#FFE7C0"/>
                        </motion.svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative max-w-10xl mb-10 mx-auto pb-32 gallery-img-section">
        <motion.svg className="hidden lg:block absolute top-0 left-0 -mt-40 -ml-24 z-10" style={{ rotate: rotateStar }} width="602" height="602" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M602 291.902L327.96 297.45L594.012 231.769L589.352 214.35L326.074 290.571L566.164 158.322L557.177 142.678L322.524 284.469L520.232 94.5271L507.473 81.7682L317.531 279.365L459.322 44.8227L443.678 35.836L311.429 275.815L387.65 12.537L370.12 7.87726L304.55 274.04L309.987 0H291.902L297.45 274.04L231.769 7.87726L214.35 12.537L290.571 275.815L158.322 35.836L142.678 44.8227L284.469 279.365L94.5271 81.7682L81.7682 94.5271L279.365 284.469L44.8227 142.678L35.836 158.322L275.815 290.571L12.648 214.35L7.87726 231.769L274.04 297.45L0 291.902V309.987L274.04 304.55L7.87726 370.12L12.648 387.65L275.815 311.429L35.836 443.678L44.8227 459.322L279.365 317.531L81.7682 507.473L94.5271 520.232L284.469 322.524L142.678 557.177L158.322 566.164L290.571 326.074L214.35 589.352L231.769 594.012L297.45 327.96L291.902 602H309.987L304.55 327.96L370.12 594.012L387.65 589.352L311.429 326.074L443.678 566.164L459.322 557.177L317.531 322.524L507.473 520.232L520.232 507.473L322.524 317.531L557.177 459.322L566.164 443.678L326.074 311.429L589.352 387.65L594.012 370.12L327.96 304.55L602 309.987V291.902Z" fill="#FFE4DA"/>
        </motion.svg>
        <Splide aria-label="" className="z-20 gallery-img-section"
            options={ {
                type   : 'slide',
                perPage: 5,
                height: '440px',
                gap: '1rem',
                pagination: false,
                keyboard: 'global',
                drag: true,
                wheel: true,
                releaseWheel: true,
                waitForTransition: true,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                  768: {
                    perPage: 2,
                  },
                  992: {
                    perPage: 3,
                  },
                  1200: {
                    perPage: 4,
                  },
                  1439: {
                    perPage: 5,
                  },
                }
              } 
            }
              
            >
              {pageData.acf.gallery.map((item, index) => {
                return (
                  <SplideSlide key={index}>
                    <img src={item.url} className="relative z-20 gallery-img" />
                  </SplideSlide>
                );
              })}
        </Splide>
        </div>
        </>
    )
}