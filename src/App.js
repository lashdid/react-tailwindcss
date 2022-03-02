import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="flex bg-gray-800 h-screen">
      <header className="flex flex-col items-center justify-center space-y-5 mx-auto">
        <img src={logo} className="App-logo w-[20rem]" alt="logo" />
        <p className="text-white text-3xl font-bold">
          React + Tailwind CSS
        </p>
        <p className="text-white text-2xl font-bold">
          Don't Forget To Star My Repo 😉
        </p>
        <a
          className="text-[#6BDBFB] hover:underline text-xl"
          href="https://github.com/lashdid19"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/lashdid19
        </a>
      </header>
    </div>
  );
}
