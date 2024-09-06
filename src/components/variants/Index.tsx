import Typography from "../atom/typography/Typography"

function Index() {
  return (
    <div>I
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
    </div>

    // function App() {
    //   const [isLoading, setIsLoading] = useState(false)
    //   const handleOnClick = () => {
    //     setIsLoading(true)
    //   }
    // }

    //   <Button
    // variant='secondary'
    // variantType='filled'
    // type="button"
    // classes='shuhaib'
    // autoFocus
    // onClick={handleOnClick}
    // >
    //   Subscribe web diary
    // </Button>

    // <hr className='mt-10 mb-5'/>
    // <Button
    // type='submit'
    // variant='tertiary'
    // variantType='filled'
    // onClick={handleOnClick}
    // isLoading={isLoading}
    // >
    //   Make Payment
    // </Button>

  )
}

export default Index