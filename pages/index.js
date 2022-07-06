import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Homie() {
  return (
    <>
      <div className={styles.home}>
        <>
          <table>
            <tr>
              <th>ID</th>
              <th>Author</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria Anders</td>
            </tr>
          </table>
        </>
      </div>
      <hr />
      <div className={styles.slotparent}>
        <div className={styles.slotchild}>
          <center>SLOT 1</center>
        </div>
        <div className={styles.slotchild}>
          <center>SLOT 2</center>
        </div>
      </div>
    </>
  );
}
