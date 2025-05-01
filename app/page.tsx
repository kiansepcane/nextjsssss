import BasketballCard from '../components/BasketballCard';
import { CSSProperties } from 'react'; // Import CSSProperties

export default function Home() {
  const players = [
    {
      name: 'Jerick Realto',
      jerseyNumber:69,
      position: 'top sometimes bottom',
      height: 206,
      weight: 113,
      image: '/images/jerick.jpg',
    },
    {
      name: 'Gelwin Austria',
      jerseyNumber: 12,
      position: 'Security Guard',
      height: 192,
      weight: 84,
      image: '/images/gelwin.jpg',
    },

    {
      name: 'Kian Sep Cane',
      jerseyNumber: 15,
      position: 'Coach',
      height: 191,
      weight: 84,
      image: '/images/kian.jpg',
    },

    {
      name: 'Justine Ariate',
      jerseyNumber: 30,
      position: 'Cheer Leader',
      height: 189,
      weight: 84,
      image: '/images/justine.jpg',
    },

    {
      name: 'Necol Mirafuentes',
      jerseyNumber: 2,
      position: 'Guard',
      height: 191,
      weight: 84,
      image: '/images/necola.jpg',
    },


    {
      name: 'Jhon Lhenon Navarro',
      jerseyNumber: 30,
      position: 'Shooting Guard',
      height: 191,
      weight: 84,
      image: '/images/lhenon.jpg',
    },

    {
      name: 'Chiristian Telumnpros',
      jerseyNumber: 50,
      position: 'Tig koan sa snacks',
      height: 191,
      weight: 84,
      image: '/images/melon.jpg',
    },

    {
      name: 'Glenn Altivo',
      jerseyNumber: 45,
      position: 'Tig Trapo sa Singot',
      height: 186,
      weight: 82,
      image: '/images/gllenn.jpg',
    },

    
    {
      name: 'Jimmy Solis',
      jerseyNumber: 89,
      position: 'Tig refill ug tubig',
      height: 189,
      weight: 92,
      image: '/images/jimmy.jpg',
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Basketball Player Cards</h1>
      <div style={styles.cardContainer}>
        {players.map((player, index) => (
          <BasketballCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = { // Explicitly typing the styles object
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};
