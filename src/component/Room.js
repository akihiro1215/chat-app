import { Button, TextField } from '@material-ui/core';
// Room.js
import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../AuthService';
import firebase from '../config/firebase';
// import {AuthContext} from '../AuthService'



const Room = () => {
    // const user = useContext(AuthContext);
    const onlogOutClick = () => {
        firebase
        .auth()
        .signOut()
        .then(() => console.log('ログアウト!'))
        .catch(error => console.log(error));
    };
    const [messages, setMessages] = useState([]);
    const [context, setContext] = useState('');
    const user = useContext(AuthContext);

    useEffect(() => {
        firebase.firestore()
        .collection("messages")
        .onSnapshot(snapshot => {
            const messages = snapshot.docs.map(doc => {
                console.log({...doc.data()});
                return {...doc.data(), id: doc.id};
            });

            setMessages(messages);
        });
    }, []);


    const onSubmit = e => {
        e.preventDefault();
        if (context.trim() !== "") {
        firebase
        .firestore()
        .collection("messages")
        .add({ context, username: user.displayName })
        .then(() => console.log("送信完了"))
        .catch(error => console.log(error));
        }
        setContext("");
    }
    return (
        <>
            <h1>Room</h1>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                    <p>{message.context}</p>
                    <p>作成者： {message.username}</p>
                    </li>
                  ))}
            </ul>
            <form style={{display: 'flex', alignItems: 'center'}}onSubmit={onSubmit}>
            
            <TextField id="message" label="Message" variant="outlined" value={context} onChange={e => setContext(e.target.value)}/>
            <Button type="submit" variant="contained" color="primary">送信</Button>
            </form>
            <div>
            <Button variant="contained" color="primary" onClick={onlogOutClick}>ログアウト</Button>
            </div>
            
        </>
    );
};

export default Room;