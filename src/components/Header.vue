<template>
    <header>
        <div>header logo だよ</div>

        <nav>
            <ul>
                <li><Login /></li>
                <li><LoginOrUp /></li>
                <li><LogOut /></li>
            </ul>
        </nav>
        
    </Header>
</template>

<script>
import Login from './Register/LogIn'
import LoginOrUp from './Register/LogInOrUp'
import LogOut from './Register/LogOut'

export default {
    name: 'Header',
    components: {
        Login,
        LoginOrUp,
        LogOut
    }
}
</script>