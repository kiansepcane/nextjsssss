import Image from 'next/image';
import { CSSProperties } from 'react'; // Import CSSProperties from react

interface Player {
  name: string;
  jerseyNumber: number;
  position: string;
  height: number;
  weight: number;
  image: string;
}

const BasketballCard = ({ player }: { player: Player }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        {/* Using Next.js Image component */}
        <Image src={player.image} alt={`${player.name} image`} width={200} height={200} />
      </div>
      <div style={styles.info}>
        <h2 style={styles.name}>{player.name}</h2>
        <p style={styles.details}>Jersey Number: {player.jerseyNumber}</p>
        <p style={styles.details}>Position: {player.position}</p>
        <p style={styles.details}>Height: {player.height} cm</p>
        <p style={styles.details}>Weight: {player.weight} kg</p>
      </div>
    </div>
  );
};



const styles = {
  card: {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  } as CSSProperties,

  imageWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '10px',
  } as CSSProperties,

  info: {
    marginTop: '10px',
  } as CSSProperties,

  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  } as CSSProperties,

  details: {
    margin: '5px 0',
    fontSize: '14px',
  } as CSSProperties,
};


export default BasketballCard;
