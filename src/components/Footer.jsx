export default function Footer() {
    return (
      <footer className="border-t bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ShopX. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>
      </footer>
    );
  }
  