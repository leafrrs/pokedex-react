import "./styleHeader.scss";
import pokeball from '../../assets/images/pokeball.svg'

export default function Header() {


  return (
    <div className="header">
      <div className="header-logo">
        <img src={pokeball} alt='' />
      </div>
      <div className="header-pesquisa">
        <input type="text" placeholder="pesquise o pokemon" />
      </div>
      <div className="header-menu">
        <a href="#">pokédex</a>
        <a href="#">pokedex</a>
        <a href="#">pokedex</a>
      </div>
    </div>
  );
}
