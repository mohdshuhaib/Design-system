import './App.css'
import Typography from './components/atom/typography/Typography'

function App() {
  return (<>
    <Typography
      tag="h1"
      text="Shuhaib World"
      className="title text-center"
      style={{ fontSize: "30px", color: "grey" }}
      role='heading'
      ariaLabel='shuhaib world'
      arialabelledBy='title'
    >
      <span>Nice to meet you</span>
    </Typography>
    <Typography tag="h2" text="Code With Me" />
    <Typography tag="p" text="The channel provide you a best knowledge" />
  </>
  );
}

export default App
