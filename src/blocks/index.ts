import {
    PanelBottomDashed,
    LayoutTemplate,
    Sparkles,
    Megaphone,
    ScrollText,
    AppWindow,
    PartyPopper,
    Goal,
  } from "lucide-react";

export const Blocks = () => {
    return [
        {
            title: "Hero Sections",
            description: "Eye-catching hero sections to grab your visitors' attention",
            icon: LayoutTemplate,
            path: "/components/hero",
        },
        {
            title: "Features",
            description: "Showcase your product's features with elegant layouts",
            icon: Sparkles,
            path: "/components/features",
        },
        {
            title: "Business",
            description: "Managing a business shouldn't be complicated",
            icon: Goal,
            path: "/components/business",
        },
        {
            title: "Blog Layouts",
            description: "Beautiful blog layouts for your content",
            icon: ScrollText,
            path: "/components/blog",
        },
        {
            title: "Navbar Sections",
            description: "Beautiful navbars sections for your website + mobile version",
            icon: AppWindow,
            path: "/components/navbar",
        },
        {
            title: "Promo Sections",
            description: "Convert visitors with compelling promotion sections",
            icon: PartyPopper,
            path: "/components/promo",
        },
        {
            title: "CTA Sections",
            description: "Convert visitors with compelling call-to-action sections",
            icon: Megaphone,
            path: "/components/cta",
        },
        {
            title: "Footer Sections",
            description:
                "Simplify footers layouts for your website or landing page",
            icon: PanelBottomDashed,
            path: "/components/footer",
        },
    ]
}