import Logo from '../assets/logo.png';
import Shield from '../assets/shield.svg';
import SendReceive from '../assets/send-receive.svg';

import { Connect } from '../components/connect';
import { Network } from '../components/network';
import { useNetwork } from 'wagmi';

import AddressProvider from '../components/address';

import { AlzilID } from '../components/alzilid';


import './main.css';

export function Main() {
    const { chain } = useNetwork();
        return (
 
            <section className="layout">
                <div className="content">
                    <div className="header-h">
                        <div className="header-item">
                            <img className="logo logo-bg" src={Logo} alt="Alzil" />
                            <img
                            className="logo logo-default"
                            src={Logo}
                            alt="Alzil"
                            onClick={() => (document.location.href = '/')}
                            />
                        </div>
        
                        <div className="header-item">
                            <Connect />

                            <Network />
                        </div>
                    </div>

                    
                    
                    <div className="promo large-block">
                        <h1>
                        Introducing <span className="promo-accent">Anonymous</span> & <span className="promo-accent">Effortless</span>
                            <br /> Transfers on the {chain?.name.split(' ')[0] || 'RSK'} Network
                        </h1>

                        <div className="benefits">
                            <div className="item">
                                <img src={Shield} alt="" width={24} />
                                <p>
                                Safeguard Your Transactions with <strong>Untraceable&nbsp;Stealth Addresses</strong>{' '}
                                
                                </p>
                            </div>
                            <div className="item">
                                <img src={SendReceive} alt="" width={24} />
                                <p>
                                    Send and receive {chain?.nativeCurrency.symbol || 'tRBTC'}{' '}
                                    <strong>privately</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <AddressProvider>
                        <AlzilID />

                    </AddressProvider>
                </div>
            </section>
         
        );

}