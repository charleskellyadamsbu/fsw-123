import Card from './components/Card'

function App() {
  return (
    <div className="container">
      <Card title="Title" subtitle="Sub Title" description="Hello World" color="red"/>
      <Card title="Title" subtitle="Sub Title" description="Hello World" color="orange"/>
      <Card title="Title" subtitle="Sub Title" description="Hello World" color="yellow"/>
      <Card title="Title" subtitle="Sub Title" description="Hello World" color="green"/>
    </div>
  );
}

export default App;
