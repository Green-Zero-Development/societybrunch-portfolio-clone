'use client';

import Image from 'next/image';
import {
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";
import SectionSep from "../components/SectionSep.js";

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

export default function CateringCta({ cateringCTA }) {

    const { scrollY } = useScroll();
    const rotateStar = useTransform(
        scrollY,
        [0, 2000],
        [0, 90],
        { clamp: false }
    );

    const cateringSectionImg = cateringCTA.acf.image.url;
    const cateringSectionButtonLink = getButtonLink(cateringCTA.acf.button.link_to_where, cateringCTA.acf.button.onsite_link, cateringCTA.acf.button.offsite_link, cateringCTA.acf.button.file_link);
    
    return (
        <div id="catering-cta-section" className="relative catering-cta-section">
            <div className="md:hidden">
                <SectionSep />
            </div>
            <div className="relative pb-20">
            <div className="relative md:grid grid-cols-12 items-start max-w-8xl mx-auto z-30">
                    <div className="col-span-5 mt-16 lg:mt-32 mb-6 md:ml-6 xl:ml-40 py-2 px-6 lg:pr-0 md:pl-10 text-center md:text-left catering-cta-content-section">
                        <h2 className="w-full text-5xl sm:text-6xl leading-none pb-6 lg:pb-3">{cateringCTA.acf.title}</h2>
                        <p className="max-w-xs text-lg leading-tight mx-auto md:ml-0 pb-12 lg:pb-6">{cateringCTA.acf.paragraph}</p>
                        <a href={cateringSectionButtonLink}>
                            <div className="mx-auto lg:ml-0 button">
                                {cateringCTA.acf.button.text}
                            </div>
                        </a>
                    </div>
                    <div className="relative col-span-7 catering-section-circle">
                        <Image className="relative !left-16 -mt-6 z-20 safari-border-fix" src={cateringSectionImg} alt="" layout="fill" objectFit="contain" objectPosition="left" />
                        <motion.svg className="relative top-3 right-12 z-10" style={{ rotate: rotateStar }} width="660" height="660" viewBox="0 0 660 660" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M602 291.902L327.96 297.45L594.012 231.769L589.352 214.35L326.074 290.571L566.164 158.322L557.177 142.678L322.524 284.469L520.232 94.5271L507.473 81.7682L317.531 279.365L459.322 44.8227L443.678 35.836L311.429 275.815L387.65 12.537L370.12 7.87726L304.55 274.04L309.987 0H291.902L297.45 274.04L231.769 7.87726L214.35 12.537L290.571 275.815L158.322 35.836L142.678 44.8227L284.469 279.365L94.5271 81.7682L81.7682 94.5271L279.365 284.469L44.8227 142.678L35.836 158.322L275.815 290.571L12.648 214.35L7.87726 231.769L274.04 297.45L0 291.902V309.987L274.04 304.55L7.87726 370.12L12.648 387.65L275.815 311.429L35.836 443.678L44.8227 459.322L279.365 317.531L81.7682 507.473L94.5271 520.232L284.469 322.524L142.678 557.177L158.322 566.164L290.571 326.074L214.35 589.352L231.769 594.012L297.45 327.96L291.902 602H309.987L304.55 327.96L370.12 594.012L387.65 589.352L311.429 326.074L443.678 566.164L459.322 557.177L317.531 322.524L507.473 520.232L520.232 507.473L322.524 317.531L557.177 459.322L566.164 443.678L326.074 311.429L589.352 387.65L594.012 370.12L327.96 304.55L602 309.987V291.902Z" fill="#FFE7C0"/>
                        </motion.svg>
                    </div>
                </div>
            </div>
        </div>

    );
}