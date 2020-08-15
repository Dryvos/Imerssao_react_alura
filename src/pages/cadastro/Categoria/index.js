import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Formfield from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome : '',
        descricao : '',
        cor : ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value){
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChange(e) {
        const { getAttribute, value } = e.target;
        setValue(
            getAttribute('name'),
            value
        );
    }


    return (
        <PageDefault>
            <h1>Cadastro de categorias : {values.nome} </h1>

            <form style={{}} onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>
                
                <Formfield 
                    label="Nome da categoria"
                    type="text"
                    name="nome"
                    value={ values.nome }
                    onchange={ handleChange }
                />

                <Formfield 
                    label="Descrição da categora"
                    type="textarea"
                    name="descricao"
                    value={ values.descricao }
                    onchange={ handleChange }
                />

                <Formfield 
                    label="Cor da categora"
                    type="color"
                    name="cor"
                    value={ values.cor }
                    onchange={ handleChange }
                />


            
                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
            {
                categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })
            }
            </ul>
            

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;