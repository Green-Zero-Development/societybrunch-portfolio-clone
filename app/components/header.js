'use client';

import Link from 'next/link';

function toggleDropdown(dropTrig) {
  dropTrig.target.nextSibling.classList.toggle("hidden")
}

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-open").classList.toggle("opacity-0");
  document.getElementById("mobile-menu-close").classList.toggle("opacity-0");
  document.body.classList.toggle("overflow-hidden");
}

export default function Header({ logos, socialMedia, mainMenu, mobileMenu }) {

    const mainLogo = logos[0].acf.logo.url;
    const mobileLogo = logos[0].acf.mobile_menu_logo.url;
    const clock = socialMedia[0].acf.value_list[0].value;
    const googleMaps = socialMedia[0].acf.value_list[1].value;
    const instagram = socialMedia[0].acf.value_list[3].value;
    const facebook = socialMedia[0].acf.value_list[2].value;

    return (
        <>
         <div className="hidden md:flex col-span-3 items-center w-full justify-between py-4 px-6 topbar">
            <div className="flex items-center">
                <a href={clock} target="_blank" className="mr-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#F0F0F0" stroke-width="2"/>
                        <path d="M16 17L12 12L12 7" stroke="#F0F0F0" stroke-width="2"/>
                    </svg>
                </a>
                <a href={googleMaps} target="_blank">
                    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3037 8.15183C15.3037 9.04508 14.8788 10.415 14.1199 12.0805C13.3789 13.7068 12.3825 15.4832 11.3736 17.1402C10.3668 18.7937 9.35837 20.3108 8.60083 21.4155C8.43871 21.6519 8.28821 21.8693 8.15183 22.0648C8.01545 21.8693 7.86495 21.6519 7.70282 21.4155C6.94528 20.3108 5.93687 18.7937 4.93004 17.1402C3.92117 15.4832 2.92473 13.7068 2.18372 12.0805C1.42485 10.415 1 9.04508 1 8.15183C1 4.20139 4.20139 1 8.15183 1C12.1023 1 15.3037 4.20139 15.3037 8.15183Z" stroke="#F0F0F0" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M11.1514 8C11.1514 9.65685 9.80822 11 8.15137 11C6.49451 11 5.15137 9.65685 5.15137 8C5.15137 6.34315 6.49451 5 8.15137 5C9.80822 5 11.1514 6.34315 11.1514 8Z" stroke="#F0F0F0" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                </a>
            </div>
            <div className="">
                <h6 className="topbar-text">notification bar // notification bar</h6>
            </div>
            <div className="flex items-center">
                <a href={instagram} target="_blank" className="mr-6">
                    <svg width="24" height="24" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href={facebook} target="_blank">
                    <svg width="24" height="24" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                </a>
            </div>
        </div>
        <header className="grid grid-cols-3 items-center justify-between header-container">
        <Link href="/" className="hidden md:block col-span-3 md:col-span-1 mx-auto md:ml-0 desktop-logo">
            <img src={mainLogo} />
        </Link>
        <Link href="/" className="md:hidden col-span-3 md:col-span-1 mx-auto md:ml-0 mobile-logo">
            <img src={mobileLogo} />
        </Link>
        <div className="col-span-2 flex items-center ml-auto">
            <ul className="desktop-menu">
                {mainMenu.map((item) => {
                    if (item.children) {
                        return (
                            <li key={item.id} className="desktop-menu-single">
                                <div id="dropdown-trigger" onClick={toggleDropdown} className="">{item.title}</div>
                                <div id="dropdown" className="hidden absolute flex">
                                {Object.keys(item.children).map((key, index) => {
                                    if (item.children[key].url.includes("#")) {
                                        return (
                                            <a key={index} href={item.children[key].url}>{item.children[key].title}</a>
                                        );
                                    } else {
                                        return (
                                            <Link key={index} href={item.children[key].url}>{item.children[key].title}</Link>
                                        );
                                    }
                                })}
                                </div>
                            </li>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <li key={item.id} className="desktop-menu-single">
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={item.id} className="desktop-menu-single">
                                    <Link href={item.url}>{item.title}</Link>
                                </li>
                            )
                        }
                    }
                })}
            </ul>
        </div>
          <div id="mobile-menu" className="mobile-menu">
            <div id="mobile-items" className="mobile-items">
                <div className="grid grid-cols-3 md:grid-cols-1 items-center justify-between mobile-menu-header">
                    <Link href="/" onClick={mobiletoggle} className="col-span-3 mx-auto">
                        <img className="mobile-menu-logo" src={mobileLogo} />
                    </Link>
                </div>
                <ul className="pt-12 px-6">
                {mobileMenu.map((item) => {
                    if (item.children) {
                        return (
                            <li key={item.id} className="mb-2 mobile-menu-single">
                                <div id="dropdown-trigger" className="flex items-center" onClick={toggleDropdown}>
                                    <div className="ml-auto pointer-events-none">{item.title}</div>
                                    <svg className="w-5 p-1 mr-auto pointer-events-none" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </div>
                                <div id="dropdown" className="hidden">
                                {Object.keys(item.children).map((key, index) => {
                                    if (item.children[key].url.includes("#")) {
                                        return (
                                            <a key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</a>
                                        );
                                    } else {
                                        return (
                                            <Link key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</Link>
                                        );
                                    }
                                })}
                                </div>
                            </li>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <li key={item.id} className="mb-2 mobile-menu-single">
                                    <a href={item.url} className="" onClick={mobiletoggle} >{item.title}</a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={item.id} className="mb-2 mobile-menu-single">
                                    <Link href={item.url} onClick={mobiletoggle}>{item.title}</Link>
                                </li>
                            )
                        }
                    }
                })}
                </ul>
                <div className="flex items-center justify-evenly max-w-md mx-auto">
                    <a href={instagram} target="_blank" className="">
                        <svg width="40" height="40" fill="#2A2A2E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href={facebook} target="_blank">
                        <svg width="40" height="40" className="" ill="#2A2A2E" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="mobile-menu-open" onClick={mobiletoggle} className="mobile-menu-open">
            <svg className="mx-auto" width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6.49902" y="6.50012" width="65.0002" height="53.0002" stroke="#2A2A2E"/>
                <rect width="66.0002" height="54.0002" fill="#FFA06E"/>
                <path d="M11.999 14.9999H53.9992" stroke="#2A2A2E"/>
                <path d="M11.999 26.9999H53.9992" stroke="#2A2A2E"/>
                <path d="M11.999 39.0001H53.9992" stroke="#2A2A2E"/>
            </svg>
        </div>
        <div id="mobile-menu-close" onClick={mobiletoggle} className="opacity-0 mobile-menu-close">
            <svg className="mx-auto" width="73" height="61" viewBox="0 0 73 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.27344" y="6.52063" width="65.2268" height="53.1856" stroke="#2A2A2E"/>
                <rect width="66.2268" height="54.1856" fill="#FFA06E"/>
                <path d="M18.0615 12.0413L47.8621 41.8418" stroke="#2A2A2E"/>
                <path d="M18.0615 42.1444L47.8621 12.3439" stroke="#2A2A2E"/>
            </svg>
        </div>
        </header>
      </>
    );
}