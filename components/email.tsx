import { RefObject, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from 'styles/email.module.scss'

interface form {
  from: string
  message: string
  subject: string
  index: string
}

interface data extends form {
  "form-name": string
  [key: string]: string
}

interface error {
  message: string
  ref: RefObject<HTMLInputElement>
  type: string
}

export const Email:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSuccess, setFormSuccess] = useState(false);
  const encode = (data:data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  const onSubmit = (form:form) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }) 
    })
    .then(() => setFormSuccess(true))
    .catch(error => alert(error));
  }

  const fromInput = { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ };
  const printError = ({ type }:error) => {    
    switch (type) {
      case "pattern" : return "This email address isn't valid"
      case "required" : return "Please fill in your email address"
      default: return ""
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        { formSuccess && "success!" }
        <div className={styles.topbar}>
          <button className={styles.close_icon}>close</button>
          <button className={styles.minimise_icon}>minimise</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} data-netlify="true" name="contact" method="post">
          <div className={styles.wrap_form}>
            <div className={styles.tag_row}>
              <div className={styles.label}>To</div>
              <div className={styles.tag}>hello@paulh.biz</div>
            </div>
            <div className={styles.row}>
              <label htmlFor="subject">Subject</label>
              <input {...register("subject")} type="text" name="subject" id="subject" placeholder="Hey there!" />
            </div>
            <div className={styles.row}>
              <label htmlFor="from">From</label>
              <input {...register("from", fromInput)} type="text" name="from" id="from" placeholder="friendly@visitor.org" />
              { errors.from && printError(errors.from) }
            </div>
            <textarea {...register("message")} className={styles.textarea} name="message" id="message" placeholder="Message" cols={30} rows={10} />
            <div className="text-align-right">
              <button className={styles.submit} type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
