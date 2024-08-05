import logo_src from '../assets/images/logo.png'

const logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="h-9 mt-2 w-auto"
        src= {logo_src}
        alt="Stock Buddy"
      />
  </div>
  )
}

export default logo