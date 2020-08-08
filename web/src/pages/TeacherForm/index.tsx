import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';


function TeacherForm () {
    return(
        <div id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                </fieldset>
            </main>
        </div>
    );
}

export default TeacherForm;