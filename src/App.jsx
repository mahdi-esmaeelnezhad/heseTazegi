import axios from 'axios';
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import ShareImg from "./img/Vector.png"
import classes from "./App.module.scss";
import AccordionItem from './component/AccordionItem';

const App = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [load, setLoad] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get("https://api-dev.hesetazegi.com/FAQ/List")
      .then((res) => {
        setLoading()
        let getApi = res.data.content.items.map((item) => {
          return (
            <div>
              <Accordion className={classes.accordion}>
                <AccordionItem className={classes.accordionItem} header={item.title}>
                  <div className={classes.lineAccordion}>
                  </div>
                  <p className={classes.textAccordion}>
                    {item.description}
                  </p>
                </AccordionItem>
              </Accordion>
            </div>

          )
        })
        setData(getApi)
      })
      .catch((err) => {
        let getApi = (
          <p className={classes.error}>ERROR SERVER</p>
        )
        setError(getApi)
        setLoading()
      })
    if (!load) {
      let getApi = <p className={classes.error}>...Loading</p>
      setLoading(getApi)
    } else {
      let getApi = <p></p>
      setLoading(getApi)
    }
  }, [setData])
  return (
    <div>
      <div className={classes.title}>
        <p className={classes.titleText}>سوالات متداول</p>
        <div className={classes.divImg}>
          <img src={ShareImg} alt="" />
        </div>
      </div>
      <p className={classes.textQes}>
        <span className={classes.textHome}> صفحه اصلی {"<"} </span>
        سوالات متداول
      </p>
      <div className={classes.line}></div>
      <div className={classes.containerAccordion}>{data}</div>
      <div className={classes.errorContainer}>{error}</div>
      <div className={classes.errorContainer}>{loading}</div>
    </div>
  );
}

export default App;

