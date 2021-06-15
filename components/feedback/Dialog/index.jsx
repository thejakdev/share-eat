//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React, { forwardRef, useImperativeHandle } from "react";

//==============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Header, HeaderLogo } from "./styles";

//===============================================================================================================
// #3 - Import * Material UI
//===============================================================================================================
import { Dialog, DialogContent, DialogTitle, useMediaQuery, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";

//==============================================================================================================
// #4 - Import * UI Components
//===============================================================================================================
import { ButtonIcon } from "../../form/button";
import { Logo } from "../../layout/Logo";

//===============================================================================================================
// #5 - Set Dialog Custom Styles
//===============================================================================================================
const useStyles = makeStyles({
    root: {
        padding: 0,
    }
});

//===============================================================================================================
// #6 - Create Material UI Modal Dialog
//===============================================================================================================
export const ModalDialog = forwardRef((props, ref) => {

    // * Material UI Styles - useMediaQuery
    const matches = useMediaQuery("(min-width:600px)");

    const classes = useStyles();

    // # Define States
    const [open, setOpen] = React.useState(false);

    // * Material UI Styles - useTheme
    const theme = useTheme();

    // # Define Material UI Modal Dialog Fullscreen on mobile 
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    // # Define Functions

    // * Set Material UI Modal Dialog Open
    const handleClickOpen = () => {
        setOpen(true);
    };

    // * Set Material UI Modal Dialog Close
    const handleClose = () => {
        setOpen(false);
    };

    // * Set Function Using useImperativeHandle();
    useImperativeHandle(ref, () => ({
        openModal: () => handleClickOpen(),
        closeModal: () => handleClose(),
    }));

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                fullWidth={true}
                open={open}
                maxWidth={"sm"}
                keepMounted
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                PaperProps={{
                    style: {
                        backgroundColor: '#464646',
                        boxShadow: 'none',
                    },
                }}
            >
                <DialogTitle classes={{
                    root: classes.root
                }} id="responsive-dialog-title">
                    <Header>
                        <ButtonIcon buttonColor="transparent" onClick={handleClose}>
                            {matches ? (
                                <img src="/images/icon-close.png" className="close-icon" />  
                            ) : (
                                <img src="/images/icon-chevron-left.png" />  
                            )}
                        </ButtonIcon>
                        <HeaderLogo>
                            <Logo /> 
                        </HeaderLogo>
                    </Header>
                </DialogTitle>
                <DialogContent className="dialog">
                    <Typography component={"span"} variant={"body2"}>
                        <div className="subtitle">
                            {props.subTitle}
                        </div>

                        {props.children}

                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
});