import { notFound } from 'next/navigation';
import ThankYou from "../../../templates/ThankYou.js";
import Menus from "../../../templates/Menus.js";
import Catering from "../../../templates/Catering.js";
import About from "../../../templates/About.js";
import Contact from "../../../templates/Contact.js";
import OnLoadScripts from "../../../components/OnLoadScripts.js";

async function getAllPages() {
  const res = await fetch(`https://inside.societybrunch.co/wp-json/pages/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(`https://inside.societybrunch.co/wp-json/pages/all/${slug}`)
  if (!res.ok) {
    return notFound();
  } 
  else if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (!page.slug) return notFound();

  if (slug == "thank-you") {
    return (
      <>
        <ThankYou pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (slug == "menus") {
    return (
      <>
        <Menus pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (slug == "catering") {
    return (
      <>
        <Catering pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (slug == "about") {
    return (
      <>
        <About pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (slug == "contact") {
    return (
      <>
        <Contact pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}