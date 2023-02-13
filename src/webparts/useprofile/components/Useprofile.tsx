import * as React from 'react';
//import styles from './Useprofile.module.scss';
import { IUseprofileProps } from './IUseprofileProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import { getSP } from './pnpjsConfig';
import { SPFI} from '@pnp/sp';
import "@pnp/sp/profiles";
import Userprofilename from '../components/Userprofilename'


const Userprofile = (props:IUseprofileProps)=>{
  
  const[user,setUser] = React.useState<any>("");
  const[picurl,setPicurl] = React.useState<any>("");
  let _sp:SPFI = getSP(props.context);
  const getName = async() =>{
    let user  = (await _sp.web.currentUser()).Title
    const profile= await _sp.profiles.userProfile
     //const name=profile.DisplayName;
     let url=profile.PictureUrl;
    //console.log(profile)
   // console.log(name);
   // console.log(url);
    
    
    setUser(user)
    setPicurl(url);
    console.log(picurl)
  }
  React.useEffect(()=>{
   getName();
    
  },[])


  return(
    <div>
   <img src={picurl} style={{height:"50px",width:"60px",}} /><Userprofilename/>
   {user}
   
    </div>
  )
}
export default Userprofile





























// export default class Useprofile extends React.Component<IUseprofileProps, {}> {
//   public render(): React.ReactElement<IUseprofileProps> {
//     const {
//       description,
//       isDarkTheme,
//       environmentMessage,
//       hasTeamsContext,
//       userDisplayName
//     } = this.props;

//     return (
//       <section className={`${styles.useprofile} ${hasTeamsContext ? styles.teams : ''}`}>
//         <div className={styles.welcome}>
//           <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
//           <h2>Well done, {escape(userDisplayName)}!</h2>
//           <div>{environmentMessage}</div>
//           <div>Web part property value: <strong>{escape(description)}</strong></div>
//         </div>
//         <div>
//           <h3>Welcome to SharePoint Framework!</h3>
//           <p>
//             The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
//           </p>
//           <h4>Learn more about SPFx development:</h4>
//           <ul className={styles.links}>
//             <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
//             <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
//           </ul>
//         </div>
//       </section>
//     );
//   }
// }
