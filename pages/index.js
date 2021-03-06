//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Services
//===============================================================================================================
import listPlaces from "../services/Places";

//===============================================================================================================
// #2 - Import * Next Head
//===============================================================================================================
import Head from 'next/head';

//===============================================================================================================
// #3 - Import * React Hook Forms
//===============================================================================================================
import { useForm } from "react-hook-form";

//===============================================================================================================
// #4 - Import * Material UI
//===============================================================================================================
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//===============================================================================================================
// #5 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

//===============================================================================================================
// #6 - Import * UI Components
//===============================================================================================================
import { Heading } from '../components/data-display/Heading';
import { Paragraph } from '../components/data-display/Typography';
import { Container } from '../components/layout/Container';
import { CardList } from '../components/ui/CardList';
import { ModalDialog } from '../components/feedback/Dialog';
import { TextField } from "../components/form/TextField";
import { TextArea } from "../components/form/TextArea";
import { Button, ButtonIcon, ButtonAdd } from '../components/form/button';

//===============================================================================================================
// #8 - Import * Styled Components Module
//===============================================================================================================
import { WrapGridForm } from "../styled/3-module/place";

//===============================================================================================================
// #9 - Create Styled Componente Element
//===============================================================================================================
const WraperGrid = styled.section`
  margin-top: 16px;
`;

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const places = new listPlaces();

function Home({ data }) {

  // * Refs
  const refModal = React.useRef();

  // * States
  const [open, setOpen] = React.useState(false);

  // * React Hook Forms
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // * Handle Form
  const onSubmit = (data, e) => {

    // * Close Dialog
    refModal.current.closeModal();

    // * Open Alert
    setTimeout(() => setOpen(true), 500);

    // * Reset Form After Submit
    e.target.reset();

  };

  // * Close Alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalDialog ref={refModal}>
        <Heading title="Silva Lanches" color="#F3AA00" textAlign="left" fontSize="2.25rem" />

        <WrapGridForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12}>
                <TextField
                  placeholder="Prato"
                  label="Nome do prato"
                  type="text"
                  error={errors.name && ("Digite o nome do prato.")}
                  {...register("name", { required: true })}
                />
              </Grid>
              <Grid item md={4} xs={5}>
                <TextField
                  append="R$"
                  label="Valor"
                  placeholder="0,00"
                  type="number"
                  error={errors.price && ("Digite o valor do prato.")}
                  {...register("price", { required: true })}
                  pattern="^-?[0-9]\d*\.?\d*$"
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <TextArea
                  append="R$"
                  label="Descri????o do prato"
                  placeholder="Insira uma descri????o"
                  type="text"
                  error={
                    errors.description && errors.description.type === "required" && ("Digite uma descri????o.") ||
                    errors.description && errors.description.type === "maxLength" && ("Limite m??ximo de 200 caracteres.")
                  }
                  {...register("description", { required: true, maxLength: 200 })}
                />
              </Grid>

              <Grid item md={12} xs={12}>
                <Button buttonColor="#F3AA00" type="submit" text="Salvar" disabled={false} />
              </Grid>
            </Grid>
          </form>
        </WrapGridForm>
      </ModalDialog>

      <Container>
        <Heading title="Lugares" color="#F3AA00" textAlign="left" fontSize="2.25rem" />
        <Paragraph color="#FFFFFF" textAlign="left" fontSize="1rem">
          6 lugares cadastrados
        </Paragraph>

        <WraperGrid>
          <Grid container spacing={2}>
            {data.map(({ _id, name, menuItems }) => (
              <Grid key={_id} item md={4} xs={12}>
                <CardList title={name} text={`${menuItems?.length} pratos`} url={`/place/${_id}`} onClick={() => refModal.current.openModal()} />
              </Grid>

            ))}
          </Grid>
        </WraperGrid>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Novo prato adicionado!
          </Alert>
        </Snackbar>
      </Container>
    </div>
  )
}

Home.getInitialProps = async () => {

  const response = await places.listPlaces();
  const data = await response.data;

  return { data }

}

export default Home;