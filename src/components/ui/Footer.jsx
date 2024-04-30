export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
        <div className="flex space-x-1" >
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">Prabhu Satyam</span>
        </div>
        <div>
          <span className=" text-body-4 2xl:text-body-1">Site designed and coded with ❤️‍🔥</span>
        </div>
      </div>
    <button onClick={toTop}
    className=" rounded-full animate-bounce focus:animate-none hover:animate-none inline-flex text-md  bg-accent-300 mt-3 px-8 py-3 text-secondary-200 font-grotesk tracking-wide bottom-2 ">
    <span className="ml-2">Back To Top </span>
    </button>
          </footer>
  );
}
