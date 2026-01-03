import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import Social from "../../components/social";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../service/firebase";
import { useEffect, useState } from "react";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bgColor: string;
  textColor: string;
}

const Home = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);

  const lodingMyLinks = () => {
    getDocs(query(collection(db, "links"), orderBy('created', "asc")))
      .then((snap) => {
        // eslint-disable-next-line prefer-const
        let lista = [] as LinkProps[]

        snap.forEach((doc) => {
          lista.push({
            id: doc.id,
            bgColor: doc.data().bgColor,
            name: doc.data().name,
            textColor: doc.data().textColor,
            url: doc.data().url
          })
        });

        setLinks(lista)
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((error) => {
        console.log("Ocorreu um erro");
      });
  };

  useEffect(() => {
    lodingMyLinks();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="text-3xl font-bold text-white mt-20 md:text-4xl">
        Dev Links
      </h1>
      <span className="text-gray-200 mb-5 mt-3 ">Veja meus links 👇🏼</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
       

        {links.length !== 0 ? (
          links.map((item) => (
            <section
              key={item.id}
              className=" mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105"
              style={{ background: item.bgColor, color: item.textColor}}
            >
              <a>
                <p className="text-base md:text-lg">{item.name}</p>
              </a>
            </section>
          ))
        ) : (
          <span>Vazio</span>
        )}
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
