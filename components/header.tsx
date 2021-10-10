import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Header(): JSX.Element {
  const title = "Gourav Goyal";
  const desc =
    "I'm a tech founder, digital nomad, and a fun guy to hang around with. I like to build things that others find helpful.";
  const ogImgRelativePath = "/og.png";

  const siteURL = "https://gourav.io";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const twitterHandle = "@GorvGoyl";
  const siteName = "Gourav.io";

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "en_US", //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: "Gourav.io - personal site and blog",
          },
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "author",
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `${siteURL}/favicon.ico`,
        },
        // {
        //   rel: "manifest",
        //   href: "/site.manifest",
        // },
      ]}
    />
  );
}
