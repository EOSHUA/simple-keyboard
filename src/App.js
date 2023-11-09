
import './App.css';

function App() {
  const lettersEnglish = "abcdefghijklmnopqrstuvwxyz".split("");
  const lettersHebrew = "אבגדהוזחטיכךלמנסעפףצץקרשת".split("");
  const numbers = "1234567890".split("");
  return (
    <div className="App">
      {lettersEnglish.map((lettersEnglish, index) => (
        <lettersEnglish key={index} lettersEnglish={lettersEnglish} />
      ))}


      <p className="App-intro">
        {lettersEnglish}
      </p>
      <p className="App-intro">
        {lettersHebrew}
      </p>
      <p className="App-intro">
        {numbers}
      </p>

    </div>
  );
}

export default App;
