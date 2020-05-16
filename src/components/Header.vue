<template>
    <header>
        <div>header logo だよ</div>

        <nav>
            <ul>
                <li><SignIn /></li>
                <li><SignUp /></li>
                <li><SignOut /></li>
            </ul>
        </nav>
        
    </Header>
</template>

<script>
import SignIn from  './Register/SignIn'
import SignUp from  './Register/SignUp'
import SignOut from './Register/SignOut'

export default {
    name: 'Header',
    components: {
        SignIn,
        SignUp,
        SignOut
    }
}
</script>