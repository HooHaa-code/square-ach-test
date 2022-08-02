import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
// import { Button, Dialog, TextField } from '@mui/material';
import { loadSquareSDK } from '../squareSDKLoader';

const SquareACHWidget = () => {
    const [ach, setAch] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const setupACHWidget = async () => {
        const localpayments = window.Square.payments(
            process.env.REACT_APP_SQUARE_APPLICATION_ID,
            process.env.REACT_APP_SQUARE_ACCESS_TOKEN
        );
        const localach = await localpayments.ach();

        setAch(localach);
    };

    useEffect(() => {
        const load = async () => {
            await loadSquareSDK()
            setupACHWidget()
        }
        load()
    }, []);

    const tokenize = async () => {
        const options = { accountHolderName: `${firstName} ${lastName}` };
        const result = await ach.tokenize(options);
        console.log(result)
    };

    return (
        <>
            <TextField
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                label="First Name"
            />

            <TextField
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                label="Last Name"
            />

            <Button variant="contained" onClick={tokenize}>
                Pay with Bank Account
            </Button>
        </>
    );
};

export default SquareACHWidget;
