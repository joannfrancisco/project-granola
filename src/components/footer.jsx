import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-[var(--foreground)] py-12 lg:pt-20 px-8 lg:px-15 w-screen">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div className="pr-4">
          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-chau-philomene-one)" }}
          >
            GR8NOLA IS READY FOR YOU!
          </h2>
          <p className="leading-relaxed mb-6 text-xl opacity-90">
            If you have any questions about our products, whole foods or
            anything related to food and nutrients, let us know. We are happy to
            help.
          </p>
          <p className="text-xl opacity-90">Monday - Friday 9 am - 5 pm</p>
          <p className="text-xl opacity-90">+31 12 3456 789</p>
          <p className="mb-4 text-xl opacity-90">info@gr8nola.com</p>
        </div>

        {/* Column 2 */}
        <div style={{ fontFamily: "var(--font-chau-philomene-one)" }}>
          <h3 className="text-2xl font-bold mb-6 tracking-wider">
            CRUNCHY MUESLIS
          </h3>
          <h3 className="text-2xl font-bold tracking-wider">
            CRUNCHY MUESLI BARS
          </h3>
        </div>

        {/* Column 3 */}
        <div style={{ fontFamily: "var(--font-chau-philomene-one)" }}>
          <h3 className="text-2xl font-bold mb-6 tracking-wider">FAQ</h3>
          <h3 className="text-2xl font-bold tracking-wider">CAREER</h3>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-20 pt-6 opacity-70 text-sm text-center">
        © {new Date().getFullYear()}. Created with{" "}
        <span className="text-red-500">❤️</span> by{" "}
        <Link
          href="https://www.joannfrancisco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-red-400 transition-colors"
        >
          Jo Ann Francisco
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
