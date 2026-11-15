import { Outlet } from "react-router-dom";
import NavbarCentered from "@/components/navbars/NavbarCentered";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground">
      <header data-webild-section="Header">
        <NavbarCentered
          buttonStagger
          logo="MERYDIAN"
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Results",
              href: "#results"
            },
            {
              name: "Pricing",
              href: "#pricing"
            },
            {
              name: "Team",
              href: "#team"
            }
          ]}
          ctaButton={{
            text: "Book a Free Audit",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer data-webild-section="Footer">
        <FooterSimpleReveal
          brand="MERYDIAN"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "What We Automate",
                  href: "#services"
                },
                {
                  label: "Results",
                  href: "#results"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "Team",
                  href: "#team"
                },
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Book a Free Audit",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Privacy Policy",
                  href: "#"
                }
              ]
            }
          ]}
          copyright="© 2026 Merydian. All rights reserved."
          links={[
            {
              label: "Terms",
              href: "#"
            },
            {
              label: "Privacy",
              href: "#"
            }
          ]}
        />
      </footer>
    </div>
  );
}
