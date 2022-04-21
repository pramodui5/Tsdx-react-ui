import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import { deepmerge } from '@mui/utils';

import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

export interface Props {
    /** Name of the input field */
    label : string;

    /** Helper text of the input field */
    helperText? : string;

    /** Default value of the input field */
    defaultValue? : string;

    /** Id of the input field */
    id : string;

    /** optional needs to be string --test*/
    variant? : string;

    /** Custom styles object */
    theme? : object
}

const baseTheme = createTheme({
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    font: 'Open Sans',
                    fontSize: '1rem',
                    color: '#333333',
                    backgroundColor: '#eef2f8',
                    textTransform: 'none',
                    fontWeight: 400,
                    borderRadius: '12px',
                },
            },
        },
    },
});

const getDeepMergeObj = (themeObj : any) =>{
    return createTheme({
        components: {
            MuiInput: {
                styleOverrides: {
                    root: {
                       ...themeObj
                    },
                },
            },
        },
    });
}


/**
 * A custom MUI Input component.
 */
export const EnbdInput: FC<Props> = ({ id, label, helperText, defaultValue, theme }) => {

  return (
    <div>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={deepmerge(baseTheme, getDeepMergeObj(theme))}>
                <TextField
                    id={`${id}`}
                    label={`${label}`}
                    defaultValue={`${defaultValue}`}
                    helperText={`${helperText}`}
                    variant="filled"
                /> 
            </ThemeProvider>
        </StyledEngineProvider>
    </div>
    
  );
};