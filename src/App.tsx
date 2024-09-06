import './App.css'
import Typography from './components/atom/typography/Typography';
import Media from './components/media/Media';
import leaf from './assets/leaf.png'
import video from './assets/video3.mp4'

function App() {
  return (
    <>
      <Typography
        tag='h1'
        text='Shuhaib World : Media Components'
        className='mb-8 text-[30px] font-bold text-white'
      />
      <hr className='mt-10 mb-5 border-tertiary' />

      <Media
        type='image'
        src={leaf}
        alt='leaf'
        containerClasses='w-[400px] h-[400px] rounded'
        mediaClasses='w-[400px] h-[400px] object-cover rounded'
      />

      <Typography
        tag='h1'
        text='Shuhaib World : video'
        className='mb-8 text-[30px] font-bold text-white'
      />

      <Media
        type='video'
        src={video}
        alt='leaf'
        containerClasses='w-[400px] h-auto rounded'
        mediaClasses='w-[400px] rounded object-cover'
        autoPlay
        muted
      />
    </>
  );
}
export default App
