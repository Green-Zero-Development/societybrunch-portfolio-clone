'use client';

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CateringCta from "../components/CateringCta.js";
import InstagramSection from "../components/InstagramSection.js";

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

export default function Menus({ pageData }) {

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


    const cateringCTA = pageData.global_sections[0];
    const instagramSection = pageData.global_sections[1];
    
    const heroImg = pageData.acf.hero_image.url;
    const appMenu = pageData.acf.app_menu.url;
    const appMenuDisplayImg = pageData.acf.app_menu_display_image;
    const cocktailsMenuDisplayImg = pageData.acf.cocktails_menu_display_image;
    const cocktailMenu = pageData.acf.cocktails_menu.url;
    const brunchMenuDisplayImg = pageData.acf.brunch_menu_display_image;
    const brunchMenu = pageData.acf.brunch_menu.url;
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <div className="relative max-w-10xl mx-auto py-3 z-20 hero-single-pic-section">
          <img src={heroImg} className="w-full" />
        </div>

        <div className="relative max-w-10xl mx-auto pt-12 lg:pt-20 px-4 lg:px-8 menus-display-section">
        <motion.svg className="lg:hidden absolute top-0 left-0 -mt-24 -ml-40 z-10" style={{ y: parallaxStar }} width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M405 196.379L220.638 200.112L399.626 155.924L396.491 144.206L219.369 195.484L380.891 106.512L374.845 95.9878L216.98 191.379L349.99 63.5938L341.406 55.0101L213.621 187.945L309.012 30.1548L298.488 24.1089L209.516 185.557L260.794 8.43439L249.001 5.29948L204.889 184.362L208.546 0H196.379L200.112 184.362L155.924 5.29948L144.206 8.43439L195.484 185.557L106.512 24.1089L95.9878 30.1548L191.379 187.945L63.5938 55.0101L55.0101 63.5938L187.945 191.379L30.1548 95.9878L24.1089 106.512L185.557 195.484L8.50903 144.206L5.29948 155.924L184.362 200.112L0 196.379V208.546L184.362 204.889L5.29948 249.001L8.50903 260.794L185.557 209.516L24.1089 298.488L30.1548 309.012L187.945 213.621L55.0101 341.406L63.5938 349.99L191.379 216.98L95.9878 374.845L106.512 380.891L195.484 219.369L144.206 396.491L155.924 399.626L200.112 220.638L196.379 405H208.546L204.889 220.638L249.001 399.626L260.794 396.491L209.516 219.369L298.488 380.891L309.012 374.845L213.621 216.98L341.406 349.99L349.99 341.406L216.98 213.621L374.845 309.012L380.891 298.488L219.369 209.516L396.491 260.794L399.626 249.001L220.638 204.889L405 208.546V196.379Z" fill="#FFE4DA"/>
        </motion.svg>
        <div className="md:hidden relative max-w-md mt-16 mb-6 mx-auto py-2 text-center z-20">
              <h2 className="w-full text-5xl sm:text-6xl leading-none pb-6 lg:pb-3">{pageData.acf.hero_mobile_quote.quote}</h2>
              <p className="max-w-xs text-lg leading-tight mx-auto md:ml-0 pb-12 lg:pb-6">{pageData.acf.hero_mobile_quote.name}</p>
        </div>
          <motion.svg className="hidden lg:block absolute top-0 left-0 -ml-40 z-10" style={{ y: parallaxStar }} width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M405 196.379L220.638 200.112L399.626 155.924L396.491 144.206L219.369 195.484L380.891 106.512L374.845 95.9878L216.98 191.379L349.99 63.5938L341.406 55.0101L213.621 187.945L309.012 30.1548L298.488 24.1089L209.516 185.557L260.794 8.43439L249.001 5.29948L204.889 184.362L208.546 0H196.379L200.112 184.362L155.924 5.29948L144.206 8.43439L195.484 185.557L106.512 24.1089L95.9878 30.1548L191.379 187.945L63.5938 55.0101L55.0101 63.5938L187.945 191.379L30.1548 95.9878L24.1089 106.512L185.557 195.484L8.50903 144.206L5.29948 155.924L184.362 200.112L0 196.379V208.546L184.362 204.889L5.29948 249.001L8.50903 260.794L185.557 209.516L24.1089 298.488L30.1548 309.012L187.945 213.621L55.0101 341.406L63.5938 349.99L191.379 216.98L95.9878 374.845L106.512 380.891L195.484 219.369L144.206 396.491L155.924 399.626L200.112 220.638L196.379 405H208.546L204.889 220.638L249.001 399.626L260.794 396.491L209.516 219.369L298.488 380.891L309.012 374.845L213.621 216.98L341.406 349.99L349.99 341.406L216.98 213.621L374.845 309.012L380.891 298.488L219.369 209.516L396.491 260.794L399.626 249.001L220.638 204.889L405 208.546V196.379Z" fill="#FFE4DA"/>
          </motion.svg>
          <motion.svg className="hidden lg:block absolute top-0 right-0 -mt-6 lg:mr-40 z-10" style={{ y: parallaxStar }} width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M405 196.379L220.638 200.112L399.626 155.924L396.491 144.206L219.369 195.484L380.891 106.512L374.845 95.9878L216.98 191.379L349.99 63.5938L341.406 55.0101L213.621 187.945L309.012 30.1548L298.488 24.1089L209.516 185.557L260.794 8.43439L249.001 5.29948L204.889 184.362L208.546 0H196.379L200.112 184.362L155.924 5.29948L144.206 8.43439L195.484 185.557L106.512 24.1089L95.9878 30.1548L191.379 187.945L63.5938 55.0101L55.0101 63.5938L187.945 191.379L30.1548 95.9878L24.1089 106.512L185.557 195.484L8.50903 144.206L5.29948 155.924L184.362 200.112L0 196.379V208.546L184.362 204.889L5.29948 249.001L8.50903 260.794L185.557 209.516L24.1089 298.488L30.1548 309.012L187.945 213.621L55.0101 341.406L63.5938 349.99L191.379 216.98L95.9878 374.845L106.512 380.891L195.484 219.369L144.206 396.491L155.924 399.626L200.112 220.638L196.379 405H208.546L204.889 220.638L249.001 399.626L260.794 396.491L209.516 219.369L298.488 380.891L309.012 374.845L213.621 216.98L341.406 349.99L349.99 341.406L216.98 213.621L374.845 309.012L380.891 298.488L219.369 209.516L396.491 260.794L399.626 249.001L220.638 204.889L405 208.546V196.379Z" fill="#FFE4DA"/>
          </motion.svg>
          <motion.svg className="hidden lg:block absolute bottom-0 right-0 -mt-12 -mr-40 z-10" style={{ y: parallaxStar }} width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M405 196.379L220.638 200.112L399.626 155.924L396.491 144.206L219.369 195.484L380.891 106.512L374.845 95.9878L216.98 191.379L349.99 63.5938L341.406 55.0101L213.621 187.945L309.012 30.1548L298.488 24.1089L209.516 185.557L260.794 8.43439L249.001 5.29948L204.889 184.362L208.546 0H196.379L200.112 184.362L155.924 5.29948L144.206 8.43439L195.484 185.557L106.512 24.1089L95.9878 30.1548L191.379 187.945L63.5938 55.0101L55.0101 63.5938L187.945 191.379L30.1548 95.9878L24.1089 106.512L185.557 195.484L8.50903 144.206L5.29948 155.924L184.362 200.112L0 196.379V208.546L184.362 204.889L5.29948 249.001L8.50903 260.794L185.557 209.516L24.1089 298.488L30.1548 309.012L187.945 213.621L55.0101 341.406L63.5938 349.99L191.379 216.98L95.9878 374.845L106.512 380.891L195.484 219.369L144.206 396.491L155.924 399.626L200.112 220.638L196.379 405H208.546L204.889 220.638L249.001 399.626L260.794 396.491L209.516 219.369L298.488 380.891L309.012 374.845L213.621 216.98L341.406 349.99L349.99 341.406L216.98 213.621L374.845 309.012L380.891 298.488L219.369 209.516L396.491 260.794L399.626 249.001L220.638 204.889L405 208.546V196.379Z" fill="#FFE4DA"/>
          </motion.svg>
          <div className="relative grid grid-cols-1 md:grid-cols-3 items-start lg:pl-8 z-20">
              <motion.a
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }} href={appMenu} target="_blank" className="relative mx-auto pb-12 md:pb-0 z-30">
                <img src={appMenuDisplayImg} className="menu-display-img" />
              </motion.a>
            <motion.a
            whileHover={{
              scale: 1.05,
              zIndex: 999,
              transition: { duration: 0.5 },
            }} href={cocktailMenu} target="_blank" className="relative mx-auto pb-12 md:pb-0 z-20 md:-ml-10">
              <img src={cocktailsMenuDisplayImg} className="menu-display-img" />
            </motion.a>
            <motion.a
            whileHover={{
              scale: 1.05,
              zIndex: 999,
              transition: { duration: 0.5 },
            }} href={brunchMenu} target="_blank" className="relative mx-auto z-10 md:-ml-20">
              <img src={brunchMenuDisplayImg} className="menu-display-img" />
            </motion.a>
          </div>
        </div>

        <div className="relative max-w-10xl mb-10 mx-auto pt-32 pb-12 gallery-img-section">
        <motion.svg className="hidden lg:block absolute top-0 left-0 -mt-40 -ml-80 z-10" style={{ y: parallaxStar }} width="996" height="996" viewBox="0 0 996 996" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M996 482.948L542.605 492.126L982.784 383.458L975.074 354.639L539.485 480.745L936.71 261.941L921.842 236.059L533.611 470.649L860.716 156.394L839.606 135.284L525.351 462.206L759.941 74.1585L734.059 59.2901L515.255 456.332L641.361 20.7424L612.358 13.0328L503.874 453.395L512.868 0H482.948L492.126 453.395L383.458 13.0328L354.639 20.7424L480.745 456.332L261.941 59.2901L236.059 74.1585L470.649 462.206L156.394 135.284L135.284 156.394L462.206 470.649L74.1585 236.059L59.2901 261.941L456.332 480.745L20.9259 354.639L13.0328 383.458L453.395 492.126L0 482.948V512.868L453.395 503.874L13.0328 612.358L20.9259 641.361L456.332 515.255L59.2901 734.059L74.1585 759.941L462.206 525.351L135.284 839.606L156.394 860.716L470.649 533.611L236.059 921.842L261.941 936.71L480.745 539.485L354.639 975.074L383.458 982.784L492.126 542.605L482.948 996H512.868L503.874 542.605L612.358 982.784L641.361 975.074L515.255 539.485L734.059 936.71L759.941 921.842L525.351 533.611L839.606 860.716L860.716 839.606L533.611 525.351L921.842 759.941L936.71 734.059L539.485 515.255L975.074 641.361L982.784 612.358L542.605 503.874L996 512.868V482.948Z" fill="#FFE4DA"/>
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
        {/* <CateringCta cateringCTA={cateringCTA} /> */}
        <InstagramSection instagramSection={instagramSection} />
        </>
    )
}