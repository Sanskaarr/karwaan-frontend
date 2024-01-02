import { Providers } from '@/redux/provider';
import './globals.css'
import {Poppins} from 'next/font/google'

const poppins=Poppins({ 
  subsets:["devanagari","latin","latin-ext"],
  weight:["200"]
  // weight:["100","200","300","400","500","600"]
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
      <body className={poppins.className} suppressContentEditableWarning={true} suppressHydrationWarning={true} >
      {/* <body className={poppins.className} suppressContentEditableWarning={true} suppressHydrationWarning={true} onContextMenu={false}> */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
