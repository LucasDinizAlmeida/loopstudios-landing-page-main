import { Header } from "../components/Header";


export function Home() {

  return (
    <main className="w-full">
      <div className="bg-mobile-hero sm:bg-desktop-hero bg-cover brightness-75">
        <div className="w-full max-w-[1440px] mx-auto p-9 pt-12">
          <Header />

          <div className="p-6 border-2 border-white my-24 max-w-full sm:max-w-fit">
            <h1 className="text-white font-josefin text-3xl sm:text-7xl">
              IMMERSIVE <br />
              EXPERIENCES <br />
              THAT DELIVER
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}