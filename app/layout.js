import "./globals.css";

export const metadata = {
  title: "Simon the creator",
  description: "Simon the creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
