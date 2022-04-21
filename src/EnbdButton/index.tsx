import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { deepmerge } from '@mui/utils';

import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

export interface Props {
    /** Name of the button will be displayed */
    label : string;
    /** optional needs to be string --test*/
    variant? : string;
     /** Custom styles object */
    theme? : object

}
const baseTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    color: 'Black',
                    backgroundColor: '#ff9800',
                    textTransform: 'none',
                    fontWeight: 700,
                    '&:hover': {
                        backgroundColor: '#ff9800'
                    }

                },
            },
        },
    },
});

const getDeepMergeObj = (themeObj : any) =>{
    return createTheme({
        components: {
            MuiButton: {
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
 * A custom MUI button component.
 */
export const EnbdButton: FC<Props> = ({ label,theme }) => {

  return <div> 
        
      {/* <Button variant='contained'>{label}</Button> */}
           
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={deepmerge(baseTheme, getDeepMergeObj(theme))}>
                    <Button variant="contained">{label}</Button>
                </ThemeProvider>
            </StyledEngineProvider>
      </div>;
};
