import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin,  Mail, Phone} from 'lucide-react';



export default function Contact({ darkMode }) {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId.includes('xxxxx') ||
      templateId.includes('xxxxx') ||
      publicKey === 'your_public_key'
    ) {
      setStatus('Konfigurasi EmailJS belum diisi. Periksa file .env.');
      return;
    }

    setIsSending(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey },
      );
      setStatus('Pesan berhasil dikirim. Terima kasih!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Pesan gagal dikirim. Silakan coba lagi.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
        <div className="lg:text-left">
          <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Let's Get in Touch!
          </h2>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project or an exciting idea? I’m ready to collaborate and help bring it to life.
          </p>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            contact me with my social media or send me a message using the form below. I look forward to hearing from you!
          </p>
          <p className={`mb-8 flex flex-col gap-2 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="flex items-center gap-2"><Mail size={20} color="blue" />Email : Umarfarid273@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={20} color="blue" />Phone : +628978075786</span>
            </p>
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            <a href="https://github.com/Umarfaridd" className="bg-white text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110">
              <Github size={28} className="text-white-800" />
            </a>
            <a href="https://www.linkedin.com/in/umar-farid-al-faqihi-845648350" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110">
              <Linkedin size={28} className="text-blue-600" />
            </a>
            <a href="mailto:umarfarid273@gmail.com" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110">
              <Mail size={28} className="text-red-500" />
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-2xl shadow-xl p-8 space-y-5`}>
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="nama@email.com"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Message</label>
            <textarea
              rows="4"
              name="message"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-[1.01]"
          >
            {isSending ? 'Mengirim...' : 'Send Message'}
          </button>
          {status && <p className="text-center text-sm" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}