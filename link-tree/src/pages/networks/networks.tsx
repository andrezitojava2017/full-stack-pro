import { doc, getDoc, setDoc } from "firebase/firestore";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
import { db } from "../../service/firebase";
import { useEffect, useState } from "react";

interface LinkProps {
  instagram: string;
  youtube: string;
}

const Networks = () => {
  const [links, setLinks] = useState<LinkProps>();
  const [newLInks, setNewLinks] = useState<LinkProps>({
    instagram: "",
    youtube: "",
  });

  const loadLinks = async () => {
    const docRef = doc(db, "social", "links");

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setLinks(snapshot.data() as LinkProps);
        }
      })
      .catch((error) => {
        console.log("Erro ao buscar links: ", error);
      });
  };

  const handleAddLink = async (e: React.FormEvent) => {
    e.preventDefault();

    setDoc(doc(db, "social", "links"), {
      instagram: newLInks.instagram,
      youtube: newLInks.youtube,
    })
      .then(() => {
        console.log("Links salvos com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao salvar links: ", error);
      });
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />

      <form className="flex flex-col w-full max-w-xl" onSubmit={handleAddLink}>
        <div className="flex flex-col w-full max-w-xl">
          <label className="font-medium text-white mb-2 mt-2">
            Link Instagram
          </label>
          <Input
            type="url"
            placeholder="URL Instagram"
            value={newLInks.instagram}
            onChange={(e) =>
              setNewLinks({ ...newLInks, instagram: e.target.value })
            }
          />

          <label className="font-medium text-white mb-2 mt-2">
            Link Youtube
          </label>
          <Input
            type="url"
            placeholder="URL Youtube"
            value={newLInks.youtube}
            onChange={(e) =>
              setNewLinks({ ...newLInks, youtube: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Salvar Links
        </button>
      </form>

      <div className="flex flex-col justify-center w-full max-w-xl mt-6 mb-4 p-4 border border-white rounded-md bg-gray-800">
        <label className="text-white font-medium text-center mb-3">
          Meus Links
        </label>
        <article className="rounded-md p-2">
          {links?.youtube && (
            <p className="bg-cyan-200 rounded-md p-2 text-emerald-900 mb-2">
              {links?.youtube}
            </p>
          )}
          {links?.instagram && (
            <p className="bg-cyan-200 rounded-md p-2 text-emerald-900">
              {links?.instagram}
            </p>
          )}
        </article>
      </div>
    </div>
  );
};

export default Networks;
