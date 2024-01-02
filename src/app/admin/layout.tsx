import AdminNav from '@/component/adminNavbar/AdminNav';
export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >
      <AdminNav />
      {children}
      </div>
  )
}
