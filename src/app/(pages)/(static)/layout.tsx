import Footer from "@/component/footer/Footer"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div >
      {children}
      <Footer/>
    </div>
  )
}
