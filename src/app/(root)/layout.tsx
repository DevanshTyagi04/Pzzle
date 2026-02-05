import { Navbar, Footer } from "@/components";
import Toast from "@/components/Toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Toast />
      <Footer />
    </>
  );
}
