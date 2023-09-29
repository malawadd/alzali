import Logo from '../assets/logo.png';
import { Connect } from '../components/connect';
import { Network } from '../components/network';


import './main.css';

export function Main() {
        return (
 
            <section className="layout">
                <div className="content">
                    <div className="header-h">
                        <div className="header-item">
                            <img className="logo logo-bg" src={Logo} alt="Xcrypt" />
                            <img
                            className="logo logo-default"
                            src={Logo}
                            alt="Xcrypt"
                            onClick={() => (document.location.href = '/')}
                            />
                        </div>
                        
                        <div className="header-item">
                            <Connect />
                            <Network />
                        </div>
                    </div>
                </div>
            </section>
         
        );

}