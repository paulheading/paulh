import styles from 'styles/email.module.scss'

export const Email:React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.topbar}>
          <button className={styles.close_icon}>close</button>
          <button className={styles.minimise_icon}>minimise</button>
        </div>
        <div className={styles.form}>
          <div className={styles.wrap_form}>
            <div className={styles.tag_row}>
              <div className={styles.label}>To</div>
              <div className={styles.tag}>hello@paulh.biz</div>
            </div>
            <div className={styles.row}>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="Hey there!" />
            </div>
            <div className={styles.row}>
              <label htmlFor="from">From</label>
              <input type="text" name="from" id="from" placeholder="friendly@visitor.org" />
            </div>
            <textarea className={styles.textarea} name="message" id="message" placeholder="Message" cols={30} rows={10} />
            <div className="text-align-right">
              <button className={styles.submit} type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
