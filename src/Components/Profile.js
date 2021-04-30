import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

const Profile = (props) => {
    console.log(props)
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProfile = async () => {
            //node js asynchrene ya3ni mayetteblokech (yani may5allich haja te5dem hiya baad yet3adda) hh errequet elli ta7thar tetsarba
            //thamma props jeya lel composant hetha mawjoud frouter

            console.log(props)
            try {
                const res =await axios.get(`https://jsonplaceholder.typicode.com/users/`+ props.match.params.userID ) ; //jebna eddata
                //axios : esem ellibrerie elli sabbineha ,,,,, wathifetha teb3ath des requette http (get,post,put,delete)crut(creat,read,update,delete)
                //await:tforsih enno yestanna 7atta tjib les donner (5aterna ne5dmo b async)

                console.log(res)
                setProfile(res.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
            
        }
        getProfile();
    }, [props.match.params.userID]) //props.match.params.userID : 5ater elcomposant hetha mahouch ye5dem f mound , ye5dem k ena namel click al button ,ysir l'update ,,,,donc n7ebbo ytabba3 l'ID ta3 l user
    return (
        <div>
            {loading ?
            (<Spinner animation="border"/>)
            :(<div>
            <UserCard user={profile}/>
            </div>)}
            
            </div>
    )
}

export default Profile
