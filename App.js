
import './App.css';
import Profile from './profile/Profile';
import hiImage from './Hi.jpg';
import Def from './profile/Def';
function App() {
  const infos={
    fullName: "Moufida El Bsir",
    bio: "Bac math/préparatoire MP/Diplôme d'ingénieurs-génie textile",
    profession:"Full stack JS Student"
  };
  const handleName1=(name)=>alert(`the profile user's name is ${name}`)
  return (
    <div className="App">
      <Profile data={infos} handleName={handleName1}>
        <img src={hiImage} alt='not found' />
      </Profile>
      {/* <Def /> */}
    </div>
  );
}

export default App;
