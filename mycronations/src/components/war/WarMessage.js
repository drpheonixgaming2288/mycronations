import React, {useState} from 'react';
import Swal from 'sweetalert2';

export default function WarMessage(props) {
    //props//
    //nation
    //move
    //warCost

    const [luck, setLuck] = useState(Math.floor(Math.random() * 5 + 1));
    const [damage, setDamage] = useState({
        armyDamage: 10 * luck,
        airForceDamage: 20 * luck,
        droneStrikeDamage: 30 * luck,
        nukeDamage: 100 * luck,
    })

    
    const calculateDamage = () => {
        switch (props.move) {
            case 'army':
                return damage.armyDamage;
            case 'airforce':
                return damage.airForceDamage;
            case 'dronestrike':
                return damage.droneStrikeDamage;
            case 'nuke':
                return damage.nukeDamage;
            case 'retreat':
                return 0;
            default:
                break;
        }
    }

    const handleAttack = () => {
    
    }

  return (
    <div className='container'>
        <div className="row py-3" style={{borderBottom: '5px solid grey'}}>
            <div className={"col-2 text-center p-0"}>
                <img className={props.order === 'first' ? '' : 'd-none'} src={props.nation.flag} alt="Nation's flag" style={{width: 50, height: 50}} />              
            </div>
            <div className={'col-8 pt-3'} style={props.order === 'first' ? {} : {textAlign: 'right'}}>
                {props.nation.shortName} commands {props.move} and deals {calculateDamage()} damage!
            </div>
            <div className={"col-2 text-center p-0"}>
                <img className={props.order !== 'first' ? '' : 'd-none'} src={props.nation.flag} alt="Nation's flag" style={{width: 50, height: 50}} />              
            </div>
        </div>
    </div>
  )
}
