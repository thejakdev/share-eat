//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Services
//===============================================================================================================
import listPlaces from "../../services/Places";

//===============================================================================================================
// #2 - Import * Next Router
//===============================================================================================================
import { useRouter } from 'next/router'

//===============================================================================================================
// #3 - Import * Next Head
//===============================================================================================================
import Head from 'next/head';

//===============================================================================================================
// #4 - Import * React Hook Forms
//===============================================================================================================
import { useForm } from "react-hook-form";

//===============================================================================================================
// #5 - Import * Materal UI
//===============================================================================================================
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//===============================================================================================================
// #6 - Import * UI Components
//===============================================================================================================
import { Heading } from '../../components/data-display/Heading';
import { Paragraph } from '../../components/data-display/Typography';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Button, ButtonIcon, ButtonAdd } from '../../components/form/button';
import { ModalDialog } from '../../components/feedback/Dialog';
import { TextField } from "../../components/form/TextField";
import { TextArea } from "../../components/form/TextArea";

//===============================================================================================================
// #7 - Import * Styled Components Module
//===============================================================================================================
import { WraperGrid, WrapHeading, Column, WrapGridForm } from "../../styled/3-module/place";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const urlId = () => {
  // * Next Router
  const router = useRouter();
  const { place } = router.query

  return place;
}

const places = new listPlaces();

function Place({ data, error }) {

  // * Refs
  const refModal = React.useRef();

  // * States
  const [open, setOpen] = React.useState(false);

  // * Next Router
  const router = useRouter()

  // * React Hook Forms
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

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

  // * Set consts
  const { name, menuItems } = { ...data }

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
        <WrapHeading>
          <Column>
            <ButtonIcon buttonColor="transparent" onClick={() => router.push("/")}>
              <img src="/images/icon-chevron-left.png" />
            </ButtonIcon>
          </Column>
          <Column>
            <Heading title={name} color="#F3AA00" textAlign="left" fontSize="2.25rem" />
            <Paragraph color="#FFFFFF" textAlign="left" fontSize="1rem">
              {menuItems?.length} pratos
        </Paragraph>
          </Column>
        </WrapHeading>

        <WraperGrid>
          <Grid container spacing={2}>
            {menuItems.map(({ name, description, price }) => (
              <Grid item md={4} xs={12}>
                <Card title={name} price={`R$ ${price}`} text={description} />
              </Grid>
            ))}
          </Grid>
        </WraperGrid>

        <ButtonAdd buttonColor="#F3AA00" onClick={() => refModal.current.openModal()} />

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Novo prato adicionado!
          </Alert>
        </Snackbar>

      </Container>
    </div>
  )
}

Place.getInitialProps = async (ctx) => {

  // * Next Router
  try {
    const response = await places.listPlaceId(ctx.query.place);
    const data = await response.data;

    return { data }

  } catch (error) {
    return { error }
  }

}

export default Place;
