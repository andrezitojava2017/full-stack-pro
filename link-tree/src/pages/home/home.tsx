import {FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import Social from "../../components/social";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../service/firebase";





const Home = () => {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="text-3xl font-bold text-white mt-20 md:text-4xl">
        Dev Links
      </h1>
      <span className="text-gray-200 mb-5 mt-3 ">Veja meus links 👇🏼</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105">
          <a>
            <p className="text-base md:text-lg">Meu Link</p>
          </a>
        </section>
      </main>

      <footer className="flex justify-center gap-3 py-4">
        <Social url="https://www.facebook.com/yourprofile">
          <FaFacebook size={38} color="#1877F2" />
        </Social>

        <Social url="https://www.instagram.com/">
          <FaInstagram size={38} color="#1877F2" />
        </Social>

         <Social url="https://www.youtube.com">
          <FaYoutube size={38} color="#1877F2" />
        </Social>
      </footer>
    </div>
  );
};

export default Home;
