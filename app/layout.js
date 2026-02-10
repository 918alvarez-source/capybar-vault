export const metadata = {
  title: "Capybara Vault",
  description: "Private NFT gated content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
