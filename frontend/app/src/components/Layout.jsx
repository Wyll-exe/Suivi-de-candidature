import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import Relance from "./Relance";

const Layout = () => {

// Compteur statut
  const [counts, setCounts] = useState({ enAttente: 0, acceptees: 0, refusees: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/api/v1"; //
        const response = await fetch(url);
        const data = await response.json();

        // Calcul
        const statusCounts = data.reduce(
          (acc, item) => {
            if (item.status === "En attente") acc.enAttente += 1;
            else if (item.status === "Acceptée") acc.acceptees += 1;
            else if (item.status === "Refusée") acc.refusees += 1;
            return acc;
          },
          { enAttente: 0, acceptees: 0, refusees: 0 }
        );

        // Total 
        statusCounts.total = data.length;
        setCounts(statusCounts);
      } catch (err) {
        setError(err);
        console.error("Erreur lors de la récupération des données :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section className='flex items-center justify-center'>
        <div className='absolute top-0 left-0 w-full min-h-screen bg-black opacity-80'>
          <video
            autoPlay
            loop
            muted
            className='w-full h-full object-cover fixed'>
            <source src="/assets/videos/player.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Content */}
        <Relance />
      </section>

      {/* Footer */}
      <footer className='flex flex-col w-full justify-end'>
        {loading ? (
          <p>loading ..</p>
        ) : error ? (
          <p>Erreur : {error.message}</p>
        ) : (
          <Footer
            enAttente={counts.enAttente}
            acceptees={counts.acceptees}
            refusees={counts.refusees}
            total={counts.total}
          />
        )}
      </footer>
    </main>
  );
};

export default Layout;