export function Header() {

  return (
    <div className="flex flex-row">
      <div>
        <img src="./images/logo.svg" alt="logo" />
      </div>

      <div className="flex flex-row gap-6 ml-auto max-sm:hidden">
        <a href="#" className="font-alata text-white text-base hover:underline">About</a>
        <a href="#" className="font-alata text-white text-base hover:underline">Careers</a>
        <a href="#" className="font-alata text-white text-base hover:underline">Events</a>
        <a href="#" className="font-alata text-white text-base hover:underline">Products</a>
        <a href="#" className="font-alata text-white text-base hover:underline">Support</a>
      </div>
    </div>
  )
}