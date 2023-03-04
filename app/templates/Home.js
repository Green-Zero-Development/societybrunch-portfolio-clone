'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";
import SectionSep from "../components/SectionSep.js";
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

export default function Home({ pageData }) {
    
    const cateringCTA = pageData.global_sections[0];
    const instagramSection = pageData.global_sections[1];

    const homeHeroImg = pageData.acf.hero_section.image.url;
    const homeMenuImg = pageData.acf.menu_section.image.url;
    const homeMenuButtonLink = getButtonLink(pageData.acf.menu_section.button.link_to_where, pageData.acf.menu_section.button.onsite_link, pageData.acf.menu_section.button.offsite_link, pageData.acf.menu_section.button.file_link);
    const comeVisitImgLeft = pageData.acf.come_visit_section.left_image.url;
    const comeVisitImgRight = pageData.acf.come_visit_section.right_image.url;
    const comeVisitButtonLink = getButtonLink(pageData.acf.come_visit_section.button.link_to_where, pageData.acf.come_visit_section.button.onsite_link, pageData.acf.come_visit_section.button.offsite_link, pageData.acf.come_visit_section.button.file_link);

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

    const leftCircle = {
        beforeLoad: { marginLeft: -400, rotate: 10 },
        afterLoad: {
          marginLeft: -320,
          rotate: 0,
          transition: {
            duration: 0.5
          }
        }
    }

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>
            <div className="relative lg:grid grid-cols-12 gap-4 items-stretch max-w-10xl mb-20 mx-auto py-4 overflow-hidden home-hero-section">
                <div className="relative flex col-span-4 items-center pt-8 pb-12 z-20 home-hero-content-section">
                    <div className="px-3 lg:pl-10 xl:pl-16 2xl:pl-20 lg:pr-12 text-center lg:text-left mx-auto">
                        <h1 className="pb-4 max-w-sm mx-auto home-hero-title">{pageData.acf.hero_section.title}</h1>
                        <p className="text-xl leading-tight">{pageData.acf.hero_section.paragraph}</p>
                    </div>
                </div>
                <div className="relative col-span-8 py-56 lg:py-80">
                    <Image src={homeHeroImg} alt="image of meal at Tandoor" layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <motion.svg className="hidden lg:block absolute top-10 -ml-80 z-10" initial="beforeLoad" animate="afterLoad" variants={leftCircle} style={{ rotate: rotateStar }} width="602" height="602" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M9 275.902L283.04 281.45L16.9882 215.769L21.648 198.35L284.926 274.571L44.836 142.322L53.8227 126.678L288.476 268.469L90.7681 78.5271L103.527 65.7682L293.469 263.365L151.678 28.8227L167.322 19.836L299.571 259.815L223.35 -3.46296L240.88 -8.12274L306.45 258.04L301.013 -16H319.098L313.55 258.04L379.231 -8.12274L396.65 -3.46296L320.429 259.815L452.678 19.836L468.322 28.8227L326.531 263.365L516.473 65.7682L529.232 78.5271L331.635 268.469L566.177 126.678L575.164 142.322L335.185 274.571L598.352 198.35L603.123 215.769L336.96 281.45L611 275.902V293.987L336.96 288.55L603.123 354.12L598.352 371.65L335.185 295.429L575.164 427.678L566.177 443.322L331.635 301.531L529.232 491.473L516.473 504.232L326.531 306.524L468.322 541.177L452.678 550.164L320.429 310.074L396.65 573.352L379.231 578.012L313.55 311.96L319.098 586H301.013L306.45 311.96L240.88 578.012L223.35 573.352L299.571 310.074L167.322 550.164L151.678 541.177L293.469 306.524L103.527 504.232L90.7681 491.473L288.476 301.531L53.8227 443.322L44.836 427.678L284.926 295.429L21.648 371.65L16.9882 354.12L283.04 288.55L9 293.987V275.902Z" fill="#FEFEFE"/>
                </motion.svg>
            </div>

            <div className="relative -mb-3 z-20">
                <SectionSep />
            </div>

            <div className="relative py-20 px-6 lg:px-0 home-menu-section">
                <div className="relative lg:grid grid-cols-12 items-start max-w-8xl mx-auto z-30">
                    <div className="relative col-span-7 py-48 sm:py-80">
                        <Image src={homeMenuImg} alt="image of meal at Tandoor" layout="fill" objectFit="contain" objectPosition="center" />
                    </div>
                    <div className="col-span-5 mt-24 py-2 lg:pl-10 text-center lg:text-left home-menu-content-section">
                        <h2 className="w-full text-5xl sm:text-6xl leading-none pb-6 lg:pb-3">{pageData.acf.menu_section.title}</h2>
                        <p className="max-w-xs text-lg leading-tight mx-auto lg:ml-0 pb-12 lg:pb-6">{pageData.acf.menu_section.paragraph}</p>
                        <a href={homeMenuButtonLink}>
                            <div className="mx-auto lg:ml-0 button">
                                {pageData.acf.menu_section.button.text}
                            </div>
                        </a>
                    </div>
                </div>
                <motion.svg className="absolute top-16 -ml-96 lg:-ml-64 z-10" style={{ y: parallaxStar }} width="602" height="602" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M602 291.902L327.96 297.45L594.012 231.769L589.352 214.35L326.074 290.571L566.164 158.322L557.177 142.678L322.524 284.469L520.232 94.5271L507.473 81.7682L317.531 279.365L459.322 44.8227L443.678 35.836L311.429 275.815L387.65 12.537L370.12 7.87726L304.55 274.04L309.987 0H291.902L297.45 274.04L231.769 7.87726L214.35 12.537L290.571 275.815L158.322 35.836L142.678 44.8227L284.469 279.365L94.5271 81.7682L81.7682 94.5271L279.365 284.469L44.8227 142.678L35.836 158.322L275.815 290.571L12.648 214.35L7.87726 231.769L274.04 297.45L0 291.902V309.987L274.04 304.55L7.87726 370.12L12.648 387.65L275.815 311.429L35.836 443.678L44.8227 459.322L279.365 317.531L81.7682 507.473L94.5271 520.232L284.469 322.524L142.678 557.177L158.322 566.164L290.571 326.074L214.35 589.352L231.769 594.012L297.45 327.96L291.902 602H309.987L304.55 327.96L370.12 594.012L387.65 589.352L311.429 326.074L443.678 566.164L459.322 557.177L317.531 322.524L507.473 520.232L520.232 507.473L322.524 317.531L557.177 459.322L566.164 443.678L326.074 311.429L589.352 387.65L594.012 370.12L327.96 304.55L602 309.987V291.902Z" fill="#FFE7C0"/>
                </motion.svg>
                <motion.svg className="absolute bottom-0 right-0 -mb-72 -mr-96 lg:-mr-48 z-10" style={{ y: parallaxStar }} width="602" height="602" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M602 291.902L327.96 297.45L594.012 231.769L589.352 214.35L326.074 290.571L566.164 158.322L557.177 142.678L322.524 284.469L520.232 94.5271L507.473 81.7682L317.531 279.365L459.322 44.8227L443.678 35.836L311.429 275.815L387.65 12.537L370.12 7.87726L304.55 274.04L309.987 0H291.902L297.45 274.04L231.769 7.87726L214.35 12.537L290.571 275.815L158.322 35.836L142.678 44.8227L284.469 279.365L94.5271 81.7682L81.7682 94.5271L279.365 284.469L44.8227 142.678L35.836 158.322L275.815 290.571L12.648 214.35L7.87726 231.769L274.04 297.45L0 291.902V309.987L274.04 304.55L7.87726 370.12L12.648 387.65L275.815 311.429L35.836 443.678L44.8227 459.322L279.365 317.531L81.7682 507.473L94.5271 520.232L284.469 322.524L142.678 557.177L158.322 566.164L290.571 326.074L214.35 589.352L231.769 594.012L297.45 327.96L291.902 602H309.987L304.55 327.96L370.12 594.012L387.65 589.352L311.429 326.074L443.678 566.164L459.322 557.177L317.531 322.524L507.473 520.232L520.232 507.473L322.524 317.531L557.177 459.322L566.164 443.678L326.074 311.429L589.352 387.65L594.012 370.12L327.96 304.55L602 309.987V291.902Z" fill="#FFE7C0"/>
                </motion.svg>
            </div>
            
            <div className="relative max-w-10xl mx-auto pb-24 z-30">
                <div className="md:grid grid-cols-12 gap-4 items-stretch">
                    <div className="hidden md:block relative col-span-3 xl:col-span-4 py-64">
                        <Image src={comeVisitImgLeft} alt="image of meal at Tandoor" layout="fill" objectFit="cover" objectPosition="center" />
                    </div>
                    <div className="relative col-span-6 xl:col-span-4 px-6 xl:px-12 text-center overflow-hidden come-visit-content-section">
                        <div className="relative pt-24 pb-24 md:pb-0 z-30">
                            <h2 className="w-full text-5xl sm:text-6xl leading-none pb-6 lg:pb-3">{pageData.acf.come_visit_section.title}</h2>
                            <p className="max-w-xs text-lg leading-tight mx-auto pb-12 lg:pb-6">{pageData.acf.come_visit_section.paragraph}</p>
                            <a href={comeVisitButtonLink}>
                                <div className="mx-auto button">
                                    {pageData.acf.come_visit_section.button.text}
                                </div>
                            </a>
                        </div>
                        <svg className="absolute bottom-0 left-0 w-full -mb-48 z-10 burst" width="100%" height="380" viewBox="0 0 630 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M9 275.902L283.04 281.45L16.9882 215.769L21.648 198.35L284.926 274.571L44.836 142.322L53.8227 126.678L288.476 268.469L90.7681 78.5271L103.527 65.7682L293.469 263.365L151.678 28.8227L167.322 19.836L299.571 259.815L223.35 -3.46296L240.88 -8.12274L306.45 258.04L301.013 -16H319.098L313.55 258.04L379.231 -8.12274L396.65 -3.46296L320.429 259.815L452.678 19.836L468.322 28.8227L326.531 263.365L516.473 65.7682L529.232 78.5271L331.635 268.469L566.177 126.678L575.164 142.322L335.185 274.571L598.352 198.35L603.123 215.769L336.96 281.45L611 275.902V293.987L336.96 288.55L603.123 354.12L598.352 371.65L335.185 295.429L575.164 427.678L566.177 443.322L331.635 301.531L529.232 491.473L516.473 504.232L326.531 306.524L468.322 541.177L452.678 550.164L320.429 310.074L396.65 573.352L379.231 578.012L313.55 311.96L319.098 586H301.013L306.45 311.96L240.88 578.012L223.35 573.352L299.571 310.074L167.322 550.164L151.678 541.177L293.469 306.524L103.527 504.232L90.7681 491.473L288.476 301.531L53.8227 443.322L44.836 427.678L284.926 295.429L21.648 371.65L16.9882 354.12L283.04 288.55L9 293.987V275.902Z" fill="#FEFEFE"/>
                        </svg>
                    </div>
                    <div className="relative col-span-3 xl:col-span-4 py-40 md:py-64">
                        <Image src={comeVisitImgRight} alt="image of meal at Tandoor" layout="fill" objectFit="cover" objectPosition="center" />
                    </div>
                </div>
            </div>
            {/* <CateringCta cateringCTA={cateringCTA} /> */}
            <InstagramSection instagramSection={instagramSection} />
        </>
    );
}