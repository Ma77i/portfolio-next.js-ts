
const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-10 rounded-t-2xl shadow-5xl ">
      <p className="pt-5">Copyright © Matias Silva</p>
      <span>{new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer