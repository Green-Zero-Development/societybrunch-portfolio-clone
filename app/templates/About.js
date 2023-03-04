'use client';

import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SectionSep from "../components/SectionSep.js";
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

export default function About({ pageData }) {
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

  const instagramSection = pageData.global_sections[1];

    const heroImg = pageData.acf.hero_image.url;
    const comeVisitSectionImg = pageData.acf.come_visit_section.image.url;
    const comeVisitSectionButtonLink = getButtonLink(pageData.acf.come_visit_section.button.link_to_where, pageData.acf.come_visit_section.button.onsite_link, pageData.acf.come_visit_section.button.offsite_link, pageData.acf.come_visit_section.button.file_link);
    const instagram = pageData.site_data[0].acf.value_list[3].value;
    const facebook = pageData.site_data[0].acf.value_list[2].value;
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <div className="relative max-w-10xl mx-auto py-3 z-20 hero-single-pic-section">
          <img src={heroImg} className="w-full" />
        </div>

        <div id="about-cta-section" className="relative pt-8 pb-24 md:pb-0 about-cta-section">
            <motion.svg className="lg:hidden absolute top-0 left-0 -mt-24 -ml-40 z-10" style={{ y: parallaxStar }} width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M405 196.379L220.638 200.112L399.626 155.924L396.491 144.206L219.369 195.484L380.891 106.512L374.845 95.9878L216.98 191.379L349.99 63.5938L341.406 55.0101L213.621 187.945L309.012 30.1548L298.488 24.1089L209.516 185.557L260.794 8.43439L249.001 5.29948L204.889 184.362L208.546 0H196.379L200.112 184.362L155.924 5.29948L144.206 8.43439L195.484 185.557L106.512 24.1089L95.9878 30.1548L191.379 187.945L63.5938 55.0101L55.0101 63.5938L187.945 191.379L30.1548 95.9878L24.1089 106.512L185.557 195.484L8.50903 144.206L5.29948 155.924L184.362 200.112L0 196.379V208.546L184.362 204.889L5.29948 249.001L8.50903 260.794L185.557 209.516L24.1089 298.488L30.1548 309.012L187.945 213.621L55.0101 341.406L63.5938 349.99L191.379 216.98L95.9878 374.845L106.512 380.891L195.484 219.369L144.206 396.491L155.924 399.626L200.112 220.638L196.379 405H208.546L204.889 220.638L249.001 399.626L260.794 396.491L209.516 219.369L298.488 380.891L309.012 374.845L213.621 216.98L341.406 349.99L349.99 341.406L216.98 213.621L374.845 309.012L380.891 298.488L219.369 209.516L396.491 260.794L399.626 249.001L220.638 204.889L405 208.546V196.379Z" fill="#FFE4DA"/>
            </motion.svg>
            <div className="relative lg:pb-32">
            <div className="relative md:grid grid-cols-12 items-start max-w-8xl mx-auto overflow-hidden z-30">
                    <div className="col-span-6 lg:col-span-5 mt-16 lg:mt-24 mb-6 2xl:ml-20 py-2 px-6 lg:pr-0 md:pl-10 text-center md:text-left">
                        <h2 className="w-full text-5xl sm:text-6xl leading-none pb-6 lg:pb-3">{pageData.acf.come_visit_section.title}</h2>
                        <p className="max-w-xs text-lg leading-tight mx-auto md:ml-0 pb-12 lg:pb-6">{pageData.acf.come_visit_section.paragraph}</p>
                        <a href={comeVisitSectionButtonLink}>
                            <div className="mx-auto md:ml-0 button">
                                {pageData.acf.come_visit_section.button.text}
                            </div>
                        </a>
                    </div>
                    <div className="hidden md:block relative col-span-6 lg:col-span-7 py-80">
                        <Image className="relative z-20" src={comeVisitSectionImg} alt="image of meal at Tandoor" layout="fill" objectFit="contain" objectPosition="left" />
                    </div>
                </div>
            </div>
        </div>

        <div className="relative max-w-10xl mb-10 mx-auto pb-20 gallery-img-section">
        <motion.svg className="hidden lg:block absolute top-0 left-0 -mt-64 -ml-80 z-10" style={{ y: parallaxStar }} width="996" height="996" viewBox="0 0 996 996" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M996 482.948L542.605 492.126L982.784 383.458L975.074 354.639L539.485 480.745L936.71 261.941L921.842 236.059L533.611 470.649L860.716 156.394L839.606 135.284L525.351 462.206L759.941 74.1585L734.059 59.2901L515.255 456.332L641.361 20.7424L612.358 13.0328L503.874 453.395L512.868 0H482.948L492.126 453.395L383.458 13.0328L354.639 20.7424L480.745 456.332L261.941 59.2901L236.059 74.1585L470.649 462.206L156.394 135.284L135.284 156.394L462.206 470.649L74.1585 236.059L59.2901 261.941L456.332 480.745L20.9259 354.639L13.0328 383.458L453.395 492.126L0 482.948V512.868L453.395 503.874L13.0328 612.358L20.9259 641.361L456.332 515.255L59.2901 734.059L74.1585 759.941L462.206 525.351L135.284 839.606L156.394 860.716L470.649 533.611L236.059 921.842L261.941 936.71L480.745 539.485L354.639 975.074L383.458 982.784L492.126 542.605L482.948 996H512.868L503.874 542.605L612.358 982.784L641.361 975.074L515.255 539.485L734.059 936.71L759.941 921.842L525.351 533.611L839.606 860.716L860.716 839.606L533.611 525.351L921.842 759.941L936.71 734.059L539.485 515.255L975.074 641.361L982.784 612.358L542.605 503.874L996 512.868V482.948Z" fill="#FFE4DA"/>
        </motion.svg>
        <Splide aria-label="" className="z-20"
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

        <div className="relative max-w-7xl mx-auto z-20">
          <div className="absolute top-0 left-0 right-0 mx-2 lg:mx-12 overflow-hidden">
            <SectionSep />
          </div>
          <div className="md:grid grid-cols-2 justify-between max-w-2xl mx-auto py-24 px-4 sm:px-6 text-center md:text-left">
            <div className="flex flex-wrap md:pr-24">
              {pageData.site_data[5].acf.value_list.map((item, index) => {
                  return (
                    <div className="w-full">
                    {item.days}: {item.open} - {item.close}
                    </div>
                  );
              })}
            </div>
            <div className="">
              {pageData.site_data[2].acf.value_list[0].street}
              <br />
              {pageData.site_data[2].acf.value_list[0].city}, {pageData.site_data[2].acf.value_list[0].state}
              <br /><br />
              <a href={`tel:${pageData.site_data[3].acf.value_list[0].value}`}>
                Call: {pageData.site_data[3].acf.value_list[0].value}
              </a>
              <br />
              <a href={`mailto:${pageData.site_data[1].acf.value_list[0].value}`}>
                Email: {pageData.site_data[1].acf.value_list[0].value}
              </a>
              <br />
              <br />
              <div className="flex items-center max-w-sm mx-auto md:ml-0 pt-6 md:pt-0">
                    <a href={instagram} target="_blank" className="w-6 md:w-4 mx-auto md:ml-0 md:mr-5">
                        <svg fill="#2A2A2E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href={facebook} target="_blank" className="w-6 md:w-4 mx-auto md:ml-0">
                        <svg className="" ill="#2A2A2E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                    </a>
              </div>
            </div>
          </div>
        </div>
        <InstagramSection instagramSection={instagramSection} />
        </>
    )
}