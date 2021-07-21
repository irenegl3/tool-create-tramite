import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
const estadosOriginal = require('../../../../../back/enums/Tramite_1/enum.json').estadosTramite;

var estadosNuevo = {};
estadosOriginal.forEach(estado=>{
    estadosNuevo[[estado.estadoTexto]] = estado.id;
})

export default class InfoPeticion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cancelado;
        if (estadosNuevo.CANCELADO == this.props.peticion.estadoPeticion) {
            cancelado = <li>Motivo de cancelación: {this.props.peticion.textCancel}</li>
        }
        return (
            <div>
                <Modal.Body>
                    <b>Resumen</b>
                    <ul>
                        <li>Email de contacto: {this.props.peticion.email}</li>
                        <li>Plan: {this.props.peticion.planNombre} ({this.props.peticion.planCodigo})</li>
                        <li>Estado Actual: {this.props.peticion.estadoPeticionTexto}</li>
                        <li>Última actualización: {this.props.peticion.fecha}</li>
                        {cancelado}
                    </ul>
                </Modal.Body>
            </div>
        );
    }
}