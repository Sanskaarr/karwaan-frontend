import styles from './style.module.css'
import {clientData} from "@/constants/ClientsData"
export default  function Client() {

  return (
    <div className={styles.clientPage}>
            <h3 style={{textAlign:"center",color: "black", marginTop:"67px",fontSize:"28px"}}>Our Clients</h3>
        <div className={styles.clients}>
          {
            clientData.map((data)=>{
              return (<div className={styles.oneCard} key={data.id}>
                <div className={styles.blogCardImg}>
              <img className={styles.companyLogo} src={data.imgSrc} alt={"image"+data.id}/>
                </div>
              <div className={styles.companyName}>{data.name}</div>
              </div>)
            })
          }
        </div>
    </div>
  )
}
