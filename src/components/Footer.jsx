export default function Footer({ darkMode }) {
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} py-8 px-4`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Umar Farid Al Faqihi</p>
        <p className="text-gray-400 mb-4">
          Frontend Developer • Web Development • Informatics Engineering
        </p>
      </div>
    </footer>
  );
}
