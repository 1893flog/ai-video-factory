import { useState } from 'react';
import axios from 'axios';

function App() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');

  const generate = async () => {
    const res = await axios.post(
      'http://localhost:5000/generate-script',
      { topic }
    );

    setResult(res.data.data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI短视频工厂</h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="输入主题"
      />

      <button onClick={generate}>
        开始生成
      </button>

      <pre>{result}</pre>
    </div>
  );
}

export default App;
