import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Button } from 'antd'
import Auth from '../../helpers/auth'
import appActions from '../../redux/app/actions'
import authAction from '../../redux/auth/actions'
import './style.css'

let { getUserList } = appActions
let { checkAuth } = authAction


export default function App(props) {
    let loading = useSelector(state => state.AppReducer.loading)
    let userData = useSelector(state => state.AppReducer.userData)
    let dispatch = useDispatch()

    useEffect(() => {
        let fetchUserData = async () => {
            try {
                await dispatch(getUserList())
            } catch (err) {
                console.log('dlfkjdlkfjdl')
            }
        }
        fetchUserData()
    }, [])

    let logOut = ()=>{
        dispatch(checkAuth(false))
        props.history.push('/login')
    }
    if (loading) {
        return <Spin />
    }
    return (
        <div>
            <table>
                <tr>
                    <th>
                        customer
                    </th>
                    <th>
                        approvalEmployee
                    </th>
                    <th>
                        buildingDirectionType
                    </th>
                </tr>
                {userData.map(user => (
                    <tr>
                        <td>
                            {`${user.customer.firstName} ${user.customer.lastName}`}
                        </td>
                        <td>
                            {`${user.approvalEmployee.firstName} ${user.approvalEmployee.lastName}`}
                        </td>
                        <td>
                        {`${user.buildingDirectionType.name}`}
                        </td>
                    </tr>
                ))}
            </table>
            <Button danger onClick={()=>Auth.logOut(logOut)}>LogOut</Button>
        </div>
    )
}
