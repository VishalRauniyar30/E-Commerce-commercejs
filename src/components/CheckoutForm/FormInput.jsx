import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function FormInput({ label, name }) {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                name={name}
                control={control}
                defaultValue=''
                render={({ field }) => (
                    <TextField
                        { ...field }
                        color='secondary'
                        fullWidth
                        label={label}
                        required
                    />
                )}
            />
        </Grid>
    );
};

export default FormInput;
