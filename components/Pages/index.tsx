import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "ltr", minHeight: "11vh"}}>

      <br-x />
      <Window title={"Weather"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" , backgroundColor:"whitesmoke"}}>

        <br-xx />

        <div style={{ width: "100%", height: 30, backgroundColor: "darkgray", borderRadius: 10, textAlign: "center" }}>
          <br-xx />
          Feels like : {(props.p.FeelsLikeC)} °C
        </div>

        <br-xx />

        <div style={{ width: "100%", height: 30, backgroundColor: "darkgray", borderRadius: 10, textAlign: "center"}}>
          <br-xx />
          Humidity : {(props.p.humidity)} %RH
        </div>

        <br-xx />
        
        <div style={{ width: "100%", height: 30, backgroundColor: "darkgray", borderRadius: 10, textAlign: "center" }}>
          <br-xx />
          Cloudy : {(props.p.cloudcover)}
        </div>

        <br-xx/>

        <div style ={{width: "100%", height: 30, backgroundColor: "darkgray", borderRadius: 10, textAlign: "center"}}>
          <br-xx/>
          Pressure : {(props.p.pressure)}
        </div>

        <br-xx/>

        <div style ={{width: "100%", height: 30, backgroundColor: "darkgray", borderRadius: 10, textAlign: "center"}}>
          <br-xx/>
          Date : {(props.p.localObsDateTime)}
        </div>

        <br-xx/>
        <div style = {{textAlign:"center"}}>Turing team</div>




      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://cdn.turing.team/research/api/weather/")
  let h = await res.json()
  let p = h.current_condition[0]

  console.log(p)



  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}