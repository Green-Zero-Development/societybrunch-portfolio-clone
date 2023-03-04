'use client';

import { useEffect } from 'react';
import SectionSep from "../components/SectionSep.js";

export default function InstagramSection({ instagramSection }) {

    

    return (
        <div id="instagram-cta">
        <div className="-mb-3 mx-auto overflow-hidden instagram-sep">
            <SectionSep />
        </div>
        <div className="max-w-6xl mx-auto pt-16 pb-48 instagram-section">
            <div className="flex justify-center items-center">
                <h6 class="hidden md:block text-center  instagram-title">Follow Us on Instagram</h6>
                <img className="md:hidden text-center" src="https://inside.societybrunch.co/wp-content/uploads/2022/12/follow-insta.png" />
                <svg className="hidden md:block" width="94" height="8" viewBox="0 0 94 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M93.3536 4.35355C93.5488 4.15828 93.5488 3.8417 93.3536 3.64644L90.1716 0.464458C89.9763 0.269196 89.6597 0.269196 89.4645 0.464458C89.2692 0.65972 89.2692 0.976303 89.4645 1.17157L92.2929 3.99999L89.4645 6.82842C89.2692 7.02368 89.2692 7.34026 89.4645 7.53553C89.6597 7.73079 89.9763 7.73079 90.1716 7.53553L93.3536 4.35355ZM4.37114e-08 4.5L93 4.49999L93 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#E6552D"/>
                </svg>
            </div>
        </div>
        <div class="max-w-6xl -mt-40 mb-40 mx-auto px-12 overflow-hidden instagram-feed">
            <div class="elfsight-app-cc65d39b-94ff-44d1-9e23-51db5d9a0aee"></div>
        </div>
        </div>
    );
}