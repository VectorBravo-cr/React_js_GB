import React from "react";
import {Link} from "react-router-dom";
import {Card, CardHeader, CardContent, Grid, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "../assests/jss/sil_material/views/dashboardStyle.js"

const useStyles = makeStyles(styles);

const Main = () => {
    const classes = useStyles();

    return(
        <>
            <Card raised>
                <CardHeader>
                    <h5>Экран приветствия</h5>
                </CardHeader>
                <CardContent>
                    <Grid container >
                        <Grid item md='6'>
                            <Button variant="contained" color='primary'>
                                Чаты
                            </Button>
                        </Grid>
                        <Grid item md='6'>
                            {/*<Link to='/profile'>*/}
                                <Button variant="contained" color='primary' href='/profile'>
                                    Профиль
                                </Button>
                            {/*</Link>*/}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default Main