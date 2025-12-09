import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../service/firebase";
import { FaRegTrashAlt } from "react-icons/fa";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bgColor: string;
  textColor: string;
}

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [bgColorInput, setBgColorInput] = useState("#ffffff");
  const [textColorInput, setTextColorInput] = useState("#000000");
  const [links, setLinks] = useState<LinkProps[]>([]);

  const getAllLinks = async () => {
    try {
      const linksCollection = collection(db, "links");
      const queryrRef = query(linksCollection, orderBy("created", "asc"));

      const unSub = onSnapshot(queryrRef, (snapshot) => {
        let lista = [] as LinkProps[];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bgColor: doc.data().bgColor,
            textColor: doc.data().textColor,
          });
        });

        setLinks(lista);
      });

      return unSub;
    } catch (error) {
      console.log("Erro ao buscar links: ", error);
    }
  };

  const handleAddLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "links"), {
        name: nameInput,
        url: urlInput,
        bgColor: bgColorInput,
        textColor: textColorInput,
        created: new Date(),
      });
      setNameInput("");
      setUrlInput("");
      setBgColorInput("#ffffff");
      setTextColorInput("#000000");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
     getAllLinks();

    return () => {
      getAllLinks().then((unSub) => {
        if (unSub) {
          unSub();
        }
     //   console.log("Unsubscribed from links collection");
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />

      <form
        className="flex flex-col w-full max-w-xl mt-8 mb-3"
        onSubmit={handleAddLink}
      >
        <label className="font-medium text-white mb-2 mt-2">Nome do link</label>
        <Input
          placeholder="descrição do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.currentTarget.value)}
        />

        <label className="font-medium text-white mb-2 mt-2">URL</label>
        <Input
          type="url"
          placeholder="Link"
          value={urlInput}
          onChange={(e) => setUrlInput(e.currentTarget.value)}
        />

        <section className="flex gap-4 mt-4">
          <div>
            <label className="font-medium text-white mb-2 mt-2 mr-3">
              Fundo do link
            </label>
            <Input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.currentTarget.value)}
            />
          </div>

          <div>
            <label className="font-medium text-white mb-2 mt-2 mr-3">
              Cor do link
            </label>
            <Input
              type="color"
              value={bgColorInput}
              onChange={(e) => setBgColorInput(e.currentTarget.value)}
            />
          </div>
        </section>

        <div className="flex flex-col justify-center w-full max-w-xl mt-3 mb-4 p-4 border border-white rounded-md bg-gray-800">
          <label className="text-white font-medium text-center mb-3">
            Veja o resultado
          </label>
          <article
            style={{ backgroundColor: bgColorInput, color: textColorInput }}
            className="rounded-md p-2"
          >
            <p>{nameInput || "Nome do link"}</p>
          </article>
        </div>

        <button className="w-full max-w-xl bg-blue-800 p-2 rounded-md text-white hover:cursor-pointer">
          Cadastrar link
        </button>
      </form>

      <div className="flex flex-col w-full max-w-xl mt-8">
        <h1 className="text-2xl text-center text-white mb-8">Meus Links</h1>

        {links.map((link) => (
          <article
            key={link.id}
            style={{ backgroundColor: link.bgColor, color: link.textColor }}
            className="flex  justify-between items-center rounded-md p-2 mb-2"
          >
            <p>{link.name}</p>
            <span className="p-2 bg-red-400 rounded hover:cursor-pointer">{<FaRegTrashAlt size={12} color={'black'}/> }</span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Admin;
