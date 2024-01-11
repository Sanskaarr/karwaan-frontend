'use client'
import Navbar from '../../component/navbar/Navbar';
import NoRightClick from '@/component/NoRightClick';
import { usePathname } from 'next/navigation';
export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <>
    {!pathname.includes("/gallery")&&<Navbar />}
      <NoRightClick/>
      {children}
      </>
  )
}
