import { Outlet } from "react-router-dom";
import NavbarCentered from "@/components/navbars/NavbarCentered";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground">
      <header data-webild-section="Header">
        <NavbarCentered
          buttonStagger
          logo="VELOCE LABS"
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Integrations",
              href: "#tools"
            },
            {
              name: "Pricing",
              href: "#pricing"
            },
            {
              name: "Team",
              href: "#team"
            },
            {
              name: "Contact",
              href: "#contact"
            }
          ]}
          ctaButton={{
            text: "Start Project",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer data-webild-section="Footer">
        <FooterSimpleReveal
          brand="VELOCE LABS"
          columns={[
            {
              title: "Speciality Services",
              items: [
                {
                  label: "Custom Web & Mobile Apps",
                  href: "#services"
                },
                {
                  label: "SaaS Development",
                  href: "#services"
                },
                {
                  label: "Cyber Security",
                  href: "#services"
                },
                {
                  label: "CRM, PLM & ERP Systems",
                  href: "#services"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Tool Integrations",
                  href: "#tools"
                },
                {
                  label: "Team & Leadership",
                  href: "#team"
                },
                {
                  label: "Get in Touch",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Direct Contact",
              items: [
                {
                  label: "CEO: Moheb Awichewi",
                  href: "#contact"
                },
                {
                  label: "Mohebawichewi9@gmail.com",
                  href: "mailto:Mohebawichewi9@gmail.com"
                },
                {
                  label: "+216 50 564 964",
                  href: "tel:+21650564964"
                }
              ]
            }
          ]}
          copyright="© 2026 Veloce Labs. All rights reserved."
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
