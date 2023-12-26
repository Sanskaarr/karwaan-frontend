import './globals.css'
import {Poppins} from 'next/font/google'
// import '../style/about.css'
// import '../style/client.css'
// import '../style/clifooter.css'
// import '../style/Cnavbar.css'
// import '../style/contact.css'
// import '../style/footer.css'
// import '../style/gallery.css'
// import '../style/gallnav.css'
// import '../style/home.css'
// import '../style/min.css'
// import '../style/navbar.css'
// import '../style/responsive.css'
// import '../style/shop.css'
// import '../style/style.css'
// import '../style/style1.css'
// import '../style/video.css'
// import '../style/videofoot.css'
// import '../style/videonav.css'
const poppins=Poppins({ 
  subsets:["devanagari","latin","latin-ext"],
  weight:["100","200","300","400","500","600"]
});
export const metadata = {
  title: 'KARWAAN',
  description: 'Karwaan is the brainchild of our Cofounders; Oshank Soni and Harshit Patel who morphed their dream into a reality in 2018. They travelled across the length and breadth of our country curating experiences and stories in form of picturesque Photos and dreamy Videos.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={poppins.className} suppressContentEditableWarning={true} suppressHydrationWarning={true}>
   
        {children}
         </body>
    </html>
  )
}
