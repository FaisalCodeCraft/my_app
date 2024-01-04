import { db } from 'config/firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const Collections = () => {
    const [users, setUsers] = useState([])
    const [updateUsersEmail, setUpdateUsersEmail] = useState("")
    const [updateUsersfName, setUpdateUsersfName] = useState("")
    const [updateUserslName, setUpdateUserslName] = useState("")
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [email, setEmail] = useState("")

    // refrence
    const usersCollectionRef = collection(db, "users")

// ADD USERS
    const onSubmitUser = async (e) => {
        e.preventDefault()

        try {
            await addDoc(usersCollectionRef, {
                fName: fName,
                lName: lName,
                email: email,
            })
            // console.log(fName)
        } catch (error) {
            console.log(error)
        }
    };
   
    const delteUser = async (id) => {
        // e.preventDefault()
        try {
            const userDoc = doc(db, "users", id,)
            await deleteDoc(userDoc)
        } catch (error) {
            console.log(error)
        }
    };
    const updateUser = async (id) => {
       try {
        const userDoc = doc(db, "users", id,)
        await updateDoc(userDoc,{
            email:updateUsersEmail,
            fName:updateUsersfName,
            lName:updateUserslName,
        })
        
       } catch (error) {
        console.log(error)
       }
    };
    useEffect(() => {
        const getUsers = async () => {

            try {
                const userdata = await getDocs(usersCollectionRef);
                const filterData = userdata.docs.map((doc) => ({
                    ...doc.data(), id: doc.id,
                }))
                // console.log(filterData)
                setUsers(filterData)
            } catch (error) {

            }
        }

        getUsers();
    }, [onSubmitUser, delteUser,updateUser]);



    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ width: "300px", height: "180px", margin: "20px auto", }}>
                <fieldset>
                    <legend>COLLECTIONS</legend><br />
                    <input onChange={(e) => setfName(e.target.value)} type="fName" placeholder='First Name' /><br /><br />
                    <input onChange={(e) => setlName(e.target.value)} type="lName" placeholder='Last Name' /><br /><br />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' /> <br /><br />
                    <button onClick={onSubmitUser}>Submit User</button>
                </fieldset>
            </form>
            <div>
                {users.map((user, id) => (
                    <div key={id}>
                        <h3>{`${user?.fName}  ${user?.lName}`}</h3>
                        <h4>{user.email}</h4>
                        <input onChange={(e) => setUpdateUsersEmail(e.target.value)} type="email" placeholder='Email' /> <br /><br />
                        <input onChange={(e) => setUpdateUsersfName(e.target.value)} type="namer" placeholder='Name' /> <br /><br />
                        <input onChange={(e) => setUpdateUserslName(e.target.value)} type="namer" placeholder='lName' /> <br /><br />

                        <button onClick={() => delteUser(user.id)}>Delte User</button>
                        <button onClick={() => updateUser(user.id)}>Update User</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Collections