'use client';

import Link from 'next/link';
import SectionSep from "../components/SectionSep.js";

export default function Footer({ logos, socialMedia, footerMenu }) {

    const footerLogo = logos[0].acf.footer_logo.url;
    const instagram = socialMedia[0].acf.value_list[3].value;
    const facebook = socialMedia[0].acf.value_list[2].value;

    return (
        <footer className="relative pt-20">
            <div className="absolute top-0 left-0 right-0 max-w-6xl -mt-3 mx-auto overflow-hidden">
                <SectionSep />
            </div>
            <a href="/">
                <img className="pb-8 mx-auto" src={footerLogo} />
            </a>
            <div className="flex flex-wrap items-center justify-center w-full max-w-6xl mt-20 mx-auto">
                <ul className="flex flex-wrap justify-evenly w-full text-center footer-menu">
                    {footerMenu.map((item) => {
                        if (item.url.includes("#")) {
                            return (
                                <li key={item.id} className="xs:w-1/2 lg:w-auto pb-16 footer-menu-single">
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={item.id} className="xs:w-1/2 lg:w-auto pb-16 footer-menu-single">
                                    <Link href={item.url}>{item.title}</Link>
                                </li>
                            )
                        }
                    })}
                    <div className="flex items-center justify-center w-full xs:w-1/2 lg:w-auto pb-16 px-6">
                        <a href={instagram} target="_blank" className="mx-auto md:mr-6">
                            <svg width="24" height="24" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </a>
                        <a href={facebook} target="_blank" className="mx-auto">
                            <svg width="24" height="24" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                        </a>
                    </div>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full mt-16 lg:mt-10 mx-auto pt-6 pb-40 md:pb-6 px-12 post-footer">
                <div className="mx-auto md:ml-0 md:mr-auto pb-8 md:pb-0">
                    <p className="text-2xs text-center md:text-left text-white">&copy; <span id="copyright-date"></span>2022 Society Brunch & Bar</p>
                </div>
                <a href="https://madebypioneer.com/" target="_blank" className="mx-auto md:mr-0 pb-8 md:pb-0">
                    <img src="https://inside.tandoorandtap.com/wp-content/uploads/2023/01/pioneer.svg" />
                </a>
            </div>
        </footer>
    );
}
