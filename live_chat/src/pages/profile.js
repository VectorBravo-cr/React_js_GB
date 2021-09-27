import React, {useEffect} from "react";
import {useState} from "react";
import ProfileCard from "../layouts/profileCard";
import {Card, CardHeader, Checkbox, FormLabel, Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {useDispatch, useSelector} from "react-redux";
import {changeStore} from "../actions/actionsList";


function Profile(){
    const dispatch = useDispatch();

    const profName = useSelector((state) => state.profileName);
    const stateStore = useSelector((state)=> state.useLocalStore)

    const [userProfile, setUserProfile]= useState('')
    const [checkedUseLocalStore, setCheckedUseLocalStore] = useState(false)


    const handleChangeLocalStoreState = () =>{
        setCheckedUseLocalStore((checkedUseLocalStore)=>!checkedUseLocalStore)
        dispatch(changeStore(checkedUseLocalStore))
    }

    useEffect(()=>{
        setUserProfile(profName)
        setCheckedUseLocalStore(stateStore)
    },[])
    return (
        <>
            <Card>
                <CardHeader>
                    <ProfileCard name={userProfile}/>
                </CardHeader>
                <CardContent>
                    <h3>
                        Это твой профиль)
                    </h3>
                    <h2>{userProfile}</h2>
                </CardContent>
                <CardContent>
                    <Grid container>
                        <Grid item>
                            <FormLabel color={'primary'}> Использовать локальное хранилище для чатов </FormLabel>
                        </Grid>
                        <Grid item>
                            <Checkbox checked={checkedUseLocalStore}
                                      onChange={handleChangeLocalStoreState}
                            />
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default Profile