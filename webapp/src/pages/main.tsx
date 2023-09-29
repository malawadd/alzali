import logo from './../logo.svg';
import { Connect } from '../components/connect';
import { Network } from '../components/network';

import './main.css';

export function Main() {
        return (
 
            <section className="layout">
                <div className="content">
                    <div className="header-h">
                        <div className="header-item">
                            <Connect />
                            <Network />
                        </div>
                    </div>
                </div>
            </section>
         
        );

}