import loginApi from '../../services/login'

describe('loginUser', () => {
    test('login user ok status', async () => {
        let data = {
            email: 'nava@gmail.com',
            password: '0014245841'
        }
        try{
            let response = await loginApi.loginUser(
                '/users/login',
                {user: data}
            )
            expect(response.data.user).toHaveProperty('token')
            expect(response.data.user).toHaveProperty('username')
            expect(response.data.user).toHaveProperty('email' , data.email)
        }catch(err){
            expect(err.response.data).toHaveProperty('errors')
        }
    })
})