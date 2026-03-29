import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Gallery",
  description: "Production-grade design mockups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("mousemove", (e) => {
                const x = e.clientX;
                const y = e.clientY;
                
                const follower = document.getElementById("follower");
                if (follower) {
                  follower.style.left = x + "px";
                  follower.style.top = y + "px";
                }
              });
            `,
          }}
        />
      </head>
      <body>
        <div id="follower" />
        {children}
      </body>
    </html>
  );
}
