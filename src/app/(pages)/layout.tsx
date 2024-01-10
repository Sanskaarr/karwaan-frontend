import Navbar from '../../component/navbar/Navbar'
import NoRightClick from '@/component/NoRightClick';
export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    < >
      <Navbar />
      <NoRightClick/>
      {children}
      </>
  )
}
